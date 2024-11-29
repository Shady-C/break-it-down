const fs = require('fs/promises');
const path = require('path');

async function cleanDirectories() {
  const dirsToClean = ['.next', 'node_modules'];
  
  for (const dir of dirsToClean) {
    try {
      await fs.rm(path.join(__dirname, '..', dir), { recursive: true, force: true });
      console.log(`Cleaned ${dir}`);
    } catch (error) {
      if (error.code !== 'ENOENT') {
        console.error(`Error cleaning ${dir}:`, error);
      }
    }
  }
}

cleanDirectories();
