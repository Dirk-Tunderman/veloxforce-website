// diagrams/converter.js - Complete updated version
const fs = require('fs');
const path = require('path');

// Color schemes for different diagram types
const colorSchemes = {
  flowchart: {
    start: { backgroundColor: "#c8e6c9", strokeColor: "#388e3c" },
    process: { backgroundColor: "#bbdefb", strokeColor: "#1976d2" },
    decision: { backgroundColor: "#fff9c4", strokeColor: "#f9a825" },
    end: { backgroundColor: "#ffcdd2", strokeColor: "#d32f2f" },
    fail: { backgroundColor: "#ffe0b2", strokeColor: "#f57c00" },
    ai: { backgroundColor: "#e1bee7", strokeColor: "#7b1fa2" },
    learning: { backgroundColor: "#dcedc8", strokeColor: "#689f38" }
  },
  system: {
    service: { backgroundColor: "#e3f2fd", strokeColor: "#1565c0" },
    database: { backgroundColor: "#f3e5f5", strokeColor: "#7b1fa2" },
    api: { backgroundColor: "#e8f5e8", strokeColor: "#2e7d32" },
    user: { backgroundColor: "#fff3e0", strokeColor: "#ef6c00" }
  }
};

// Generate unique IDs
function generateId() {
  return Math.random().toString(36).substring(2, 15);
}

// Calculate text dimensions more accurately
function calculateTextDimensions(text, fontSize = 14) {
  if (!text) return { width: 120, height: 25 };
  
  const lines = text.split('\n');
  const avgCharWidth = fontSize * 0.6;
  const lineHeight = fontSize * 1.5;
  
  const maxLineLength = Math.max(...lines.map(line => line.length));
  const width = Math.max(120, maxLineLength * avgCharWidth + 40);
  const height = lines.length * lineHeight;
  
  return { width, height };
}

// Calculate text width for auto-sizing (improved)
function calculateWidth(text) {
  if (!text) return 120;
  const lines = text.split('\n');
  const maxLineLength = Math.max(...lines.map(line => line.length));
  return Math.max(140, Math.min(350, maxLineLength * 8 + 40));
}

// Calculate text height based on number of lines
function calculateHeight(text) {
  if (!text) return 60;
  const lines = text.split('\n');
  const baseHeight = 60;
  const additionalHeightPerLine = 20;
  return baseHeight + (lines.length - 1) * additionalHeightPerLine;
}

// Get connection point on element edge
function getConnectionPoint(element, targetElement) {
  const { x, y, width, height } = element;
  const centerX = x + width / 2;
  const centerY = y + height / 2;
  
  const targetCenterX = targetElement.x + targetElement.width / 2;
  const targetCenterY = targetElement.y + targetElement.height / 2;
  
  // Determine best connection side based on relative positions
  const dx = targetCenterX - centerX;
  const dy = targetCenterY - centerY;
  
  if (Math.abs(dx) > Math.abs(dy)) {
    // Horizontal connection
    if (dx > 0) {
      // Connect from right
      return { x: x + width, y: centerY };
    } else {
      // Connect from left
      return { x: x, y: centerY };
    }
  } else {
    // Vertical connection
    if (dy > 0) {
      // Connect from bottom
      return { x: centerX, y: y + height };
    } else {
      // Connect from top
      return { x: centerX, y: y };
    }
  }
}

// Detect format type
function detectFormat(data) {
  // Check if it's native Excalidraw format
  if (data.type === "excalidraw" && data.elements && data.appState) {
    return 'excalidraw';
  }
  
  // Check if it's Agent-Ready format
  if (data.elements && data.elements.some(el => 
    (el.type === 'arrow' && el.from && el.to) || 
    (el.category && el.text !== undefined)
  )) {
    return 'agent';
  }
  
  return 'unknown';
}

