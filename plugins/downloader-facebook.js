import fetch from 'node-fetch'
import fg from 'api-dylux'


const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `Masukan url\nContoh: .fb https://www.facebook.com/Ankursajiyaan/videos/981948876160874/?mibextid=rS40aB7S9Ucbxw6v`;
  }



  m.react(rwait)

  try {
    const result = await fg.fbdl(args[0]);
    const tex = `☁️ ${result.title || ''}`

    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    
    conn.sendFile(m.chat, videoBuffer, 'fb.mp4', tex, m)
  } catch (error) {
    console.log(error)
    m.reply('Yah Gagal')
  }
}

handler.help = ['facebook <url>']
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i

handler.register = true
handler.limit = true

export default handler
