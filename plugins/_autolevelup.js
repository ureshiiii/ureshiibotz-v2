import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

export async function before(m) {
    let user = global.db.data.users[m.sender]
    if (!chat.autolevelup)
        return !0
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `Informasi Level Dan Exp Kamu

> Level ${user.level}
> *${user.exp - min} / ${xp}*
> Butuh *${max - user.exp}* lagi! ✨
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Selamat!, ${this.getName(m.sender)} telah naik level!, sekarang *Rank* kamu adalah ${user.role}`
        let str = `
Selamat!, ${this.getName(m.sender)} kamu naik level!

Dari Level *${before}* ➔ *${user.level}*
Rank kamu naik menjadi *${user.role}*

> Level Lama: ${before}
> Level Baru: ${user.level}
> Di Waktu: ${new Date().toLocaleString('id-ID')}

Ayo tingkatkan terus level dengan bermain game di UreshiiBotz!
`.trim()
            let data = 'src/lvlup_template.jpg'
            try {
            let img = await levelup(teks, user.level)
            this.sendFile(m.chat, img, 'image.jpg', str, m)
            } catch (e) {
            this.sendFile(m.chat, data, 'image.jpg', str, m)
            }

    }
}
export const disabled = false;