let handler = async (m, { conn, args, usedPrefix, command }) => {

    await conn.groupUpdateSubject(m.chat, `${args.join(" ")}`);
    m.reply('Nama Gc Telah Berhasil Di Ganti')
  }
  
  handler.help = ['setnamagc']
  handler.tags = ['group']
  handler.command = /^setnamagc$/i
  handler.group = true
  handler.admin = true
  handler.botAdmin = true
  
  export default handler
