let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     pagii my mr
terimakasi sudah menjadi guru yang luar biasa, terimakasi atas ilmu dan keterampilan yang telah mr berikan setiap hari,terimakasi telah membantu mempersiapkan pemimpin muda seperti saya untuk dunia masa depan,maaf jika tindakan anak anak seperti tidak menghargai mr ketika sedang belajar,saya harap mr bisa memaafkan,untuk mr jasa mr akan selalu saya kenang, terimakasi atas apa yang telah mr berikan,baik itu ilmu pembelajaran dan harapan semangat, sekali lagi terimakasii mr❤️❤️.
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-guru']
handler.tags = ['long']
handler.command = /^(longtext-guru)$/i

export default handler