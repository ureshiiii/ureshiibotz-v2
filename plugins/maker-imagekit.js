import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
await m.react(rwait)
let urut = text.split`|`
  let thm = urut[0]
  let text1 = urut[1]
  let text2 = urut[2]
if (!text) throw `
Format salah
Contoh: ${usedPrefix}${command} tema|teks

📜 *List tema*

*-* kucing
*-* senyum
*-* monyet
`
let res = `https://ik.imagekit.io/aygemuy/tr:ot-${text1},ots-400,otc-ffff00,or-50/${thm}.jpg`
conn.sendFile(m.chat, res, 'kitmeme.jpg', `✅ Sudah jadi`, m, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: Buffer.alloc(0)}}}})

}

handler.help = ['imagekit <tema|teks>']
handler.tags = ['maker']
handler.command = /^(imagekit)$/i

export default handler