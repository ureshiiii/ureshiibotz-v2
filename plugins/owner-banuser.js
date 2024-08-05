let handler = async (m, { conn, text }) => {
    if (!text) throw 'Yang mau di ban siapa'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag pengguna'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, 'Done!', m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^ban(user)?$/i
handler.rowner = true

export default handler
