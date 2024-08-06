import fetch from 'node-fetch'
import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, args, participants }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let sortedMoney = users.map(toNumber('money')).sort(sort('money'))
  let usersExp = sortedExp.map(enumGetKey)
  let usersLevel = sortedLevel.map(enumGetKey)
  let usersMoney = sortedMoney.map(enumGetKey)
  let lele = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Leaderboard'
  let len = args[0] && args[0].length > 0 ? Math.min(50, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
  let text = `
*Top Exp*
> Top Global ${len} *Exp* 
> Kamu : *${usersExp.indexOf(m.sender) + 1}* dari *${usersExp.length}*

${sortedExp.slice(0, len).map(({ jid, exp }, i) => `*${i + 1}.* ${participants.some(p => areJidsSameUser(jid, p.id)) ? `${conn.getName(jid)}\nwa.me/` : '@'}${jid.split`@`[0]} — _*Exp ${exp}*_`).join`\n`}

*Top Level*
> Top Global ${len} *Level*
> Kamu : *${usersLevel.indexOf(m.sender) + 1}* dari *${usersLevel.length}*

${sortedLevel.slice(0, len).map(({ jid, level }, i) => `*${i + 1}.* ${participants.some(p => areJidsSameUser(jid, p.id)) ? `${conn.getName(jid)}\nwa.me/` : '@'}${jid.split`@`[0]} — _*Level ${level}*_`).join`\n`}

*Top Money*
> Top Global ${len} *Money*
> Kamu : *${usersMoney.indexOf(m.sender) + 1}* dari *${usersMoney.length}*

${sortedMoney.slice(0, len).map(({ jid, money }, i) => `*${i + 1}.* ${participants.some(p => areJidsSameUser(jid, p.id)) ? `${conn.getName(jid)}\nwa.me/` : '@'}${jid.split`@`[0]} — _*Money ${money}*_`).join`\n`}
`.trim()
  
conn.sendMessage(m.chat, {
text: text,
contextInfo: {
externalAdReply: {
title: "Leaderboard",
thumbnailUrl: lele,
mediaType: 1,
renderLargerThumbnail: true
}}}, { mentions: [...usersExp.slice(0, len), ...usersMoney.slice(0, len), ...usersLevel.slice(0, len)].filter(v => !participants.some(p => areJidsSameUser(v, p.id) )) }, { quoted: m })
}

handler.help = ['leaderboard']
handler.tags = ['rpg']
handler.command = ['leaderboard', 'lb'] 

export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
