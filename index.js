import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import Middlewares from './src/middlewares/Middlewares.js'
import Configurations from './src/configurations/Configurations.js'
import routes from './src/routes/route.js'
import cors from 'cors'
import path from 'path'



const app = express()

app.use(express.json())
app.use(cors({Credential: true}))
app.use(helmet())
app.use(morgan('common',))




app.get('/product' , (requset,response) => {
    response.send(`  ✔️     SERVERN IS RUNNING `)
} )

routes.pastryRoute(app)
routes.userRoute(app)

app.use(Middlewares.notFound)


app.use(express.static(path.join("bakverkproject/build")))

Configurations.connectToPort(app)
Configurations.connectToDatabas()




