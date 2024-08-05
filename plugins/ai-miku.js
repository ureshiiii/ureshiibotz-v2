let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw(`Contoh:\n${usedPrefix}${command} Halo?`);   
  let ouh = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=miku`)
  let gyh = await ouh.json() 
  await conn.reply(m.chat, `${gyh.result}`, fakes)
  }
handler.command = /^(caimiku)$/i
handler.help = ['caimiku']
handler.tags = ['ai']
handler.premium = false

export default handler;