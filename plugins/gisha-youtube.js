let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*📱 YOUTUBE PREMIUM*

➺ 1 bulan famplan via invite email = 6k
➺ 3 bulan indplan no garansi = 18k
➺ 3 bulan indplan garansi = 28k

note:
• yang 1 bulan via invite email pake email dari kamu, email nya harus fresh yang baru bikin
• yang 3 bulan akun dari admn only gabisa dari cust
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['youtube-premium']
handler.tags = ['gisha']
handler.command = /^(youtube-premium)$/i

export default handler