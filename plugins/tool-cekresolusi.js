import jimp from "jimp"
import uploadImage from "../lib/uploadImage.js"
import uploadFile from "../lib/uploadFile.js"

let handler = async (m, { conn, usedPrefix }) => {
 m.react(rwait)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw "Reply Gambar dengan caption .cekreso"

let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isMedia ? uploadImage : uploadImage)(media)

let source = await jimp.read(await link)
let height = await source.getHeight()
let width = await source.getWidth()

m.reply(`
🦢 Resolusi
Lebar: ${width}
Tinggi: ${height}

${link}
`)
}
handler.help = ['cekreso <foto>']
handler.tags = ['tools']
handler.command = /^(cekreso(lution)?)$/i

export default handler