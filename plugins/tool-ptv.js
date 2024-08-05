import { generateWAMessageContent } from "@adiwajshing/baileys"

let handler = async (m, { conn, usedPrefix, command }) => {
 m.react(rwait)
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/webp|video|gif|viewOnce/g.test(mime)) return m.reply(`Kirim video dengan caption ${usedPrefix + command}`)
    let media = await await q.download?.()
    await m.reply(wait)

    try {
        let msg = await generateWAMessageContent({
            video: media
        }, {
            upload: conn.waUploadToServer
        })
        await conn.relayMessage(m.chat, {
            ptvMessage: msg.videoMessage
        }, {
            quoted: m
        })
    } catch (e) {
        try {
            let dataVideo = {
                ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
            }
            await conn.relayMessage(m.chat, dataVideo, {})
        } catch (e) {
            await m.reply(eror)
        }
    }
}

handler.help = ['tovidiovn']
handler.tags = ['tools']
handler.command = /^(tovidiovn)/i

export default handler
