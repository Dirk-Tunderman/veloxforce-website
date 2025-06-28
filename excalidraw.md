# AI Guide: Excalidraw in VS Code - Complete Visual Creation Manual

## Overview
This guide provides comprehensive instructions for creating visuals, flowcharts, and diagrams using the Excalidraw extension in VS Code. Follow these instructions to efficiently create professional-quality visual documentation.

## Installation and Setup

### Install Excalidraw Extension
1. Open VS Code Extensions view: `Ctrl+Shift+X` (Windows/Linux) or `⇧⌘X` (macOS)
2. Search for "Excalidraw" 
3. Install the extension by **pomdtr** (official extension)
4. No additional configuration required

### Extension Settings (Optional)
Add to VS Code settings.json for optimal experience:
```json
{
  "excalidraw.theme": "auto",
  "excalidraw.image.exportScale": 2,
  "excalidraw.image.exportWithBackground": true,
  "excalidraw.workspaceLibraryPath": ".vscode/excalidraw-library.json"
}
```

## File Creation Workflow

### Creating New Excalidraw Files
1. **Method 1 - New File**: 
   - Press `Ctrl+N` (new file)
   - Save with extension: `.excalidraw.png` (recommended) or `.excalidraw`
   
2. **Method 2 - From Explorer**:
   - Right-click in Explorer
   - Create new file with `.excalidraw.png` extension
   - Double-click to open

### File Format Selection Guide
- **`.excalidraw.png`**: Best choice - displays as image, remains editable
- **`.excalidraw.svg`**: Vector format, good for scaling
- **`.excalidraw`**: Raw JSON format, for data processing only

## Drawing Tools and Controls

### Essential Tools (Keyboard Shortcuts)
- **Selection**: `1` or `V` - Select and move objects
- **Rectangle**: `2` or `R` - Create boxes, containers
- **Ellipse**: `3` or `E` - Create circles, oval shapes  
- **Arrow**: `4` or `A` - Connect elements, show flow
- **Line**: `5` or `L` - Create straight connections
- **Freedraw**: `6` or `F` - Freehand drawing
- **Text**: `7` or `T` - Add labels and annotations
- **Image**: `8` or `I` - Insert images
- **Laser**: `9` - Presentation pointer

### Shape Modification Techniques
- **Perfect shapes**: Hold `Shift` while drawing (square, circle)
- **Duplicate**: `Ctrl+D` or `Alt+drag`
- **Group elements**: `Ctrl+G` (select multiple first)
- **Change style**: Select shape, use toolbar options
- **Resize**: Drag corner handles
- **Rotate**: Drag rotation handle

### Navigation Controls
- **Zoom**: Mouse wheel or `Ctrl + scroll`
- **Pan**: Hold `Space + drag` or middle mouse drag
- **Fit to view**: `Shift+1`
- **Reset zoom**: `Ctrl+0`
- **Grid toggle**: `Ctrl+'` (apostrophe)

## Creating Flowcharts - Step by Step

### Basic Flowchart Structure
1. **Start with process boxes**: Use Rectangle tool (`R`)
   - Draw starting process box
   - Add text with `T` tool
   - Label: "Start" or initial process name

2. **Add decision diamonds**: Use Ellipse tool (`E`) 
   - Create oval/diamond shapes for decisions
   - Add question text: "Is condition met?"
   - Use Tab key to cycle shape types (rectangle → diamond → ellipse)

3. **Connect with arrows**: Use Arrow tool (`A`)
   - Click start point, drag to end point
   - Label arrows with "Yes", "No", etc.
   - Use `Ctrl+Arrow keys` for auto-connected nodes

4. **Add process steps**: Continue with rectangles
   - Use consistent sizing
   - Keep text concise and clear

### Flowchart Best Practices
- **Flow direction**: Top to bottom or left to right consistently
- **Decision points**: Always have 2+ exit paths
- **Termination**: End with "End" or final outcome boxes
- **Color coding**: Use fills to categorize (process=blue, decision=yellow, etc.)
- **Alignment**: Use grid (`Ctrl+'`) for professional appearance

## Creating System Architecture Diagrams

### Component Layout Strategy
1. **Main components**: Use rectangles with clear labels
2. **Services/APIs**: Use rounded rectangles
3. **Databases**: Use cylinders (ellipse + rectangle)
4. **External systems**: Use dashed borders
5. **Data flow**: Use arrows with labels

### Architecture Diagram Workflow
1. **Sketch layout**: Start with main components positioning
2. **Add containers**: Group related services in larger boxes
3. **Show connections**: Use arrows for data/API calls
4. **Add labels**: Describe technologies, protocols
5. **Include legends**: Color/shape meaning explanations

## UI/UX Wireframing

### Wireframe Components
- **Containers**: Rectangles for sections, cards, panels
- **Text areas**: Rectangles with horizontal lines inside
- **Buttons**: Rounded rectangles with action labels
- **Images**: Rectangles with X pattern (use freedraw)
- **Navigation**: Horizontal bars with links

### Wireframe Process
1. **Layout structure**: Main containers first
2. **Navigation elements**: Headers, menus, footers
3. **Content areas**: Main sections, sidebars
4. **Interactive elements**: Buttons, forms, links
5. **Annotations**: Use text tool for notes and specifications

## Advanced Techniques

### Creating Custom Components
1. **Design component**: Create reusable element
2. **Group elements**: Select all parts, `Ctrl+G`
3. **Add to library**: Drag to library panel
4. **Reuse**: Drag from library to canvas

