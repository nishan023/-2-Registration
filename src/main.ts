import express, {
    RequestHandler,
    NextFunction,
    Request,
    Response,
} from 'express'
import cors from 'cors'
import todosRouter from './routes/todo.router'
import userRouter from './routes/auth.router'
import buildError from './utils/build-error'
import startingSchema from './connection/db.connection'
import dotenv from 'dotenv';
dotenv.config();
const app = express()

app.use(express.json())
const port = process.env.PORT || 3000

const start = async () => {
    //connect mongodb
    try {
        await startingSchema(process.env.MONGO_URL)
            .then(() => {
                console.log('Connected To MongoDB Database SuccessFully ...')
            })
            .catch((err: any) => {
                console.log(err, 'MongoDB connection failed')
            })
        app.listen(port, () => {
            console.log(`Server is running on ${port}`)
        })
    } catch (err) {
        console.log(err)
    }
}

start();
app.use(cors())
app.use('/todos', todosRouter)
app.use('/user', userRouter)

//Error handler

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const error = buildError(err)
    res.status(error.code).json({ error })
})

export default app
