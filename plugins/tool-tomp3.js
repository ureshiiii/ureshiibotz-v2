import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
 m.react(rwait)
    let chat = global.db.data.chats[m.chat]
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `Reply Video/Vn dengan caption .tomp3`
    let media = await q.download?.()
    if (!media) throw 'Yah Gagal'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw 'Yau Gagal'
    //conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4', asDocument: chat.useDocument })
}
handler.help = ['tomp3']
handler.tags = ['tools']
handler.limit = true
handler.command = /^to(mp3|a(udio)?)$/i

export default handler