// Convert native Excalidraw to Agent format - FIXED VERSION
function excalidrawToAgentFormat(excalidrawData) {
  const agentFormat = {
    title: "Converted from Excalidraw",
    type: "flowchart",
    elements: []
  };
  
  // Map to track shape elements by ID
  const shapeMap = new Map();
  const textMap = new Map();
  const arrowMap = new Map();
  
  // First pass: Index all elements
  excalidrawData.elements.forEach(element => {
    if (element.type === 'text') {
      textMap.set(element.id, element);
      // Also create a reverse lookup by containerId
      if (element.containerId) {
        textMap.set(`container-${element.containerId}`, element);
      }
    } else if (element.type === 'arrow') {
      arrowMap.set(element.id, element);
    } else {
      shapeMap.set(element.id, element);
    }
  });
  
  // Second pass: Process shapes with their text
  shapeMap.forEach((element, id) => {
    // Find associated text - look for text with this shape as containerId
    let text = '';
    const associatedText = textMap.get(`container-${id}`);
    if (associatedText) {
      text = associatedText.text;
    }
    
    // If no text found via containerId, try boundElements (older format)
    if (!text && element.boundElements) {
      const boundText = element.boundElements.find(bound => bound.type === 'text');
      if (boundText) {
        const textElement = textMap.get(boundText.id);
        if (textElement) {
          text = textElement.text;
        }
      }
    }
    
    // Determine category from color
    let category = 'process';
    const bgColor = element.backgroundColor?.toLowerCase();
    
    // Map colors to categories (handle both hex codes)
    const colorMap = {
      '#c8e6c9': 'start',
      '#dcfce7': 'start',
      '#d1fae5': 'learning',
      '#ffe0b2': 'fail',
      '#fed7aa': 'fail',
      '#fff9c4': 'decision',
      '#fef3c7': 'decision',
      '#bbdefb': 'process',
      '#dbeafe': 'process',
      '#e1bee7': 'ai',
      '#f3e8ff': 'ai',
      '#ffcdd2': 'end',
      '#059669': 'learning',
      '#16a34a': 'start'
    };
    
    if (colorMap[bgColor]) {
      category = colorMap[bgColor];
    } else if (element.type === 'ellipse') {
      // Ellipses are often start/end
      if (bgColor === '#dcfce7') {
        category = 'start';
      }
    }
    
    const agentElement = {
      id: element.id,
      type: element.type,
      text: text || '', // Ensure text is never undefined
      category: category,
      x: element.x,
      y: element.y,
      width: element.width,
      height: element.height
    };
    
    agentFormat.elements.push(agentElement);
  });
  
  // Third pass: Process arrows
  arrowMap.forEach((element, id) => {
    const fromId = element.startBinding?.elementId;
    const toId = element.endBinding?.elementId;
    
    if (!fromId || !toId) {
      console.warn('Arrow missing bindings:', element);
      return;
    }
    
    // Skip if connecting to/from text elements (not shapes)
    if (!shapeMap.has(fromId) || !shapeMap.has(toId)) {
      console.warn(`Arrow connecting to non-shape elements: ${fromId} -> ${toId}`);
      return;
    }
    
    // Find label - look for text elements bound to this arrow
    let label = '';
    if (element.boundElements) {
      const boundLabel = element.boundElements.find(bound => bound.type === 'text');
      if (boundLabel) {
        const labelElement = textMap.get(boundLabel.id);
        if (labelElement) {
          label = labelElement.text;
        }
      }
    }
    
    const arrow = {
      type: 'arrow',
      from: fromId,
      to: toId
    };
    
    if (label) {
      arrow.label = label;
    }
    
    // Preserve stroke style if dashed
    if (element.strokeStyle === 'dashed') {
      arrow.strokeStyle = 'dashed';
    }
    
    agentFormat.elements.push(arrow);
  });
  
  console.log(`📊 Converted: ${shapeMap.size} shapes, ${textMap.size} text elements, ${arrowMap.size} arrows`);
  
  return agentFormat;
}

