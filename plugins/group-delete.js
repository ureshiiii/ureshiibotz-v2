let handler = function (m) {
 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 } m.react(rwait)
 conn.sendMessage(m.chat, { delete: key })
 m.react(done)
}
handler.help = ['delete']
handler.tags = ['group']
handler.command = /^(del|delete|hapus?)$/i
handler.limit = false
handler.admin = true

export default handler
