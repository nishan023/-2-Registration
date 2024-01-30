import mongoose, { Schema, Document } from 'mongoose'

export interface User extends Document {
    id: number
    email: string
    password: string
    is_admin: boolean
}

const UserSchema: Schema = new Schema({
    id: { type: Number, autoIncrement: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    is_admin: { type: Boolean, default: false },
},
{
    timestamps:true,
})

export default mongoose.model<User>('User', UserSchema)
