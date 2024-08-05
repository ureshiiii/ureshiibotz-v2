let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*📱 CANVA PRO*

➺ 1 bulan = 3k
➺ 2 bulan = 4k
➺ 3 bulan = 5k
➺ 4 bulan = 6k
➺ 6 bulan = 8k
➺ 1 tahun = 10k (garansi 6 bln)
➺ 1 tahun = 20k (garansi 12 bln)
➺ lifetime = 25k (garansi 6 bln)

—⃝👩🏻‍💻 CANVA ADMIN 45 day = 8k
(bisa invite 100 member)

—⃝👩🏻‍💻 CANVA OWNER 45 day = 10k
(bisa invite 500 member+5 admin)

Note:
• legal dan full garansi
• bisa semua device ios, andro, windows.
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['canva']
handler.tags = ['gisha']
handler.command = /^(canva)$/i

export default handler