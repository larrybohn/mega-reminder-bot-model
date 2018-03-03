export default class Reminder {
    constructor(chatId, messageId, timeInterval) { //todo: snooze capabilities, mark as completed etc.
        this.type = "reminder";
        this.chatId = chatId;
        this.messageId = messageId;
        this.timeIntervalSeconds = timeInterval;
        this.createdDate = Date.now(); //todo: decide on the format
    }
}
