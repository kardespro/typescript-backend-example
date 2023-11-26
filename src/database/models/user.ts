import { Schema } from 'mongoose';
import mongoose from 'mongoose'
// Document interface
interface User {
    jwt_token: string;
    username:string;
    password:string;
}

// Schema
const schema = new Schema<User>({
    jwt_token: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
});

const Ui = mongoose.model('User', schema);
export default Ui;