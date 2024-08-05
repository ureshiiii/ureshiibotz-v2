import FormData from "form-data";
import Jimp from "jimp";

async function processing(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "dehaze"];
		Methods.includes(method) ? (method = method) : (method = Methods[0]);
		let buffer,
			Form = new FormData(),
			scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
		Form.append("model_version", 1, {
			"Content-Transfer-Encoding": "binary",
			contentType: "multipart/form-data; charset=uttf-8",
		});
		Form.append("image", Buffer.from(urlPath), {
			filename: "enhance_image_body.jpg",
			contentType: "image/jpeg",
		});
		Form.submit(
			{
				url: scheme,
				host: "inferenceengine" + ".vyro" + ".ai",
				path: "/" + method,
				protocol: "https:",
				headers: {
					"User-Agent": "okhttp/4.9.3",
					Connection: "Keep-Alive",
					"Accept-Encoding": "gzip",
				},
			},
			function (err, res) {
				if (err) reject();
				let data = [];
				res
					.on("data", function (chunk, resp) {
						data.push(chunk);
					})
					.on("end", () => {
						resolve(Buffer.concat(data));
					});
				res.on("error", (e) => {
					reject();
				});
			}
		);
	});
}
let handler = async (m, { conn, usedPrefix, command }) => {
	switch (command) {
		case "remini":
			{
				conn.enhancer = conn.enhancer ? conn.enhancer : {};
				if (m.sender in conn.enhancer)
					throw "Masih ada proses yang belum selesai kak";
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `Kirim/Reply foto dengan caption .remini`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `Format ${mime} tidak support`;
				else conn.enhancer[m.sender] = true;
				let loadd = [
 '10%.',
 '20%..',
 '40%...',
 '60%...',
 '70%..',
 '100%.',
 'Loading selesai. tunggu...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: 'Loading'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })};
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "enhance");
					conn.sendFile(m.chat, This, "", "*Type :* Remini🖼️\n*Result :* Success✅", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("Yah Gagal");
					}
					delete conn.enhancer[m.sender];
				}
			}
			break;
		case "color":
			{
				conn.recolor = conn.recolor ? conn.recolor : {};
				if (m.sender in conn.recolor)
					throw "Masih ada proses yang belum selesai kak";
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `Kirim/Reply foto dengan caption .color`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `Format ${mime} tidak support`;
				else conn.recolor[m.sender] = true;
let loadd = [
 '10%.',
 '20%..',
 '40%...',
 '60%...',
 '70%..',
 '100%.',
 'Loading selesai. tunggu...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })};
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "enhance");
					conn.sendFile(m.chat, This, "", "*Type :* Color🎨\n*Result :* Success✅", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("Yah Gagal");
					}
					delete conn.recolor[m.chat];
				}
			}
			break;
		case "hdr":
			{
				conn.hdr = conn.hdr ? conn.hdr : {};
				if (m.sender in conn.hdr)
					throw "Masih ada proses yang belum selesai kak";
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `Kirim/Reply foto dengan caption .hdr`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `Format ${mime} tidak support`;
				else conn.hdr[m.sender] = true;
let loadd = [
 '10%.',
 '20%..',
 '40%...',
 '60%...',
 '70%..',
 '100%.',
 'Loading selesai. tunggu...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })};
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "enhance");
					conn.sendFile(m.chat, This, "", "*Type :* HD Photo📸\n*Result :* Success✅", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("Yah Gagal");
					}
					delete conn.hdr[m.sender];
				}
			}
			break;
	}
};
handler.help = ["remini","color","hdr"];
handler.tags = ["tools"];
handler.premium = false
handler.limit = 5
handler.command = ["remini","color","hdr"];
export default handler;