let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw(`Contoh:\n${usedPrefix}${command} Halo?`);   
  let ouh = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=nezuko`)
  let gyh = await ouh.json() 
  await conn.reply(m.chat, `${gyh.result}`, fakes)
  }
handler.command = /^(cainezuko)$/i
handler.help = ['cainezuko']
handler.tags = ['ai']
handler.premium = false

export default handler;