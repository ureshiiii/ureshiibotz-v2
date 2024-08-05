let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
	text = text.split(`|`)
	if (!text || text.length == 1) throw `Format salah\nContoh: ${usedPrefix + command} Mau bobo?|Pilihan 1|Pilihan 2|DST...`
	if (text.length > 1 && text.length < 3) throw `Minimum Pilihan adalah 2`
	if (text.length > 13) throw `Kebanyakan, Maksimal *12* !`
	let array = []
	text.slice(1).forEach(function(i) { array.push(i) })
	await conn.sendPoll(m.chat, text[0], array)
}

handler.help = ['poll']
handler.tags = ['group']
handler.command = /^((create)?poll(ing)?)$/i

handler.group = true

export default handler