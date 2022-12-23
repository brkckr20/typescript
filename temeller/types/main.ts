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
let a;
a = "any";


/* string */
let x : string;
x = "burak";

/* number */
let age: number;
age = 30;


/* boolean */
let bool: boolean;
bool = false;


/* array */
let a3: any[];
a3 = [1, 2, 3, 4, "s", false];
let a1: string[];

a1 = ["a", "b", "c"];

let a2: number[];
a2 = [1, 2, 4]


/* Enum */
enum Color { Purple, Red, Aqua };
let bgColor = Color.Aqua;
bgColor = Color.Purple;


/* Tuple []*/
let t: [string, number];
t = ["Not found", 404];

/* Unknown */
//type checking yaparken  any yerine unknown kullanılması daha mantıklıdır.
let u: any;

let un: unknown;
un = "asdas";
un = 12;
un = false;

let unk = false;