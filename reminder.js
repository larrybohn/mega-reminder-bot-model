export class Reminder {
    constructor(chatId, messageId, timeInterval) { //todo: snooze capabilities, mark as completed etc.
        this.type = "reminder";
        this.chatId = chatId;
        this.messageId = messageId;
        this.timeIntervalMilliseconds = timeInterval;
        this.createdDate = Date.now();
    }
}
