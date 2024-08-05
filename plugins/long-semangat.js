let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `▸ Cr : @notsntyya
haii, kamu pasti cape ya? tapii ayooo bertahan sedikit lagi, semangatt , kalo kamu ngerasa cape banget istirahat yaa tapi abis itu bangkit lagii, apa pun yang kamu hadapin sekarang kamu harus tetap bertahan walaupun kamu cape banget. kalo kamu ga punya siapa siapaa, ada aku disinii, kamu tau ga? bumi itu banyak orang hebat dann kamu adalah salah satu dari orang orang hebat itu ! semangat ya? cintai diri kamu sendiri, orang lain emang bisa menyayangi dan mencintai kamu tapii yang tau diri kamu, yang tau isi hati kamu, itu diri kamu sendirii jadii cintai diri kamuu yaa, semangattt !
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-semangat']
handler.tags = ['long']
handler.command = /^(longtext-semangat)$/i

export default handler