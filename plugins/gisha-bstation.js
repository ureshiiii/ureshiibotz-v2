let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*📱 BSTATION*

—⃝👩🏻‍💻 sharing 1 bulan = 8k
—⃝👩🏻‍💻 sharing 1 tahun = 10k

note:
• share max login 1 device
• garansi 25-30 hari (share)
• login by email dan password
• akun dari admn
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['bstasion']
handler.tags = ['gisha']
handler.command = /^(bstation)$/i

export default handler