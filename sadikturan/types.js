var a = 5;
var b = "ahmet";
var c = false;
var d;
var e = [1, 2, 4, 2];
var f = [1, 2, 2];
var g = [1, 2, 2, "aaa", false];
var h = ["asd", 0, "aa"]; //tuple
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 1;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["kapidaOdeme"] = 3] = "kapidaOdeme";
    Payment[Payment["eft"] = 2] = "eft";
})(Payment || (Payment = {}));
var kredi = Payment.kredi; // 0
var havale = Payment.havale; // 1
var eft = Payment.eft; // 2
