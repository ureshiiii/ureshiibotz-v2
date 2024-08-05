let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*📱 DRAKOR ID*

–sharing account
1 tahun = 15k

note:
• share max login 1 dev
• akun dari admn
• 1 tahun garansi 6 bulan
• apk drakor id logo merah
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['drakor-id']
handler.tags = ['gisha']
handler.command = /^(drakor-id)$/i

export default handler