// Connect env file
require('dotenv').config()
const express = require('express')
const cors = require('cors')

const server = express()

// Import user router
const router = require('./Routes/userRoutes')
// Import event router
// const eventRoutes = require('./Routes/eventRoutes')
const photoRoutes = require('./Routes/photoRoutes')
const commentRoutes = require('./Routes/commentRoutes')
server.use(cors())

// Middleware to parse JSON bodies
server.use(express.json())
server.use('/uploads',express.static('uploads'))

// Enable CORS for all origins (you can specify the origin if needed)


// Import and connect to the database
require('./Database/mongoCon')

// Use routers
server.use("/api/users", router)
server.use("/api/photos", photoRoutes)
server.use('/api/comments', commentRoutes);

// Integrate React portendTime
const port = process.env.PORT || 4000

// Export upload folders to client (uncomment if needed)
// server.use('/uploads', express.static(path.join(__dirname, 'uploads')))

server.listen(port, () => {
    console.log(`------server Started at port ${port}--------`)
})
