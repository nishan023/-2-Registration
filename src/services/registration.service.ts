import Student from '../models/student.models'
import { AppError } from '../utils/appError'

export interface StudentData {
    fullName: string
    email: string
    phoneNumber: string
    birthDate: Date
    gender: string
    permanentAddress: string
    temporaryAddress: string
}

export const createStudent = async (studentData:StudentData) => {
  
        const {fullName,email,phoneNumber,birthDate,gender,permanentAddress,temporaryAddress} = studentData
        const newStudent = new Student({
            fullName:fullName,
            email:email,
            phoneNumber:phoneNumber,
            birthDate:birthDate,
            gender:gender,
            permanentAddress:permanentAddress,
            temporaryAddress:temporaryAddress
        })
        await newStudent.save()
        const message = 'save successfully'
        
        return message
      
}
