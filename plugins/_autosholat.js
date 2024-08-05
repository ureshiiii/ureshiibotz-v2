export async function before(m) {
    this.autosholat = this.autosholat ? this.autosholat : {}
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
    let id = m.chat
    if (id in this.autosholat) {
        return false
    }
      let jadwalSholat = {
      Fajr: "04:30",
      Sunrise: "05:57",
      Dhuhr: "11:49",
      Asr: "15:03",
      Sunset: "17:54",
      Maghrib: "17:50",
      Isha: "19:00",
      Imsak: "04:30",
      Midnight: "23:55",
      Firstthird: "21:54",
      Lastthird: "01:55"
    }
    const date = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
    let caption = `Hallow sayangggg @${who.split`@`[0]},?, agama kamu islam kan?!. kalau ya, tolong sholat dahulu ya! Sekarang sudah waktunya sholat *${sholat}* lhooo. kamu buruan ambil air wudhu terus sholatttt ya sayangg!!`
            this.autosholat[id] = [
                this.reply(m.chat, caption, null, {
    contextInfo: {
      mentionedJid: [who]
    }
  }),
                setTimeout(() => {
                    delete this.autosholat[id]
                }, 57000)
            ]
        }
    }
}
export const disabled = false
