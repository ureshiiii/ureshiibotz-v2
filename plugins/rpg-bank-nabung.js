const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^nabung/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
let nota = `
Nota menabung

> Status: [✅]
> Uang yang di tabung: ${count}
> Sisa Money: ${user.money}
> Total Tab: ${user.bank}

Perhatikan!, *Tab* Adalah tabungan
`;  
  if (user.atm == 0) return m.reply('Kamu belum mempuyai atm, untuk buat atm kamu bisa ketik *.craft atm*')
  if (user.bank > user.fullatm) return m.reply('Uang dibankmu sudah penuh!')
  if (count > user.fullatm - user.bank) return m.reply('Uangnya ga muat dibank')
  if (global.db.data.users[m.sender].money >= xpperlimit * count) {
    global.db.data.users[m.sender].money -= xpperlimit * count
    global.db.data.users[m.sender].bank += count
    conn.reply(m.chat, nota, m)
  } else conn.reply(m.chat, `Uang anda tidak mencukupi untuk menabung *${count}* Money, Money kamu *${user.money}*`, m)
}
handler.help = ['nabung'].map(v => v + ' <jumlah>')
handler.tags = ['rpg']
handler.command = /^nabung([0-9]+)|nabung|nabungall$/i

export default handler