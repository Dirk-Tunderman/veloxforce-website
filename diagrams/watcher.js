// diagrams/watcher.js
const chokidar = require('chokidar');
const { convertJsonToExcalidraw } = require('./converter');
const path = require('path');

console.log('🔍 Starting file watcher...');
console.log('📁 Watching: ./diagrams/agent-output.json');
console.log('📋 Press Ctrl+C to stop\n');

// Watch for changes in agent-output.json
const watcher = chokidar.watch('./diagrams/agent-output.json', {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});

watcher
  .on('add', path => {
    console.log(`📄 File added: ${path}`);
    convertFile();
  })
  .on('change', path => {
    console.log(`📝 File changed: ${path}`);
    convertFile();
  })
  .on('error', error => console.log(`❌ Watcher error: ${error}`));

function convertFile() {
  try {
    convertJsonToExcalidraw(
      './diagrams/agent-output.json',
      './diagrams/output.excalidraw',
      { 
        theme: 'flowchart',
        autoLayout: true,
        spacing: { x: 250, y: 120 }
      }
    );
    console.log('✨ Conversion complete! Open output.excalidraw in VS Code\n');
  } catch (error) {
    console.error('❌ Auto-conversion failed:', error.message);
  }
}
