import fetch from 'node-fetch'

let handler = async (m, {conn, text, usedPrefix, command }) => {
     if (!text) throw `Masukan nama nabi\nContoh: ${usedPrefix + command} adam`
     let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") throw "Nama nabi tidak ketemu\nTips: coba jangan gunakan huruf capital"
     
     let hasil = `
☁️ Nabi *${kisah.name}*

*-* Tanggal Lahir: ${kisah.thn_kelahiran}
*-* Tempat Lahir: ${kisah.tmp}
*-* Usia: ${kisah.usia}

${kisah.description}
`

     conn.reply(m.chat, hasil, m)

     }
handler.help = ['kisahnabi <name>']
handler.tags = ['islamic']
handler.command = /^kisahnabi$/i
handler.register = false
handler.limit = true

export default handler