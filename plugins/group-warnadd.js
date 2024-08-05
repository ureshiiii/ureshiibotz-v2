
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `Tag seseorang\nContoh : *${usedPrefix + command}* @user`
        if (!(who in global.db.data.users)) throw `Pengguna tidak ada dalam database`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
☁️ *Warning*

*-* Admin: ${name}
*-* Pengguna: @${who.split`@`[0]}
*-* Peringatkan: ${warn + 1}/${war}
*-* Alasan: Baca deks ajg!
`, null, { mentions: [who] }) 
            m.reply(`Hallo, anda telah menerima warn dari admin, total warn anda sekarang adalah ${warn + 1}/${war}\n\n> Jika anda menerima lebih dari 3 warn. Anda akan di kick secara otomatis dari Group`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`Pengguna melebihi peringatan *${war}* karena itu akan *KICK*`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`Anda tersingkir dari grup *${groupMetadata.subject}* karena Anda telah diperingatkan *${war}* kali`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['warn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
