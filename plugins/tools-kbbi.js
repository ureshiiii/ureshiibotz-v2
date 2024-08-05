import { kbbi } from '@bochilteam/scraper'

let handler = async (m, { text, usedPrefix, command }) => {
 m.react(rwait)
    if (!text) throw `Format salah!\nContoh; ${usedPrefix}${command} halo`
    const res = await kbbi(text)
    m.reply(`
${res.map(v => `
*${v.title}*

${v.means.map(v => '- ' + v).join('\n`')}
`).join('\n').trim()}

☁️ Note:
p = Partikel: kelas kata yang meliputi kata depan, kata sambung, kata seru, kata sandang, ucapan salam
n = Nomina: kata benda
`.trim())
}
handler.help = ['kbbi <teks>']
handler.tags = ['tools']
handler.command = /^kbbi$/i

export default handler