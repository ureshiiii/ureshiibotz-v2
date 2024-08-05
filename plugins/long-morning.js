let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
haloo, good morningg. di pagii yang cerah ini, aku mau bilang lagi, kalau aku sayang kamu, dan aku bakal semangat untuk menjalani hari ini. Sebelum semua nyaa, aku harap kamu ga lupa buat sarapan, makan siang, dan juga makan malam karna itu semuanya pentingg buat kesehatan kamu. Kalau kamu ada masalah di hari ini, jangan pernah ragu untuk cerita ke aku ya? Aku bakal selalu ada buat kamu, dengerin cerita kamu, kalau badan kamu cape, jangan pernah dipaksain badan kamu lebih dari itu yaa, istirahat dulu, masih banyak waktu buat kamu jalanin di hari besok. I love you so much. Siapa sih yang ngga beruntung ketemu orang kaya kamu? Ga mungkin ada sih yang ga beruntung ketemu orang sekeren kamu dan sebaik kamu, ketemu kamu aja beruntung.
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-morning']
handler.tags = ['long']
handler.command = /^(longtext-morning)$/i

export default handler