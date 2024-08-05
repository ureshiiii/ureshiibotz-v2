let handler = async (m, { conn }) => {
	let who = m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : ''
	if (!who || who.includes(conn.user.jid)) throw `Tag Yang Mau Di Hapus Admin`
	try {
	    m.react(rwait)
		await conn.groupParticipantsUpdate(m.chat, [who], 'demote')
        m.reply(`${who} Telah Di Hapus Admin`)
	} catch (e) {
		console.log(e)
	}
}

handler.help = ['demote']
handler.tags = ['group']
handler.command = /^(demote)$/i

handler.admin = true
handler.botAdmin = true
handler.group = true

export default handler