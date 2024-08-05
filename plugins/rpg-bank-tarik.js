const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
  let user = global.db.data.users[m.sender]
  let count = command.replace(/^tarik/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bank / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
let nota = `
Nota penarikan Tab

> Status: [✅]
> Uang yang di tarik: ${count}
> Sisa Tab: ${user.bank}
> Total Money: ${user.money}

Perhatikan!, *Tab* Adalah tabungan
`;
  if (user.atm == 0) return m.reply('kamu belum mempuyai atm !')
  if (global.db.data.users[m.sender].bank >= xpperlimit * count) {
    global.db.data.users[m.sender].bank -= xpperlimit * count
    global.db.data.users[m.sender].money += count
    conn.reply(m.chat, nota, m)
  } else conn.reply(m.chat, `Uang dibank anda tidak mencukupi untuk ditarik sebesar *${count}* Money, jumlah Tab kamu *${user.bank}*`, m)
}
handler.help = ['tarik'].map(v => v + ' <jumlah>')
handler.tags = ['rpg']
handler.command = /^tarik([0-9]+)|tarik|tarikall$/i

export default handler