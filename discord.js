const Discord = require('discord.js');
const { token } = require('./token.json');
const client = new Discord.Client();

// 連上線時的事件
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

// 當 Bot 接收到訊息時的事件
client.on('message', (msg) => {
	// 如果訊息的內容是 'ping'
	if (msg.content === 'hi') {
		// 則 Bot 回應 'Pong'
		msg.reply('hello!');

		if (msg.content ==='安装')
		{
			msg.reply('游戏 无法安装')

			
		}
	}
});

client.login(token);