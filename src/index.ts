import express, { Request, Response } from 'express'
import { server_mode } from './config'
import { Connect } from './database/connect'
import { appCore } from './auth/core'
import cors from 'cors'
import helmet from 'helmet'

const app = express()

export async function initServer() {
    app.use('/', appCore)
    app.use(cors({ credentials: true }))
    app.use(helmet())
    app.use(express.json())
    await Connect()
    app.get("/", async (req:Request, res:Response) => {
        return res.status(200).json({
            status: 200,
            message: `Successful Published ${server_mode} Build`,
            server: "TypeScript"
        })
    })


    app.use((req:Request, res:Response, next:any) => {
        res.setHeader('Content-Security-Policy', "default-src 'self' https://typescriptlang.org");
        res.setHeader('x-powered-by', 'TS')
        res.setHeader('x-server', 'TypeScript')
        res.setHeader('Server', ' TypeScript')
        next();
    });
    app.use((req: Request, res: Response, next: any) => {
        res.status(404).json({
            status: 404,
            message: `Error Endpoint Notfound`
        })
    })
    app.use((err: any, req: Request, res: Response, next: any) => {
        console.error(err.stack)
        res.status(500).json({
            status: 500,
            message: `Request Error : Request ${Date.now()} Reported To System Admin`
        })
    })

    app.listen(80)
    console.log(`  - # ${Date.now()} Backend Ready`)
}

(async () => {
    await initServer()

})()