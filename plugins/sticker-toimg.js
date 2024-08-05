let handler = async (m, { conn, command, usedPrefix }) => {
	let q = m.quoted
	try {
		if (q && /sticker/.test(q.mtype)) {
			if (q.isAnimated) return m.reply(`Reply Sticker foto dengan caption ${usedPrefix + command}`)
			let img = await m.quoted.download()
             await conn.sendMessage(m.chat,{ image: img,caption: `✅ Ini Kak`},{quoted: m })
		} else return m.reply(`Reply Sticker foto dengan caption ${usedPrefix + command}`)
	} catch (e) {
		console.log(e)
	}
}

handler.help = ['toimg']
handler.tags = ['sticker']
handler.command = /^(toim(g|age))$/i
handler.register = true;

export default handler
