let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
 halloooo gurukuuu yang sangat cantik hehehehhe100×
aku mau bilang makasi sama ibu,ibu uda sabar ngadepin sikap aku yang nakal ini,ibu selalu ngasih motivasi yang baik buat aku dan anak anak yang lainnya,ibu adalah guru yang terbaik buat aku,aku kadang suka buat ibu marah,aku minta maaf ya,dan aku makasih banget sama ibu karna ibu udah ngedidik aku jadi anak yang baik,ibu bisa ngerubah sifat aku yang buruk menjadi lebih baik,ibu mengajari aku banyak hal,kesan nya ibu sayang banget sama aku dan lainnya,aku beruntung bisa dapetin guru sebaik ibu,makasi ya buu🫶🏻🫶🏻🫶🏻🫶🏻
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-guru1']
handler.tags = ['long']
handler.command = /^(longtext-guru1)$/i

export default handler