let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*˚  ˖   ıllı FORMAT GIFT CHARISMA ML📝  ˚*
᥀ 🛍️⃘𐇽݂.   Id :
᥀ 🛍️⃘𐇽݂.   Nickname :
᥀ 🛍️⃘𐇽.   Order :

➜ di gift langsung tanpa berteman
➜ membeli = setuju
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> Format Gisha Store', 'status@broadcast')
}
handler.help = ['format-gift-charisma']
handler.tags = ['gisha2']
handler.command = /^(format-gift-charisma)$/i

export default handler