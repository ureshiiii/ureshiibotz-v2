let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*˚  ˖   ıllı FORMAT ORDER DM FF📝  ˚*

᥀ 🛍️⃘𐇽݂.   Id :
᥀ 🛍️⃘𐇽.   Order :

note:
➜ via id
➜ tanyakan slot sebelum order
➜ proses 10-30menit max 24 jam
➜ kesalahan id bukan tanggung jawab admin
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> Format Gisha Store', 'status@broadcast')
}
handler.help = ['format-dm-ff']
handler.tags = ['gisha2']
handler.command = /^(format-dm-ff)$/i

export default handler