let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
⤹ ✈️  . . JOKI BORDER AIRPLANE 

¡❐ Border saja = Rp 900.000
¡❐ Border + 1000💎 = Rp 1.100.000

note:
➜ diamond vilog play legal
➜ tanyakan stok sebelum order
➜ proses slow
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['border-airplane']
handler.tags = ['gisha']
handler.command = /^(border-airplane)$/i

export default handler