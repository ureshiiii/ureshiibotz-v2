let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*📱 DISNEY+ HOTSTAR*

➺ premium sharing 1 bulan = 28k
➺ premium private 1 bulan = 85k (bawa no sendiri)

note:
• full garansi
• langsung OTP
• premium sharing 6 user
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['disney-hostar']
handler.tags = ['gisha']
handler.command = /^(disney-hostar)$/i

export default handler