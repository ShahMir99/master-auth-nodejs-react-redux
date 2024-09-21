//global import 
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

//local imports
import Routes from "./routes/index.js"
import { Config } from "./configs/index.js"
import { connectDB } from "./db/db.config.js"

const app = express()

app.use(express.json({limit : "5MB"}))
app.use(cookieParser())
app.use(cors())

app.use("/api/v1/auth",Routes.AuthRoutes)
app.use("/api/v1/user",Routes.UserRoutes)
app.use("/api/v1/post",Routes.PostRoutes)

app.get('/', async (req, res) => {
    res.send('Hello world...')
});


const server = app.listen(Config.appPort, () => {
    const protocol = (process.env.HTTPS === 'true' || process.env.NODE_ENV === 'production') ? 'https' : 'http'
    const {address , port} = server.address()
    const host = address === '::' ? '127.0.0.1' : address
    console.log(`Server is running at ${protocol}://${host}:${port}`)
})

const databaseUrl = Config.databaseUrl || 'mongodb://127.0.0.1:27017'
const databaseName = Config.databaseName || 'OnDay'

connectDB(databaseUrl, databaseName)