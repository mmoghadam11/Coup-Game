// backend/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const WEB_APP_URL = process.env.WEB_APP_URL;
// برای Render، پورت باید از متغیرهای محیطی خوانده شود
const PORT = process.env.PORT || 8000;

const bot = new TelegramBot(TOKEN, { polling: true });
const app = express();

app.use(cors());
app.use(express.json());

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "سلام! برای ورود به بازی کودتا، دکمه زیر را بزن:", {
        reply_markup: {
            // این دکمه وب‌اپ را باز می‌کند
            inline_keyboard: [
                [{ text: '🎮 ورود به بازی', web_app: { url: WEB_APP_URL } }]
            ]
        }
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Backend server is running on port ${PORT}`);
});