import genshin from 'genshin'

let handler = async (m, { text }) => {
m.react(rwait)
let list = ['amber','ayaka','baizhu','barbara','beidou','bennett','childe','chongyun','cyno','dainsleif','diluc','diona','fischl','ganyu','jean','kaeya','keqing','klee','lisa','mona','ningguang','noelle','qiqi','razor','sucrose','venti','xiangling','xiao','xingqiu','xinyan','zhongli']

if (!list.includes(text.toLowerCase())) return m.reply('☁️ List Char Genshin\nContoh: .genshin diluc\n\n' + list.map(v => v).join('\n'))

let chara = await genshin.characters(text.toLowerCase())
let { name, quote, cv, description, image, city, element, weapon, rating } = chara

let capt = `
☁️ *Genshin Infomation*

*-* Nama: ${name}
*-* CV: ${cv}
*-* City: ${city}
*-* Element: ${element}
*-* Weapon: ${weapon}
*-* Rating: ${rating}
*-* Quote: ${quote}

${description}
`.trim()

await conn.sendFile(m.chat, image, 'gi.jpg', capt, m)

}
handler.help = ['genshin']
handler.command = /^charagi|genshin$/i
handler.tags = ['FOTO ANIME']
export default handler 