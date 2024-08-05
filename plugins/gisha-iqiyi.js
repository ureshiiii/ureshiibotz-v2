let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*📱 IQIYI*

➺ sharing 1 bulan = 11k
➺ sharing 1 tahun = 18k
➺ private 1 bulan = 28k

note:
• bergaransi
• VIP standard
• akun dari admn
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['iqiyi']
handler.tags = ['gisha']
handler.command = /^(iqiyi)$/i

export default handler