// Main conversion function
function agentToExcalidraw(agentOutput, options = {}) {
  const {
    theme = 'flowchart',
    autoLayout = true,
    spacing = { x: 300, y: 130 }
  } = options;
  
  const colors = colorSchemes[theme] || colorSchemes.flowchart;
  const elementMap = new Map();
  const excalidrawElements = [];
  const elementInfo = new Map();
  
  // First pass: Create all shape elements
  agentOutput.elements.forEach((element, index) => {
    if (element.type === 'arrow' || element.type === 'line' || element.type === 'text') return;
    
    const elementColors = colors[element.category] || colors.process;
    const id = element.id || generateId();
    
    // Auto-calculate position if not provided
    let { x, y } = element;
    if (autoLayout && (!x || !y)) {
      x = (index % 4) * spacing.x + 100;
      y = Math.floor(index / 4) * spacing.y + 100;
    }
    
    const width = element.width || calculateWidth(element.text);
    const height = element.height || calculateHeight(element.text);
    
    // Store complete element info for connection calculations
    const elementData = {
      id,
      x,
      y,
      width,
      height,
      element
    };
    
    elementMap.set(element.id || element.text || `element-${index}`, elementData);
    elementInfo.set(id, elementData);
    
    // Create Excalidraw element
    const excalidrawElement = {
      type: element.type || "rectangle",
      version: 1,
      versionNonce: Math.floor(Math.random() * 1000000),
      isDeleted: false,
      id,
      fillStyle: "solid",
      strokeWidth: 2,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      angle: 0,
      x,
      y,
      strokeColor: elementColors.strokeColor || "#1e1e1e",
      backgroundColor: elementColors.backgroundColor || "transparent",
      width,
      height,
      seed: Math.floor(Math.random() * 1000000),
      groupIds: [],
      frameId: null,
      roundness: element.type === "rectangle" ? {
        type: 3,
        value: 8
      } : null,
      boundElements: [],
      updated: 1,
      link: null,
      locked: false
    };

    // Special handling for diamond shapes
    if (element.type === "diamond") {
      excalidrawElement.type = "diamond";
      // Diamonds need extra height for proper text fitting
      excalidrawElement.height = height + 20;
    }
    
    // Special handling for ellipse shapes
    if (element.type === "ellipse") {
      excalidrawElement.type = "ellipse";
    }
    
    excalidrawElements.push(excalidrawElement);
    
    // Add text if provided
    if (element.text) {
      const textDimensions = calculateTextDimensions(element.text);
      const textId = generateId();
      
      // Calculate proper text position for centering
      const textX = x + (width - textDimensions.width) / 2;
      const textY = y + (height - textDimensions.height) / 2;
      
      const textElement = {
        type: "text",
        version: 1,
        versionNonce: Math.floor(Math.random() * 1000000),
        isDeleted: false,
        id: textId,
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: textX,
        y: textY,
        strokeColor: "#1e1e1e",
        backgroundColor: "transparent",
        width: textDimensions.width,
        height: textDimensions.height,
        seed: Math.floor(Math.random() * 1000000),
        groupIds: [],
        frameId: null,
        roundness: null,
        boundElements: [],
        updated: 1,
        link: null,
        locked: false,
        fontSize: 14,
        fontFamily: 1,
        text: element.text,
        textAlign: "center",
        verticalAlign: "middle",
        containerId: id,
        originalText: element.text,
        lineHeight: 1.5,
        baseline: 18
      };
      
      excalidrawElements.push(textElement);
      
      // Update container to reference text
      excalidrawElement.boundElements.push({
        id: textId,
        type: "text"
      });
    }
  });
  
  // Second pass: Create arrows/connections
  agentOutput.elements.forEach((element) => {
    if (element.type !== 'arrow' && element.type !== 'line') return;

    // Handle both Agent-Ready and native Excalidraw formats
    let fromId, toId;
    
    if (element.from && element.to) {
      // Agent-Ready format
      fromId = element.from;
      toId = element.to;
    } else if (element.startBinding && element.endBinding) {
      // Native Excalidraw format
      fromId = element.startBinding.elementId;
      toId = element.endBinding.elementId;
    } else {
      console.warn('Arrow missing connection info:', element);
      return;
    }

    const startRef = elementMap.get(fromId);
    const endRef = elementMap.get(toId);

    if (!startRef || !endRef) {
      console.warn(`Connection not found: ${fromId} -> ${toId}`);
      console.warn(`Available elements:`, Array.from(elementMap.keys()));
      return;
    }

    const arrowId = generateId();
    
    // Get edge connection points instead of centers
    const startPoint = getConnectionPoint(startRef, endRef);
    const endPoint = getConnectionPoint(endRef, startRef);
    
    // Calculate arrow position and dimensions
    const minX = Math.min(startPoint.x, endPoint.x);
    const minY = Math.min(startPoint.y, endPoint.y);
    const arrowWidth = Math.abs(endPoint.x - startPoint.x);
    const arrowHeight = Math.abs(endPoint.y - startPoint.y);

    const arrowElement = {
      type: "arrow",
      version: 1,
      versionNonce: Math.floor(Math.random() * 1000000),
      isDeleted: false,
      id: arrowId,
      fillStyle: "solid",
      strokeWidth: 2,
      strokeStyle: element.strokeStyle || "solid",
      roughness: 1,
      opacity: 100,
      angle: 0,
      x: minX,
      y: minY,
      strokeColor: "#1e1e1e",
      backgroundColor: "transparent",
      width: arrowWidth,
      height: arrowHeight,
      seed: Math.floor(Math.random() * 1000000),
      groupIds: [],
      frameId: null,
      roundness: {
        type: 2
      },
      boundElements: [],
      updated: 1,
      link: null,
      locked: false,
      startBinding: {
        elementId: startRef.id,
        focus: 0,
        gap: 1
      },
      endBinding: {
        elementId: endRef.id,
        focus: 0,
        gap: 1
      },
      lastCommittedPoint: null,
      startArrowhead: null,
      endArrowhead: "arrow",
      points: [
        [startPoint.x - minX, startPoint.y - minY],
        [endPoint.x - minX, endPoint.y - minY]
      ]
    };

    excalidrawElements.push(arrowElement);

    // Add arrow label if provided
    if (element.label) {
      const labelTextDimensions = calculateTextDimensions(element.label, 12);
      const labelId = generateId();
      
      // Calculate label position at midpoint of arrow
      const midX = (startPoint.x + endPoint.x) / 2;
      const midY = (startPoint.y + endPoint.y) / 2;
      
      // Offset label slightly to avoid overlapping with arrow
      const labelX = midX - labelTextDimensions.width / 2;
      const labelY = midY - labelTextDimensions.height / 2 - 10;

      const labelElement = {
        type: "text",
        version: 1,
        versionNonce: Math.floor(Math.random() * 1000000),
        isDeleted: false,
        id: labelId,
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: labelX,
        y: labelY,
        strokeColor: "#1e1e1e",
        backgroundColor: "#ffffff",
        width: labelTextDimensions.width,
        height: labelTextDimensions.height,
        seed: Math.floor(Math.random() * 1000000),
        groupIds: [],
        frameId: null,
        roundness: null,
        boundElements: [],
        updated: 1,
        link: null,
        locked: false,
        fontSize: 12,
        fontFamily: 1,
        text: element.label,
        textAlign: "center",
        verticalAlign: "middle",
        containerId: null,
        originalText: element.label,
        lineHeight: 1.5,
        baseline: 14
      };

      excalidrawElements.push(labelElement);

      // Update arrow to reference the label
      arrowElement.boundElements.push({
        id: labelId,
        type: "text"
      });
    }
  });

  return excalidrawElements;
}

