let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
⤹ 🛍️  . . WEEKLY DIAMOND PASS

¡❐ WDP ×1    : Rp 28.000
¡❐ WDP ×2   : Rp 56.000
¡❐ WDP ×3   : Rp 84.000

note:
➜ via id dan server 
➜ selesaikan misi top up 100💎
➜ mendapatkan 220💎 dan printilan nya
➜ proses 10-30menit max 24 jam
➜ kesalahan id server bukan tanggung jawab admin
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['wdp']
handler.tags = ['gisha']
handler.command = /^(wdp)$/i

export default handler