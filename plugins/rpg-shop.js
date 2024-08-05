let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let user = global.db.data.users[m.sender]

  try {
    if (/shop|Shop/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch ((args[0] || '').toLowerCase()) {
          case 'premium':
            if (user.premium = true) return m.reply('Kamu sudah premium!')
            if(user.money < 300000) return m.reply(`Money tidak cukup!`)
            global.db.data.users[m.sender].money -= 300000
            global.db.data.users[m.sender].premium = true
            global.db.data.users[m.sender].premiumTime += 604800000
            m.reply("Sukses membeli Premium Bot")
          break
          case 'premiumtime':
            if (user.premiumTime > 2592000000) return m.reply('Kamu sudah tidak bisa perpanjang prem, karena sudah 30 Hari!')
            if(user.money < 100000) return m.reply(`Money tidak cukup!`)
            global.db.data.users[m.sender].money -= 100000
            global.db.data.users[m.sender].premiumTime += 86400000
            m.reply("Sukses memperpanjang Premium Bot selama *1 Hari*")
          break
          case 'atm':
            if (user.atm > 0) return m.reply('Kamu sudah memilik atm')
            if(user.money < 80000) return m.reply(`Money tidak cukup!`)
            global.db.data.users[m.sender].money -= 80000
            global.db.data.users[m.sender].atm += 1
            global.db.data.users[m.sender].fullatm = 1000000000
            m.reply("Sukses membeli kartu atm")
          break          
          default:
            let caption = `
Selamat datang di Toko *Parhan*, Kamu bisa beli items disini!
Cara beli barang :

> Format: *.shop namabarang*
> Contoh: *.shop premium*

List & Harga Item Toko Parhan

*Item Special* —
> Premium - 300.000
> PremiumTime - 100.000
> Atm - 80.000

— Mata Uang = *Money*
`
            m.reply(caption)
            break
        }
    } else {
 
      m.reply(caption)
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['shop']
handler.tags = ['rpg']
handler.command = /^(shop|toko)/i

export default handler