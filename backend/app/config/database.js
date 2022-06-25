import {Sequelize} from "sequelize";

const db= new Sequelize("restfull_mysql","root","",{
    host : "localhost",
    dialect:"mysql",

});

export default db;