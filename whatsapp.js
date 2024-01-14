const QRCode = require('qrcode');
const fs = require('fs');

// Your WhatsApp number with the country code (replace with your own number)
const phoneNumber = '5532988725488';

// Message to be sent when the QR code is scanned

const nomeDoProfisional = 'Luciano'
const nomeDaEmpresa = "Conceito Cred"

const message = `Oi ${nomeDoProfisional}. Podemos conversar sobre as soluções que a ${nomeDaEmpresa} oferece?`


// Create the WhatsApp URL
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

// Output file path for the generated QR code image
const outputFilePath = `${nomeDoProfisional}_whatsapp_qrcode.png`

// Set the width and height of the QR code (in pixels)
const options = {
  width: 300,
  height: 300,
};

// Generate QR code with the WhatsApp URL
QRCode.toFile(outputFilePath, whatsappUrl, options, (err) => {
  if (err) throw err;
  console.log(`WhatsApp QR code saved to ${outputFilePath}`);
});