### Linking and Documentation
- **Add links**: Select element, `Ctrl+K`, enter URL
- **Embed in markdown**: Use standard image syntax
  ```markdown
  ![Diagram Title](./path/to/diagram.excalidraw.png)
  ```

### Layer Management
- **Bring forward**: `Ctrl+]`
- **Send backward**: `Ctrl+[`
- **Bring to front**: `Ctrl+Shift+]`
- **Send to back**: `Ctrl+Shift+[`

## Styling and Appearance

### Color and Style Options
- **Stroke color**: Outline color of shapes
- **Background color**: Fill color of shapes
- **Stroke width**: Line thickness (Thin, Bold, Extra Bold)
- **Stroke style**: Solid, Dashed, Dotted
- **Roughness**: Architect (neat), Artist (medium), Cartoonist (rough)
- **Opacity**: Transparency level

### Professional Styling Tips
- **Consistent colors**: Use 2-3 colors maximum
- **Hierarchy**: Larger/bolder for important elements
- **Whitespace**: Leave breathing room between elements
- **Alignment**: Use grid and alignment tools
- **Typography**: Keep text size consistent within element types

## Keyboard Shortcuts Reference

### Essential Shortcuts
- `Ctrl+Z`: Undo
- `Ctrl+Y`: Redo  
- `Ctrl+C`: Copy
- `Ctrl+V`: Paste
- `Ctrl+A`: Select all
- `Delete`: Delete selected
- `Ctrl+D`: Duplicate
- `Ctrl+G`: Group
- `Ctrl+Shift+G`: Ungroup

### Movement and Alignment
- `Arrow keys`: Move selected elements
- `Shift+Arrow`: Move in small increments
- `Ctrl+Shift+Arrow`: Align elements
- `Ctrl+Arrow`: Create connected node in direction

### View Controls
- `Ctrl +/-`: Zoom in/out
- `Ctrl+0`: Reset zoom
- `Shift+1`: Fit all elements
- `Ctrl+'`: Toggle grid
- `Alt+Z`: Toggle zen mode

## Export and Sharing

### Export Options
1. **Built-in formats**: `.excalidraw.png` exports automatically
2. **Manual export**: File menu → Export
3. **Copy as PNG**: `Ctrl+Shift+E`, then `Ctrl+C`
4. **High resolution**: Increase export scale in settings

### Version Control Integration
- **Git-friendly**: `.excalidraw.png` files show visual diffs
- **Embedded data**: Full editing capability preserved
- **Documentation**: Works in GitHub README files
- **Collaboration**: Team members can edit shared diagrams

## Troubleshooting Common Issues

### Performance Issues
- **Large diagrams**: Keep under 4,000 objects
- **Memory usage**: Close unused Excalidraw tabs
- **Lag**: Reduce complexity, use groups to decrease object count

### File and Display Issues
- **File won't open**: Check file extension is correct
- **Theme problems**: Set `"excalidraw.theme": "auto"` in settings
- **Missing toolbar**: Refresh VS Code window

### Workflow Issues
- **No new file command**: Create manually with correct extension
- **Can't find extension**: Search for publisher "pomdtr"
- **Export problems**: Use built-in `.excalidraw.png` format instead

## Quick Start Checklist

### For Creating Any Diagram:
1. ✅ Install Excalidraw extension (publisher: pomdtr)
2. ✅ Create new file with `.excalidraw.png` extension
3. ✅ Plan layout (sketch main components first)
4. ✅ Use appropriate tools (Rectangle for boxes, Arrow for connections)
5. ✅ Add text labels for clarity
6. ✅ Apply consistent styling
7. ✅ Check alignment and spacing
8. ✅ Save file (auto-exports as viewable PNG)

### For Flowcharts Specifically:
1. ✅ Start with "Start" box (Rectangle tool)
2. ✅ Add process steps (Rectangles)
3. ✅ Add decision points (Ellipse/Diamond shapes)
4. ✅ Connect with labeled arrows
5. ✅ End with termination box
6. ✅ Verify all paths lead somewhere
7. ✅ Add title and legend if needed

## File Organization Best Practices

### Directory Structure
```
project/
├── docs/
│   ├── diagrams/
│   │   ├── architecture.excalidraw.png
│   │   ├── user-flow.excalidraw.png
│   │   └── wireframes.excalidraw.png
│   └── README.md
├── .vscode/
│   ├── settings.json
│   └── excalidraw-library.json
└── src/
```

### Naming Conventions
- Use descriptive names: `user-authentication-flow.excalidraw.png`
- Include version if needed: `api-architecture-v2.excalidraw.png`
- Use hyphens for spaces: `system-overview.excalidraw.png`
- Group by purpose: `wireframe-`, `flow-`, `arch-` prefixes

## Integration with Documentation

### Markdown Integration
```markdown
# System Architecture

![System Overview](./diagrams/system-architecture.excalidraw.png)

The diagram above shows the main components of our system...
```

### README Integration
- Place diagrams in docs/ or assets/ folder
- Use relative paths in markdown links
- Ensure diagrams have descriptive alt text
- Keep diagrams updated with code changes

This guide provides everything needed to create professional visual documentation using Excalidraw in VS Code. The combination of intuitive drawing tools and seamless VS Code integration makes it ideal for technical documentation, system design, and workflow visualization.