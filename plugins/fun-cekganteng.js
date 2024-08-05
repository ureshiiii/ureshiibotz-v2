let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(gantenggg)}`, m)
}
handler.help = ['gantengcek']
handler.tags = ['fun']
handler.command = /^(gantengcek|cekganteng)$/i

handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

let gantenggg = [
'Ganteng Level : 4%\n\nINI MUKA ATAU SAMPAH?!',
'Ganteng Level : 7%\n\nSerius ya,, Lu ampir mirip kayak Monyet!',
'Ganteng Level : 12%\n\nMakin lama liat muka lo gw bisa muntah!',
'Ganteng Level : 22%\n\nMungkin karna lo sering liat berbuat maksiat😂',
'Ganteng Level : 27%\n\nKeknya bakal susah dapet jodoh lu,, berdoa aja',
'Ganteng Level : 35%\n\nYang sabar ya dek',
'Ganteng Level : 41%\n\nSemoga diberkati mendapat jodoh',
'Ganteng Level : 48%\n\nDijamin cewek susah deketin lo',
'Ganteng Level : 56%\n\nLu Setengah ganteng :v',
'Ganteng Level : 64%\n\nCukuplah',
'Ganteng Level : 71%\n\nLumayan ganteng juga lu ya',
'Ganteng Level : 2%\n\nAWOAKAK BURIQQQ!!!',
'Ganteng Level : 4%\n\nAWOAKAK BURIQQQ!!!',
'Ganteng Level : 1%\n\nAWOAKAK BURIQQQ SEKALI!!!',
'Ganteng Level : 6%\n\nAWOAKAK BURIQQQ!!!',
'Ganteng Level : 77%\n\nGak akan Salah Lagi dah bang',
'Ganteng Level : 83%\n\nDijamin cewek gak akan kecewa banh',
'Ganteng Level : 89%\n\ncwek2 pasti auto salfok klo ngeliat lo!',
'Ganteng Level : 94%\n\nAARRGGHHH!!!',
'Ganteng Level : 100%\n\nMasih ganteng owner gw bang',
]
