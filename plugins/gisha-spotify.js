let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*📱 SPOTIFY*

—⃝👩🏻‍💻 FAMPLAN
 1 bulan = 15k
 2 bulan = 20k
 3 bulan = 30k
 4 bulan = 35k
 5 bulan = 40k
 6 bulan = 45k
 1 tahun = 85k

note:
• ppj no fee
• akun dari admn no fee
• ada garansi


—⃝👩🏻‍💻 INDPLAN
1 bulan = 23k 
2 bulan = 33k (replace)
3 bulan = 38k (replace)

note:
• ppj no fee
• akun dari admn no fee
• ada garansi


—⃝👩🏻‍💻 FAMHEAD
1 bulan = 23k (durasi 18-19day)
2 bulan (no renew) = 28k

note:
• ada garansi
• famhead bisa invite 5 member
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['spotify']
handler.tags = ['gisha']
handler.command = /^(spotify)$/i

export default handler