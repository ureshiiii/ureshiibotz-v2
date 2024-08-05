let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
⤹ 🛍️  . . DIAMOND FREE FIRE KECIL

- 20 💎       = Rp 4.384
- 30 💎       = Rp 5.974
- 40 💎       = Rp 7.530
- 50 💎       = Rp 7.900
- 60 💎       = Rp 8.900
- 70 💎       = Rp 9.800
- 90 💎       = Rp 13.400
- 100 💎     = Rp 13.850
- 120 💎     = Rp 16.519
- 145 💎     = Rp 19.800

note:
➜ via id
➜ tanyakan stok sebelum order
➜ proses 10-30menit max 24 jam
➜ kesalahan id bukan tanggung jawab admin
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['dm-ff-kecil']
handler.tags = ['gisha']
handler.command = /^(dm-ff-kecil)$/i

export default handler