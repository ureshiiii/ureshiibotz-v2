import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.reply(m.chat, hehe, m)
	conn.sendFile(m.chat, `${baka.getRandom()}`, "goblok.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^p$/i;
handler.command = new RegExp;

export default handler;

let hehe = "Gapunya agama yah?, Minimal salam sesuai agama lu dek!"
const baka = [
"./vn/goblok.mp3",
]
