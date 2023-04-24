module.exports.config = {
	name: "unsend",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "MEERAB KHAN",
	description: "",
	commandCategory: "0",
	usages: "unsend",
	cooldowns: 0
};

module.exports.languages = {
	"en": {
		"returnCant": "Can't to unsend message from other user.",
		"missingReply": "Reply to the message you want to unsend."
	}
}

module.exports.run = function({ api, event, getText }) {
	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText("returnCant"), event.threadID, event.messageID);
	if (event.type != "message_reply") return api.sendMessage(getText("missingReply"), event.threadID, event.messageID);
	return api.unsendMessage(event.messageReply.messageID);
}