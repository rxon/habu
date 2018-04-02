const devip = require('dev-ip');
const qrcode = require('qrcode-terminal');

module.exports = port => {
  if (typeof port === 'undefined') console.log('');
  const externalUrl = `http://${devip()[0]}:${port}`;
  const cyan = '\u001b[36m';
  const reset = '\u001b[0m';

  console.log(`   Local: ${cyan}http://localhost:${port}${reset}`);
  console.log(`External: ${cyan}${externalUrl}${reset}`);
  qrcode.generate(externalUrl, { small: true });
};
