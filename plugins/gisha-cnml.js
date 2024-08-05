let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
֪   ׄ  ꯭ 💭 ა 𝗰𝗵𝝰𝗻𝗴𝗲 𝗻𝝰𝗺𝗲 𝗺𝗹 50💎

5𝗱𝗺 + 5𝗱𝗺 + 44𝗱𝗺 = 18𝗸

• 𝗱𝗶 𝗶𝘀𝗶𝗸𝝰𝗻 𝘀𝗲𝗹𝝰𝗺𝝰 3 𝗵𝝰𝗿𝗶 𝗯𝗲𝗿𝘁𝘂𝗿𝘂𝘁-𝘁𝘂𝗿𝘂𝘁.
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['cn-ml']
handler.tags = ['gisha']
handler.command = /^(cn-ml)$/i

export default handler