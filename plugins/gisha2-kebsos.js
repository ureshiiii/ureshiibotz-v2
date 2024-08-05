let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
˚  ˖   ı𝗹𝗹ı 𝗳𝝾𝗿𝗺𝝰𝘁 𝗸𝗲𝗯𝘀𝝾𝘀📝  ˚

 ࣪🩰⭑𝘂𝘀𝗲𝗿𝗻𝝰𝗺𝗲 ⦂ 
 ࣪🩰⭑𝝾𝗿𝗱𝗲𝗿 ⦂ 
 ࣪🩰⭑𝗹𝗶𝗻𝗸 𝗽𝗿𝝾𝗳𝗶𝗹 ⦂

𝗻𝝾𝘁𝗲⦂
» 𝗽𝗿𝝾𝘀𝗲𝘀 1×24 𝗷𝝰𝗺, 𝗺𝝰𝘅 3-7 𝗵𝝰𝗿𝗶
» 𝗸𝗲𝘀𝝰𝗹𝝰𝗵𝝰𝗻 𝘂𝘀𝗻 𝗯𝘂𝗸𝝰𝗻 𝘁𝝰𝗻𝗴𝗴𝘂𝗻𝗴 𝗷𝝰𝟂𝝰𝗯 𝝰𝗱𝗺𝗻
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> Format Gisha Store', 'status@broadcast')
}
handler.help = ['format-kebsos']
handler.tags = ['gisha2']
handler.command = /^(format-kebsos)$/i

export default handler