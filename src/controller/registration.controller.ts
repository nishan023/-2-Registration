import { Request, Response, NextFunction } from 'express'
import { createStudent, StudentData } from '../services/registration.service'
import { AppError } from '../utils/appError'

export const registerStudent = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const CreateStudentDto: StudentData = req.body
        const student = await createStudent(CreateStudentDto)

        res.status(201).json({
            message: 'Student register successfully',
            data: student,
        })
    } catch (error) {
        next(error)
    }
}

