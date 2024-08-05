let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
⤹ 🛍️  . . DIAMOND FREE FIRE

- 180 💎     = Rp 26.500
- 210 💎     = Rp 29.000
- 280 💎     = Rp 37.500
- 300 💎     = Rp 42.000
- 355 💎     = Rp 48.000
- 400 💎     = Rp 54.500
- 500 💎     = Rp 67.000
- 545 💎     = Rp 73.000
- 600 💎     = Rp 82.000
- 645 💎     = Rp 86.000
- 720 💎     = Rp 94.000
- 770 💎     = Rp 100.000
- 800 💎     = Rp 105.000
- 930 💎     = Rp 120.000
- 1000 💎   = Rp 130.000
- 1200 💎   = Rp 158.000
- 1450 💎   = Rp 186.000
- 1510 💎   = Rp 194.000
- 2000 💎   = Rp 257.000
- 2180 💎   = Rp 280.000
- 2575 💎   = Rp 310.000
- 3000 💎   = Rp 382.000

- Membership Mingguan = Rp 32.000
- Membership Bulanan = Rp 85.000

note:
➜ via id
➜ tanyakan stok sebelum order
➜ proses 10-30menit max 24 jam
➜ kesalahan id bukan tanggung jawab admin
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['dm-ff']
handler.tags = ['gisha']
handler.command = /^(dm-ff)$/i

export default handler