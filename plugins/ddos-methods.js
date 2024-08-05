const { join } = require('path');
const fs = require('fs');

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    const thumb = 'https://telegra.ph/file/b27e064ee5e69705b81fd.jpg'
    const m2 = `
Hallow parhann. Ini method yang tersedia!

> Tls
> Mix
> Https
> Ninja

#SiapMemberantasJudol :3
`;


conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `UreshiiBotz — DDOS`,
body: `By Farhan Amansyah`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/a60bd062bbd8c6e5377d2.png`,
sourceUrl: ``
}}, text: m2}, {quoted: m})
	  } catch (e) {
    conn.reply(m.chat, 'Yah Error!', m);
    throw e;
  }
};

handler.help = ['methods'];
handler.tags = ['ddos'];
handler.command = /^(methods)$/i;

module.exports = handler
