
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
┌─────────────────┈❖
│☁️ Donate Bot
└┬────────────────┈❖
┌┤ Donate biar bot aktif
│└────────────────┈❖
│– Dana: 083873688108
│– Ovo: 083873688108
│– Gopay: 083873688108
│– Pulsa (Axis): 083873688108
└─────────────────┈❖
`
let img = global.qris
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
