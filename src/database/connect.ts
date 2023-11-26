import { db } from '../config'
import mongoose from 'mongoose'

export async function Connect() {
    await mongoose.connect("").then((a: any) => {
        console.log(`Database Connected`)
    }).catch((err: any) => {
        console.log(`Connection Error`)
    })
}