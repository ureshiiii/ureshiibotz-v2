import { createHash } from 'crypto'
let handler = async function (m, { args, usedPrefix, command }) {
await m.reply(tunggu)
  if (!args[0]) throw `Serial number kosong\nContoh: .unreg Oj3n9h9v4b9nkos0\n\n📮 Cek sn dengan ketik .sn`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw `Serial Number salah, cek sn dengan ketik .sn`
  user.registered = false
  user.unreg = true
  m.reply('✅ Kamu Berhasil keluar dari database')
}
handler.help = ['unreg']
handler.tags = ['main']
handler.command = /^unreg(ister)?$/i
handler.register = true

export default handler