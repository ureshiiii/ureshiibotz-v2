import translate from '@vitalets/google-translate-api'

let handler = async (m, { args, usedPrefix, command }) => {
	let lang, text
	if (args.length >= 2) {
		lang = args[0], text = args.slice(1).join(' ')
	} else if (m.quoted && m.quoted.text) {
		lang = args[0], text = m.quoted.text
	} else throw `Format Salah\nContoh: ${usedPrefix + command} id hello world`
	let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
	if (!res) throw `Kode bahasa negara "${lang}" Gada dalam kamus\nKetik *.kodebahasa* untuk melihat kode`
	m.reply(`🍞 Bahasa Terdeteksi: ${res.from.language.iso}\n📜 Translate Ke Bahasa: ${lang}\n\n${res.text}`.trim())
}
handler.help = ['translate']
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i

handler.register = true

export default handler
