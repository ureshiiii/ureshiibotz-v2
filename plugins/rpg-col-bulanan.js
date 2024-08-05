const limit = 25
const exp = 45000
const money = 45000

let handler = async (m, { isPrems }) => {
    let time = global.db.data.users[m.sender].lastmonthly += 2592000000
    if (new Date - global.db.data.users[m.sender].lastmonthly < 2592000000) throw `Kamu Sudah Mengambilnya Dibulan Ini, Tunggu Selama ${msToTime(time - new Date())} Lagi`
        global.db.data.users[m.sender].exp += exp
        global.db.data.users[m.sender].money += money
        global.db.data.users[m.sender].limit += limit
        conn.reply(m.chat, `Selamat, Kamu Mendapatkan\n\n> Limit : +25\n> Exp : +45,000\n> Money : +45,000`, m)
        global.db.data.users[m.sender].lastmonthly = new Date * 1
    }
    
handler.help = ['bulanan']
handler.tags = ['rpg']
handler.command = /^(bulanan)$/i
handler.group = true
export default handler

function msToTime(duration) {
  var minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    monthly = Math.floor((duration / (1000 * 60 * 60 * 24)) % 720)

  monthly  = (monthly < 10) ? "0" + monthly : monthly
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes

  return monthly + " D " +  hours + " H " + minutes + " M "
}