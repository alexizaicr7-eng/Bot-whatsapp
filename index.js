
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage','--disable-gpu','--no-zygote','--single-process']
  }
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
  console.log('Escanea el QR bro');
});

client.on('ready', () => {
  console.log('Bot listo bro!');
});

client.on('message', async msg => {
  if (msg.body.toLowerCase() === 'hola') {
    msg.reply('Hola bro, soy tu bot 🔥');
  }
});

client.initialize();const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
  console.log('Escanea el QR bro');
});

client.on('ready', () => {
  console.log('Bot listo bro!');
});

client.on('message', async msg => {
  const texto = msg.body.toLowerCase();

  if (texto === '!hola') {
    msg.reply('Hola bro! Soy tu bot 🤖');
  }

  if (texto === '!menu') {
    msg.reply('Comandos bro:\n!hola - saludar\n!menu - ver menu\n!ping - probar');
  }

  if (texto === '!ping') {
    msg.reply('pong bro 🏓');
  }
});

client.initialize();
