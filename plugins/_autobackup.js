import moment from 'moment-timezone'
import fs from 'fs'
export async function all(m) {
    let setting = global.db.data.settings[this.user.jid]
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 7200000) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            let fdoc = {key: {remoteJid: 'status@broadcast',participant: '0@s.whatsapp.net'},message: {documentMessage: {title: 'Database Nih'}}}
            let data = fs.readFileSync('./database.json')
            this.reply(global.nomorown + '@s.whatsapp.net', `Hallow sayang, ini adalah database bot kamu!!\n\n${date}`, null)
            this.sendMessage(global.nomorown + '@s.whatsapp.net', {document: data, mimetype: 'application/json', fileName: 'database.json'}, {quoted: fdoc})
            setting.backupDB = new Date() * 1
        }
    }
    return !0
}