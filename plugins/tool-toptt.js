import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
 m.react(rwait)
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `Reply Video/Audio dengan caption .tovn`
    let media = await q.download?.()
    if (!media) throw 'Yah Gagal'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw 'Yah Gagal'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn']
handler.tags = ['tools']

handler.command = /^to(vn|(ptt)?)$/i

export default handler
