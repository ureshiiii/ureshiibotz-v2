let handler = async (m, { conn }) => {
  let res = await conn.groupRevokeInvite(m.chat)
  let gruf = m.chat
  conn.reply(m.sender, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gruf), m)
}
handler.help = ['resetlink']
handler.tags = ['group']
handler.command = /^(resetlink)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
