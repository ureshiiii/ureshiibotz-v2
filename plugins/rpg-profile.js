import PhoneNumber from 'awesome-phonenumber'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'

let handler = async (m, { conn, args, fromMe, usedPrefix, command }) => {
let user = db.data.users[m.sender]
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, registered, regTime, premium, age, banned, pasangan } = global.db.data.users[who]
    let name = await conn.getName(who)
    let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
    if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
let caption = `
Profile Lengkap Kamu Di UreshiiBotz

> Nama: *(${name})* ${registered ? '(' + name + ') ' : ''} ( @${who.split("@")[0]} )
> Pacar: ${pasangan ? `@${pasangan.split("@")[0]}` : `Gada`}
> Tag: @${who.replace(/@.+/, '')}
> Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
> Link: https://wa.me/${who.split`@`[0]}
> Age: ${registered ? age : ''}
${readMore}
> Level: ${level}
> Rank: ${role}
> Status: ${who.split`@`[0] == global.nomorwa ? '️Developer️' : user.premiumTime >= 1 ? 'Premium' : user.level >= 1000 ? 'Elite User' : 'Free User'}
> Terdaftar: ${registered ? 'Ya (' + new Date(regTime).toLocaleString() + ')' : 'Tidak'} 

Ketik .balance untuk melihat Economy RPG kamu`
await conn.sendFile(m.chat, pp, 'image.jpg', caption, fakes, { mentions: conn.parseMention(caption) })
}

handler.help = ['profile'].map(v => v + ' <url>')
handler.tags = ['rpg', 'main']

handler.command = /^(pro(fil)?(file)?|pp)$/i

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' D ', h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
