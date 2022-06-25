import express from 'express'
import db from "./app/config/database.js"
import productRoutes from './app/routes/index.js'
import cors from 'cors'


const app= express()

//Connection to Dtabase
try {
    await db.authenticate();
    console.log('database Connected')
} catch (error) {
    console.log('Connection Error : ',error)
    
}
app.use(cors());

app.use(express.json()) //midlle ware utk menerima body yg dikirim 
// route
app.use('/products',productRoutes);

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404 <br> Halaman tdk ditemukan</h1>')
  })


const port =5001
app.listen(port,()=> console.log(`Servere berjalan di port ${port}`));
