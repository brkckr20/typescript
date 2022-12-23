/**
 *
 *  @typeAnnotations : type
 *
 *  Any
 *  Number
 *  String
 *  Boolean
 *  Arrays string[], number[], any[]
 *  Enum
 *  Tuple [type1,type2]
 *  Unknown
 *  TYPE INREFERENCE
 */
/* ilk değer ataması yapılmasa da :string kullanımı ile bir sonraki satırdaki atamada string methodları intellisense tarafından algılanabilir */
// değişken tanımlaması yapıldıktan sonra ilk değer ataması yapılmazsa any olarak algınlanır
var a;
a = "any";
/* string */
var x;
x = "burak";
/* number */
var age;
age = 30;
/* boolean */
var bool;
bool = false;
/* array */
var a3;
a3 = [1, 2, 3, 4, "s", false];
var a1;
a1 = ["a", "b", "c"];
var a2;
a2 = [1, 2, 4];
/* Enum */
var Color;
(function (Color) {
    Color[Color["Purple"] = 0] = "Purple";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Aqua"] = 2] = "Aqua";
})(Color || (Color = {}));
;
var bgColor = Color.Aqua;
bgColor = Color.Purple;
/* Tuple []*/
var t;
t = ["Not found", 404];
/* Unknown */
//type checking yaparken  any yerine unknown kullanılması daha mantıklıdır.
var u;
var un;
un = "asdas";
un = 12;
un = false;
var unk = false;
