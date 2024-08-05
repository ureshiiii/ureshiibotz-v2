import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
  let info = fs.readFileSync('./media/menu.mp3')
  const kontak = {
	"displayName": 'My owner',
    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Frhn\nNICKNAME: Owner Frhn\nORG:Frhn\nTITLE:soft\nitem1.TEL;waid=6283873688108:+62 838-7368-8108\nitem1.X-ABLabel:Nomor Owner\nitem2.URL:https://www.instagram.com/ureshii.id_\nitem2.X-ABLabel:More\nitem3.EMAIL;type=INTERNET:farhanscan.4@gmail.com\nitem3.X-ABLabel:Mail Owner Frhn\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABADR:More\nitem4.X-ABLabel:Lokasi Saya\nBDAY;value=date:6-5-2008\nEND:VCARD`
}

await conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
await conn.sendFile(m.chat, info, '', '', m, true)
await m.reply('itu owner kesayangan aku kak, jangan di spam yaa *><*')
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = ['owner']

export default handler