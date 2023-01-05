/* INTERFACE */

interface IDatabase{
    add();
    get();
    delete();
    update();
}

class MySql implements IDatabase{
    add() {
        console.log("Mysql Add");
    }
    get() {
        console.log("Mysql get");
    }
    delete() {
        console.log("Mysql delete");
    }
    update() {
        console.log("Mysql update");
    }
}

class MongoDB implements IDatabase{
    add() {
        console.log("MongoDB Add");
    }
    get() {
        console.log("MongoDB get");
    }
    delete() {
        console.log("MongoDB delete");
    }
    update() {
        console.log("MongoDB update");
    }
}

/* let mysql = new MySql();

mysql.add(); */

function addDB(database:IDatabase) {
    database.delete();
}
addDB(new MySql())
addDB(new MongoDB())