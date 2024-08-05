import fs from 'fs'

let handler = async (m, { conn }) => {
let info = `
📜 Sewa bot WhatsApp
10K Permanen

📜 Premium bot WhatsApp
Gratis, minta owner aja

📮 Payment
Dana, Gopay, Ovo, Pulsa Axis, Qris
`;
conn.sendMessage(m.chat, {
      text: info,
      contextInfo: {
      externalAdReply: {
      title: `Sewa | UreshiiBotz`,
      body: global.author,
      thumbnailUrl: global.qris,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}

handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)$/i

export default handler;