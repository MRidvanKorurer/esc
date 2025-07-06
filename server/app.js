const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())



// MongoDB connn
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connection success'))
.catch(err => console.error('MongoDB connection error:', err))

// Server start
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server is running: ${PORT}`))
