// import mongoose, { Schema, Document } from 'mongoose'

// export interface Todo extends Document {
//     id: number
//     title: string
//     status?: string
// }

// const TodoSchema: Schema = new Schema(
//     {
//         id: { type: Number, autoIncrement: true, unique: true },
//         title: { type: String, required: true },
//         status: { type: String },
//         createdAt: { type: Date, default: Date.now },
//         updatedAt: { type: Date, default: Date.now }
//     },
//     {
//         timestamps: true, // This line adds the createdAt and updatedAt fields
//     }
// )

// export default mongoose.model<Todo>('Todo', TodoSchema)

import mongoose from 'mongoose'
const TodoSchema= new mongoose.Schema(
    {
                id: { type: Number, autoIncrement: true },
                title: { type: String, required: true },
                status: { type: String },
                createdAt: { type: Date, default: Date.now },
                updatedAt: { type: Date, default: Date.now }
            },
            {
                timestamps: true, // This line adds the createdAt and updatedAt fields
            }
    
)
export default mongoose.model("Todo",TodoSchema);