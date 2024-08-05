let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
⤹ 🛍️  . . UC PUBG MOBILE

- 16 UC           = Rp 10.000
- 26 UC           = Rp 12.000
- 30 UC           = Rp 14.000
- 50 UC           = Rp 17.000
- 60 UC           = Rp 18.000
- 70 UC           = Rp 20.000
- 100 UC         = Rp 27.000
- 125 UC         = Rp 35.000
- 150 UC         = Rp 39.500
- 200 UC         = Rp 46.000
- 210 UC         = Rp 48.000
- 250 UC         = Rp 57.000
- 300 UC         = Rp 66.000
- 325 UC         = Rp 68.000
- 500 UC         = Rp 110.000
- 550 UC         = Rp 115.000
- 660 UC         = Rp 130.000
- 700 UC         = Rp 145.000
- 800 UC         = Rp 155.000
- 1000 UC       = Rp 197.000
- 1250 UC       = Rp 242.000
- 1500 UC       = Rp 295.000
- 1800 UC       = Rp 330.000
- 2000 UC       = Rp 385.000

note:
➜ via id
➜ tanyakan slot sebelum order
➜ proses 10-30menit max 24 jam
➜ kesalahan id bukan tanggung jawab admin
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['uc-pubg']
handler.tags = ['gisha']
handler.command = /^(uc-pubg)$/i

export default handler