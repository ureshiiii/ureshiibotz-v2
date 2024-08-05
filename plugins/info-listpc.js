let handler = async(m, { conn }) => {
let pc = Object.entries(await conn.chats)
let niorg = pc.filter(([jid]) => jid.endsWith('@s.whatsapp.net'))
let txt = ''
    for (let [jid] of niorg)
txt += `${await conn.getName(jid)}\n${'wa.me/' + jid.replace(/@.+/, '')}\n\n`
return m.reply(`☁️ *Total Chat* :` + niorg.length + '\n\n' + txt.trim())
}
handler.help = ['listpc']
handler.tags = ['info']
handler.command = /^listpc$/i
export default handler
