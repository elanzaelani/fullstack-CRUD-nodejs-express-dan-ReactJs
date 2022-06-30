import express from 'express' //1
import dotenv from 'dotenv';
import db from "./app/config/database.js"
import cors from 'cors'
import productRoutes from './app/routes/Product.js'
import userRoutes from './app/routes/User.js';
// import Users from './app/models/UserModel.js'
dotenv.config();


const app= express() //2

//Connection to Dtabase
try {
    await db.authenticate();
    console.log('database Connected');
    // await Users.sync(); //kode ini brefungsi utk mnggenerate table scara otomatis
} catch (error) {
    console.log('Connection Error : ',error)
    
}
app.use(cors());

app.use(express.json()) //midlle ware utk menerima body yg dikirim 

// route
app.use('/login',userRoutes);
app.use('/user',userRoutes);
app.use('/products',productRoutes);

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404 <br> Halaman tdk ditemukan</h1>')
  })


const port =5001
app.listen(port,()=> console.log(`Servere berjalan di port ${port}`)); //3
