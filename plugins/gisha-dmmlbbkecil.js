let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
⤹ 🛍️  . . DIAMOND MLBB KECIL

- 3 💎       = Rp 1.100
- 5 💎       = Rp 2.000
- 10 💎     = Rp 3.500
- 14 💎     = Rp 4.500
- 28 💎     =	 Rp 8.000
- 36 💎     =	 Rp 10.000
- 44 💎     =	 Rp 12.000
- 50 💎     = Rp 14.200
- 70 💎     = Rp 19.500
- 85 💎     = Rp 22.800
- 100 💎   = Rp 27.300
- 140 💎   = Rp 37.000
- 148 💎   = Rp 37.800

note:
➜ via id dan server 
➜ tanyakan stok sebelum order
➜ proses 10-30menit max 24 jam
➜ kesalahan id server bukan tanggung jawab admin
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['dm-mlbb-kecil']
handler.tags = ['gisha']
handler.command = /^(dm-mlbb-kecil)$/i

export default handler