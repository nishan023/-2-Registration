import { Request, Response, NextFunction } from 'express'
import * as Authservice from '../services/auth.service'
import { loginBodySchema, signupBodySchema } from '../validators/auth.validator'

export const registerAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const createdUser = await Authservice.signup(
            signupBodySchema.parse(req.body)
        )
        res.json({
            message: 'User registered successfully',
        })
    } catch (err) {
        next(err)
    }
}

export const loginAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { email, password } = loginBodySchema.parse(req.body)

        const { accessToken, refreshToken } = await Authservice.login(
            email,
            password
        )
        // res.cookie('refreshToken', refreshToken, {
        //     httpOnly: true,
        //     path: '/api/auth/refresh',
        // }).json({ accessToken }) ,
        res.json({
            message: 'User login successfully',
            Accesstoken: accessToken,
        })
    } catch (error) {
        next(error)
    }
}

export const refreshToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { refreshToken } = req.cookies
    try {
        const token = await Authservice.refresh(refreshToken)
        res.json({ accessToken: token })
    } catch (error) {
        next(error)
    }
}
