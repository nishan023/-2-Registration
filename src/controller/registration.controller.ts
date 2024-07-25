import { Request, Response, NextFunction } from 'express'
import * as RegisterStudentService from '../services/registration.service'
import { AppError } from '../utils/appError'

export const registerStudent = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const CreateStudentDto: RegisterStudentService.StudentData = req.body
        console.log(CreateStudentDto)

        const student =
            await RegisterStudentService.createStudent(CreateStudentDto)

        res.status(201).json({
            message: 'Student register successfully',
            data: student,
        })
    } catch (error) {
        next(error)
    }
}

export const getallStudents = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const listStudents = await RegisterStudentService.getStudents()
        res.status(200).json({
            message: 'Students fetch successfully',
            totalStudents: `total no of students :${listStudents.count}`,
            data: listStudents,
        })
    } catch (error) {
        next(error)
    }
}

export const acceptedStudent = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params
        const acceptedStudent = await RegisterStudentService.acceptStudent(id)
        console.log(`this is logging `, acceptedStudent)

        res.status(200).json({
            message: 'Student accept successfully',
            // data: acceptedStudent,
        })
    } catch (error) {
        next(error)
    }
}

export const rejectedStudent = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params

        const rejectedStudent = await RegisterStudentService.rejectStudent(id)
        console.log(`this is loggong `, rejectedStudent)

        res.status(200).json({
            message: 'Student rejected successfully',
            // data: rejectedStudent,
        })
    } catch (error) {
        next(error)
    }
}
