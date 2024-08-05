let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
⤹ 🛍️  . . DIAMOND MLBB B

- 184 💎     =	Rp 48.500
- 284 💎     = Rp 74.000
- 355 💎     = Rp 92.000
- 408 💎     = Rp 105.000
- 568 💎     =	Rp 143.000
- 659 💎     =	Rp 169.000
- 760 💎     = Rp 193.000
- 1000 💎   = Rp 249.000
- 1200 💎   = Rp 313.000
- 1756 💎   = Rp 450.000
- 2010 💎   = Rp 468.000
- 4020 💎   = Rp 935.000

note:
➜ via id dan server 
➜ tanyakan stok sebelum order
➜ proses 10-30menit max 24 jam
➜ kesalahan id server bukan tanggung jawab admin
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['dm-mlbb-b']
handler.tags = ['gisha']
handler.command = /^(dm-mlbb-b)$/i

export default handler