// const Notifications = {
//     Success: 0,
//     Error: 1,
//     Warning:2
// }
var Notifications;
(function (Notifications) {
    Notifications[Notifications["Success"] = 0] = "Success";
    Notifications[Notifications["Error"] = 1] = "Error";
    Notifications[Notifications["Warning"] = 2] = "Warning";
})(Notifications || (Notifications = {}));
function sendNotification(notificationType) {
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
