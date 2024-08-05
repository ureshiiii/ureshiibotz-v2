let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw(`Contoh:\n${usedPrefix}${command} Halo?`);   
  let ouh = await fetch(`https://kiicodeofficial.my.id/api/others/cai?query=${text}&apikey=mswreJVZxE`)
  let gyh = await ouh.json() 
  await conn.reply(m.chat, `${gyh.result}`, fakes)
}
handler.command = /^(cai)$/i
handler.help = ['cai']
handler.tags = ['ai']
handler.premium = false

export default handler;