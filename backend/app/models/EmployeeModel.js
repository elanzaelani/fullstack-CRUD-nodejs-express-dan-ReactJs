import { Sequelize } from "sequelize";
import db from '../config/database.js';

const {DataTypes}= Sequelize;

const Employee = db.define("tbl_employee",{
    
    nik :{
        type:DataTypes.STRING
    },
    nama :{
        type:DataTypes.STRING
    },
    bagian:{
        type:DataTypes.STRING
    },
    jabatan:{
        type: DataTypes.STRING
    },
},{
    freezeTableName:true
});
export default Employee;