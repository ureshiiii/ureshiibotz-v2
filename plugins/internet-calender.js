import fetch from 'node-fetch';
let handler = async (m, { conn, args }) => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  
  let clockString = `☁ *Kalender*\n\n*-* Tanggal️ ${day}\n*-* Bulan ${month}\n*-* Tahun ${year}\n\n*-* Jam ${hour}\n*-* Menit ${minute}\n*-* Detik ${second}`;
  
  // Mengirimkan hasil ke grup atau pengguna
  conn.reply(m.chat, clockString, m);
}

handler.help = ['kalender'];
handler.tags = ['internet'];
handler.command = /^(kalender)$/i;

export default handler