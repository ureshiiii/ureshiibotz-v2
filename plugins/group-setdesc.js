let handler = async (m, { text }) => {
	if (!text) throw "Mana textnya?\nContoh: .setdesc JANGAN TOXIC YA KOMTOL";

	await conn.groupUpdateDescription(m.chat, text);
	return m.reply("Deksripsi Group Telah Berhasil Di Ganti");
};

handler.help = ["setdesc"];
handler.tags = ["group"];
handler.command = /^(setdesc|sdesc)$/i;

handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
