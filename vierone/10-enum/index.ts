// const Notifications = {
//     Success: 0,
//     Error: 1,
//     Warning:2
// }

enum Notifications {
    Success,
    Error,
    Warning
}

function sendNotification(notificationType: Notifications) {
    switch (notificationType) {
        case Notifications.Success:
            console.log("Başarılı");
            break;
        case Notifications.Error:
            console.error("Hatalı");
            break;
        default:
            console.warn("Uyarı");
            break;
    }
}

sendNotification(Notifications.Success);