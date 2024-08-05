let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*˚  ˖   ıllı FORMAT GIFT SKIN & SL 📝  ˚*

᥀ 🛍️⃘𐇽݂.   Id & Server :
᥀ 🛍️⃘𐇽݂.   Nickname :
᥀ 🛍️⃘𐇽.   Order :
᥀ 🛍️⃘𐇽.   Tgl Order : 

➜ wajib berteman 8 hari atau lebih
➜ di proses sesuai antrian
➜ unfollow = hangus
➜ membeli = setuju
➜ ganti nickname ga konfirm admn? hangus
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> Format Gisha Store', 'status@broadcast')
}
handler.help = ['format-gift-skin']
handler.tags = ['gisha2']
handler.command = /^(format-gift-skin)$/i

export default handler