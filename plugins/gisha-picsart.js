let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*📱 PICSART GOLD*

–sharing
1 bulan = 7k

–private
1 bulan = 10k

note:
• private max login only 3 device
• sharing strictly login only 1 device
• sharing account only dari admn
• private bisa account dari kamu asalkan fres
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['picsart-gold']
handler.tags = ['gisha']
handler.command = /^(picsart-gold)$/i

export default handler