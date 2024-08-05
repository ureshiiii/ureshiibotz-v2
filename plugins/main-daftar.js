import { createHash } from 'crypto'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import fs from 'fs'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
 m.react(rwait)
    function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
    let namae = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, {
        weekday: 'long'
    })
    let date = d.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh}H ${wibm}M ${wibs}S`
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg')
    let user = global.db.data.users[m.sender]
    if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <sn>*`
    if (!Reg.test(text)) return m.reply(`Format salah\nKetik: ${usedPrefix + command} nama.umur\nContoh:\n${usedPrefix + command} Farhan.18`)
    let [_, name, splitter, age] = text.match(Reg)
    if (!name) return m.reply('Nama tidak boleh kosong (Huruf)')
    if (!age) return m.reply('Umur tidak boleh kosong (Angka)')
    age = parseInt(age)
    if (age > 70) return m.reply('Umur Gabole Lebih Dari 70')
    if (age < 15) return m.reply('Umur Gabole Kurang Dari 15')
    if (name.split('').length > 100) return m.reply('Nama Maksimal 100 Karakter Ajg')
    user.name = name.trim()
    user.age = age
    user.regTime = + new Date
    user.registered = true
    let sn = createHash('md5').update(m.sender).digest('hex')
    let cap = `
Hai sayangg *${name}*, kamu sudah berhasil daftar ke UreshiiBotz dengan status [ ✅ ] *UwU*

> Nama: ${name}
> Umur: ${age} Tahun
> Sn: ${sn}

Sekarang kamu bisa menggunakan fitur UreshiiBotz secara luas! 😋. Untuk kamu yang mau unreg, bisa ketik *.unreg* yaww. Terimakasih sudah mendaftar ya sayanggg *><*
`
    await conn.sendFile(m.chat, pp, name + '.jpeg', cap.trim(), m, false)
}
handler.help = ['daftar']
handler.tags = ['main']
handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler