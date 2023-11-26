import express, { Request, Response } from 'express'

export const appCore = express.Router();

appCore.get("/api/v1/prod/auth/core/jwt/decode", async (req: Request, res: Response) => {
    return res.status(200).json({
        status: 444
    })
})

appCore.get("/api/v1/prod/auth/core/oauth/callback", async (req: Request, res: Response) => {
    let q = req.query;
    if (!q) return res.json({
        status: 404,
        message: " Error"
    })
   
    return res.json({
        status: 200,
        message: "Success",
        advanced: null
    })
})
