import { z } from 'zod'

export const postTodoDto = z.object({
    body: z.object({
        title: z.string({
            required_error: 'title is required',
        }),
        // status: z.enum(['completed', 'ongoing'], {
        //     required_error: 'status should be either completed or ongoing',
        // }),
        status:z.string({
            required_error:"status is required"
        })
    }),
})
