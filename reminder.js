export default class Reminder {
    constructor(userId, messageId, timeInterval) { //todo: snooze capabilities, mark as completed etc.
        this.type = "reminder";
        this.userId = userId;
        this.messageId = messageId;
        this.timeIntervalSeconds = timeInterval;        
        this.createdDate = Date.now(); //todo: decide on the format
        this.lastSnoozeDate = this.createdDate;
        this.isCompleted = false;
    }
}
