import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.reply(m.chat, hehe, m)
};
handler.customPrefix = /^(tes|bot|\?)$/i
handler.command = new RegExp;

export default handler;

let hehe = "*Botnya lagi online sayanggg ><*"