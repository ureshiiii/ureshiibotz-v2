import { toDataURL } from 'qrcode'

var handler = async (m, { conn, text }) => {

if (!text) throw 'Teksnya mana banh?'
 m.react(rwait)
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', 'Ini dia kak ✅', m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i


export default handler