// Create complete Excalidraw file structure
function createExcalidrawFile(elements) {
  return {
    type: "excalidraw",
    version: 2,
    source: "https://excalidraw.com",
    elements,
    appState: {
      gridSize: null,
      viewBackgroundColor: "#ffffff"
    },
    files: {}
  };
}

// Main execution function
function convertJsonToExcalidraw(inputPath, outputPath, options = {}) {
  try {
    // Read input JSON
    const inputData = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
    
    // Detect format
    const format = detectFormat(inputData);
    console.log(`📝 Detected format: ${format}`);
    
    let agentOutput;
    
    if (format === 'excalidraw') {
      // Convert native Excalidraw to Agent format first
      console.log('🔄 Converting native Excalidraw format to Agent format...');
      agentOutput = excalidrawToAgentFormat(inputData);
    } else if (format === 'agent') {
      // Already in Agent format
      agentOutput = inputData;
    } else {
      throw new Error('Unknown JSON format. Expected Agent-Ready or native Excalidraw format.');
    }

    // Convert to Excalidraw elements
    const elements = agentToExcalidraw(agentOutput, options);

    // Create complete file structure
    const excalidrawFile = createExcalidrawFile(elements);

    // Write to output file
    fs.writeFileSync(outputPath, JSON.stringify(excalidrawFile, null, 2));

    console.log(`✅ Successfully converted ${inputPath} to ${outputPath}`);
    console.log(`📊 Created ${elements.length} elements`);

    return excalidrawFile;
  } catch (error) {
    console.error('❌ Conversion failed:', error.message);
    throw error;
  }
}

// Command line interface
if (require.main === module) {
  const inputFile = process.argv[2] || './diagrams/agent-output.json';
  const outputFile = process.argv[3] || './diagrams/output.excalidraw';
  const theme = process.argv[4] || 'flowchart';

  convertJsonToExcalidraw(inputFile, outputFile, { theme });
}

module.exports = {
  agentToExcalidraw,
  convertJsonToExcalidraw,
  createExcalidrawFile,
  colorSchemes,
  excalidrawToAgentFormat,
  detectFormat
};