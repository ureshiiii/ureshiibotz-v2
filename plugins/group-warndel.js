
let handler = async (m, { conn, args, groupMetadata}) => {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `Tag pengguna atau reply chat pengguna`
        if (!(who in global.db.data.users)) throw `Pengguna tidak ada dalam database`
       let warn = global.db.data.users[who].warn
       if (warn > 0) {
         global.db.data.users[who].warn -= 1
         m.reply(`
☁️ *Delete Warn*

*-* Warn: -1
*-* Total warn: ${warn - 1}
`)
         m.reply(`Hallo, admin telah mengurangi jumlah warn anda!. Sekarang warn ada tersisa *${warn - 1} Warn*\n\n> Jika warn melebihi 3. Maka kamu akan di kick!`, who)
         } else if (warn == 0) {
            m.reply('Pengguna tidak memiliki warn')
        }

}
handler.help = ['delwarn @user']
handler.tags = ['group']
handler.command = ['delwarn', 'unwarn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
