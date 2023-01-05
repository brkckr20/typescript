/* abstract class */

abstract class DB {
    get() {
        console.log("abstract class db get");
    }
    add() {
        console.log("abstract class db add");
    }
    abstract delete();
    abstract update();
}

class MySql extends DB{
    delete() {
        console.log("Mysql delete");
    }
    update() {
        console.log("Mysql update");
    }
}

class MongoDB extends DB{
    delete() {
        console.log("MongoDB delete");
    }
    update() {
        console.log("MongoDB update");
    }
}

function AddDB(db: DB) {
    db.delete();
}

AddDB(new MySql())
AddDB(new MongoDB())