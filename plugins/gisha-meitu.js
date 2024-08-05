let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*📱 MEITU*

1 tahun sharing = 23k

note:
• akun dari admn
• 1 tahun garansi 6 bulan
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['meitu']
handler.tags = ['gisha']
handler.command = /^(meitu)$/i

export default handler