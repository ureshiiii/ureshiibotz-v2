let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*📱 VIU PRIVATE BIASA & ANLIM*

—⃝👩🏻‍💻 BIASA / SHARING
1 bulan = 5k
3 bulan = 7k
1 tahun = 9k

—⃝👩🏻‍💻 ANTI LIMIT/ PRIVATE
1 bulan 9k

note:
• max login only 1 device
• akun dari admn
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['viu']
handler.tags = ['gisha']
handler.command = /^(viu)$/i

export default handler