let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*📱VIDEO PREMIER*

—⃝👩🏻‍💻 Video Platinum
1 bulan 2u  = 10k
1 bulan private  = 15k
(andro+tv only+apk tambahan)

1 bulan all device sharing 2u = 20k
1 bulan all device private = 29k
(bisa andro, ios, tv, laptop, dll)

note:
• yang menggunakan apk tambahan no complain jika sudah diberi tutor ikutin, tidak ada complain jika tidak bisa!


—⃝👩🏻‍💻 Video Diamond
1 bulan mobile only = 70k
(hanya bisa di hp/tab)
1 bulan all device = 80k

note:
• Full Garansi
• Durasi 28-30 hari
• Buat yang gmau ribet order yang all device
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['video-premier']
handler.tags = ['gisha']
handler.command = /^(video-premier)$/i

export default handler