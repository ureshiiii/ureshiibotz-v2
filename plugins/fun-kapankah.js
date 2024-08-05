let handler = async (m, { conn, command, text }) => conn.reply(m.chat, `
☁️ ${command} ${text}
❗️ Jawaban : ${(10).getRandom()} ${['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekade', 'abad'].getRandom()} lagi ...
  `.trim(), m, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['kapankah <text>']
handler.tags = ['fun']
handler.command = /^kapan(kah)?$/i

export default handler