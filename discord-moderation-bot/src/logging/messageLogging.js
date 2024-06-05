const fs = require('fs');
const path = require('path');

const logMessage = (message) => {
  const logDir = path.join(__dirname, '../../logs');
  const logFile = path.join(logDir, 'messageLogs.txt');
  
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }
  
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} - ${message}\n`;
  
  fs.appendFile(logFile, logEntry, (err) => {
    if (err) {
      console.error('Error writing to message log:', err);
    }
  });
};

module.exports = {
  logMessage,
};