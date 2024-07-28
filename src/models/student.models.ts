import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    birthDate: { type: Date, required: true },
    gender: { type: String, 
        enum:['Male','Female','Others'],
        required: true },
    permanentAddress: { type: String, required: true },
    temporaryAddress: { type: String, required: true },
    status: {
        type: String,
        enum: ['accepted', 'rejected', 'pending'],
        default: 'pending',
    },
},{
    timestamps:true
})

export default mongoose.model('Student', studentSchema)
