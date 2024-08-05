let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*📱 REMINI*

—⃝👩🏻‍💻 REMINI LITE WEB
1 bulan = 8k

note:
• tidak perlu menuhin memori
• via web, bisa andro dan ios

—⃝👩🏻‍💻 REMINI APK IOS
1 tahun pro = 35k

note:
• garansi 6 bulan
• login apk, akun dari admin

—⃝👩🏻‍💻 REMINI APK ANDRO
Harga = 35k

• Pro
• sharing 1 tahun
• akun admn, dikirim ke email mu
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['remini-premium']
handler.tags = ['gisha']
handler.command = /^(remini-premium)$/i

export default handler