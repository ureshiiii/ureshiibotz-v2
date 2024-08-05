let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `halloo? how was ur day? aku mau nanya deh sama kamu.. tapi maaf ya kalau aku lancang, kamu gamau hubungan kita lebih serius? aku tau kita hts an, tpi kamu ngerasain ga sih yang aku rasain? iya, cape digantung sama yang ga pasti, emang iya kalau sayang ga harus pacaran, kawin aja ayo wkwk, tapi kenapa harus hts? kita bukan siapa siapa, but do you want to be mine or am i yours? kalau kita pacaran gabakal canggung kok kita kan udah kenal dari lama kecuali kita baru kenal langsung pacaran. hope you understand my feeling, jangan pernah buat bosen sama aku ya? aku siap jadii rumahh kedua buat kamu.`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-confess']
handler.tags = ['long']
handler.command = /^(longtext-confess)$/i

export default handler