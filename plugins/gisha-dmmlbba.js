let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
⤹ 🛍️  . . DIAMOND MLBB A

- 170 💎     =	Rp 44.500
- 257 💎     = Rp 67.000
- 344💎      = Rp 87.500
- 448 💎     = Rp 116.000
- 514 💎     = Rp 132.000
- 600 💎     =	Rp 151.000
- 706 💎     =	Rp 175.000
- 875 💎     = Rp 215.000
- 963 💎     = Rp 239.000
- 1500 💎   = Rp 380.000
- 1669 💎   = Rp 420.000
- 2195 💎   = Rp 514.000
- 2578 💎   = Rp 612.000
- 2976 💎   = Rp 715.000
- 3688 💎   = Rp 875.000
- 4394 💎   = Rp 1.035.000
- 5545 💎   = Rp 1.360.000
- 6000 💎   = Rp 1.475.000
- 6840 💎   = Rp 1.610.000
- 7502 💎   = Rp 1.825.000

note:
➜ via id dan server 
➜ tanyakan stok sebelum order
➜ proses 10-30menit max 24 jam
➜ kesalahan id server bukan tanggung jawab admin
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['dm-mlbb-a']
handler.tags = ['gisha']
handler.command = /^(dm-mlbb-a)$/i

export default handler