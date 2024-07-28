import { z } from 'zod'

export const studentRegistrationBodySchema = z.object({
    fullName: z
        .string({
            required_error: 'Full Name is required',
        })
        .min(1, 'Full Name cannot be empty'),
    email: z
        .string({
            required_error: 'Email is required',
        })
        .email('Email address is invalid'),
    phoneNumber: z
        .string({
            required_error: 'Phone Number is required',
        })
        .min(10, 'Phone Number must be at least 10 characters')
        .max(15, 'Phone Number must be less than 15 characters'),
    birthDate: z
        .string({
            required_error: 'Birth Date is required',
        })
        .refine((date) => !isNaN(Date.parse(date)), 'Invalid date format'),

    gender: z.string( {
        required_error: 'Gender is required',
    }),

    permanentAddress: z
        .string({
            required_error: 'Permanent Address is required',
        })
        .min(1, 'Permanent Address cannot be empty'),
    temporaryAddress: z
        .string({
            required_error: 'Temporary Address is required',
        })
        .min(1, 'Temporary Address cannot be empty'),
})

export const studentRegistrationSchema = z.object({
    body: studentRegistrationBodySchema,
})
