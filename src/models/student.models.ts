import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    birthDate: { type: Date, required: true },
    gender: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    temporaryAddress: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ['accepted', 'rejected', 'pending'],
        default: 'pending',
    },
})

export default mongoose.model('Student', studentSchema)
