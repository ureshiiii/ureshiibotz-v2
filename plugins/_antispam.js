export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    if (chat.antiSpam) {
    if (nomorown.includes(m.sender)) throw '🚩 Owner Mah Free!'
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 5) {
               user.banned = true
               this.updateBlockStatus(m.chat, "block")
    let caption = `Kamu di Banned *@${m.sender.split("@")[0]}* Karena terdeteksi spam. Jangan spam!`
    this.reply(caption, m, { mentions: this.parseMention(caption) })
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
     }
}