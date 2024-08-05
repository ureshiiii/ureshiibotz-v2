let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*📱 CAPCUT PRO*

→ 1 bulan = 8k
→ 1 tahun = 17k

note:
• share max login 1 device
• akun dari admn
• login via akun capcut
• 1 tahun garansi 6 bulan
• all device
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['capcut-pro']
handler.tags = ['gisha']
handler.command = /^(capcut-pro)$/i

export default handler