let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Hey, i just wanna tell you something. Semangat terus ya! Aku tau kamu capek, lelah dan ga terima juga keadaan yang ada di hidup kamu. Tapi kamu jangan nyerah ya? kamu ada di detik ini karna kamu kuat! Walau masalah silih berganti bahkan menumpuk. Jalani terus dengan hati yang sabar dan ikhlas ya? Janji sama diri kamu. Percaya deh, kamu boleh ada di keadaan tersulit Mu saat ini. Itu karna emang Tuhan izinkan. Karna kamu hebat kuat! Pasti ada hari baik kok diakhir masalah. Yang terakhir, inget kata kata ini ya "everything is gonna be okay" <3`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-semangat1']
handler.tags = ['long']
handler.command = /^(longtext-semangat1)$/i

export default handler