let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*⤹ 🛍️  . . tоke𝗇۪ Ɩꪱѕtrꪱk*

꯴ ׂܸ 💭‌۫𝄪 20.000 : 22.500
꯴ ׂܸ 💭‌۫𝄪 50.000 : 52.500
꯴ ׂܸ 💭‌۫𝄪 100.000 : 102.500
꯴ ׂܸ 💭‌۫𝄪 200.000 : 202.500

*🦋𝗇۪оte :*
*⸼ ─ t⍺𝗇۪ɥ⍺k⍺𝗇۪ ѕtоk ѕeხeƖυო оrძer*
*⸼ ─ оrძer -tẜ+(ẜee ⍺ძო𝗇۪) - 𝗉ׄrоѕeѕ - ѕeƖeѕ⍺ꪱ*
*⸼ ─ tẜ g⍺ 𝗉ׄ⍺ke ẜee? g⍺ ძꪱ 𝗉ׄrоѕeѕ*
*⸼ ─ ⍺ƖƖ trx 𝗇۪о reẜẜ*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['token-listrik']
handler.tags = ['gisha']
handler.command = /^(token-listrik)$/i

export default handler