import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.reply(m.chat, hehe, m)
	conn.sendFile(m.chat, `${baka.getRandom()}`, "salam.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^Assalamualaikum|Assalamu'alaikum|Asalamualaikum|assalamualaikum$/i;
handler.command = new RegExp;

export default handler;

let hehe = "Patut Dicontoh Nih kak!, Kalo Nyapa Pake Salam Sesuai Agama Masing Masing Ya!"
const baka = [
"./vn/salam.mp3",
]