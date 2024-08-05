import jimp from "jimp"
import uploadImage from "../lib/uploadImage.js"
import uploadFile from "../lib/uploadFile.js"

let handler = async (m, { conn, usedPrefix, args}) => {
 m.react(rwait)
	let towidth = args[0]
	let toheight = args[1]
	if (!towidth) throw 'Mau berapa pixel widthnya?\nContoh: .resize 200 900'
	if (!toheight) throw 'Mau berapa pixel heightnya?\nContoh: .resize 200 900'
	
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw "Mana medianya, reply media dengan caption .resize"

let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
if (!isMedia) throw `Format ${mime} tidak didukung`
let link = await (isMedia ? uploadImage : uploadImage)(media)

let source = await jimp.read(await link)
let size = {
            before:{
                   height: await source.getHeight(),
                   width: await source.getWidth()
             },
            after:{ 
            	   height: toheight,
                   width: towidth,
                   },
            }
let compres = await (link, towidth - 0, toheight - 0)
let linkcompres = await (isMedia ? uploadImage : uploadImage)(compres)

conn.sendFile(m.chat, compres, null, `
📮 *Before*
Width: ${size.before.width}
Height: ${size.before.height}

📮 *After*
Width: ${size.after.width}
Height: ${size.after.height}

📮 *Link*
Original: ${link}
Kompres: ${linkcompres}
`, m)
}
handler.help = ['resize <width> <height>']
handler.tags = ['tools']
handler.command = /^(resize)$/i

export default handler