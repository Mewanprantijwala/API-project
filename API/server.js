const express = require('express')
const { db } = require('./config/db')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT


/////////Use//////
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//////DB/////
const dbConfig=require('./config/db')
dbConfig()

////////import route////////////
const adminRoute=require('./routes/admin.route')
const categoryRoute=require('./routes/category.route')

///////////////routing////////////////
app.use('/api/admin',adminRoute)
app.use('/api/admin/category',categoryRoute)

app.get('/', (req, res) => res.send('Welcome to the Admin Panel API'))
app.listen(PORT, () => console.log(`PORT http://localhost:${PORT}`))