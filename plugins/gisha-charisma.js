let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
⤹ 🛍️  . . GIFT CHARISMA ML

 ֶָ 💎 ࣪  8 (Layla Coklat) = Rp 1.500
 ֶָ 💎 ࣪  20 (Nana paw, dll) = Rp 3.500
 ֶָ 💎 ࣪  499 (Angel Ark) = Rp 60.000
 ֶָ 💎 ࣪  499 (Paradise Island) = Rp 60.000
 ֶָ 💎 ࣪  999 (Gold Moon Lentera) = Rp 135.000

note :
➜ di gift langsung tanpa berteman
➜ membeli = setuju
➜ send id ke admin
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['gift-charisma']
handler.tags = ['gisha']
handler.command = /^(gift-charisma)$/i

export default handler