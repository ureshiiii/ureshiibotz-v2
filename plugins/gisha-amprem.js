let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
֪*📱 ALIGHT MOTION PREMIUM*

1 tahun private = 10k

note:
• pakai email dari kamu (yang fresh/baru dibuat)
• max login only 1 device
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['am-prem']
handler.tags = ['gisha']
handler.command = /^(am-prem)$/i

export default handler