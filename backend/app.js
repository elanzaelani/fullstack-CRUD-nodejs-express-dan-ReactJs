import express from 'express' //1
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import db from "./app/config/database.js"
import cors from 'cors'
import productRoutes from './app/routes/Product.js'
import userRoutes from './app/routes/User.js';
import employeeRoutes from './app/routes/Employee.js';
import Employees from './app/models/EmployeeModel.js';

// import Users from './app/models/UserModel.js'
dotenv.config();


const app= express() //2

//Connection to Dtabase
try {
    await db.authenticate();
    console.log('database Connected');
    await Employees.sync();
    // await Users.sync(); //kode ini brefungsi utk mnggenerate table scara otomatis
} catch (error) {
    console.log('Connection Error : ',error)
    
}
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json()) //midlle ware utk menerima body yg dikirim 

// route
app.use('/login',userRoutes);
app.use('/users',userRoutes);
app.use('/products',productRoutes);
app.use('/employees',employeeRoutes);

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404 <br> Halaman tdk ditemukan</h1>')
  })


const port =5001
app.listen(port,()=> console.log(`Server berjalan di port ${port}`)); //3
