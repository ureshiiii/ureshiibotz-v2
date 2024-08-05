let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*₊  📸  ⁄⁄ OPEN PAID EDIT JEDAG JEDUG*

⤹ 📸  . . edit jj foto saja
⟣┄  🔮 : 1 - 15 detik = Rp 12.000
⟣┄  🔮 : 1 - 20 detik = Rp 15.000
⟣┄  🔮 : 1 - 30 detik = Rp 18.000
⟣┄  🔮 : 1 - 45 detik = Rp 20.000

𐀔 . . ┄────   ֢   ׁ📸  ֢  ───┄ . .  𐀔

⤹ 📸  . . edit jj foto + video 
⟣┄  🔮 : 1 - 15 detik = Rp 15.000
⟣┄  🔮 : 1 - 20 detik = Rp 20.000
⟣┄  🔮 : 1 - 30 detik = Rp 25.000
⟣┄  🔮 : 1 - 45 detik = Rp 30.000

⤹ 📸  . . note
• prset dari kamu, jika dri admn +1.000
• jika edit jj foto+video nya gameplay +3.000
• order = sabar
• mahal karena resolusi HD & import lama
• tanyakan admn dulu sebelum order
• diproses sesuai antrian
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['paid-edit']
handler.tags = ['gisha']
handler.command = /^(paid-edit)$/i

export default handler