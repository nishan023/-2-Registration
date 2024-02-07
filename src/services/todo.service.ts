import { log } from 'console'
import Todo from '../models/todos.models'
import Boom from '@hapi/boom'

// POST todos
export const postTodo = async (body: any) => {
    const { title, status } = body
    try {
        console.log("Error on line no 8")
        return await Todo.create({
            data: {
                title,
                status,
            },
        })
    } catch (err: any) {
        console.log("error on line no 8", err);
        
            throw Boom.internal('Internal Server Error', err)
            }
        }



        //pods

        export const post=async(body:any)=>{
            const{title,status}=body;
            try {
                return await Todo.create(title,status);
                
            } catch (error:any) {
                throw Boom.badData(error);
                
            }

        }
// GET todos by id WITH ERROR
export const getTodo = async (id: any) => {
    try {
        return await Todo.findById(id)
    } catch (err: any) {
        throw Boom.notFound('Todo not found', err)
    }
}

// Get all todos
export const getTodosAll = async () => {
    try {
        return await Todo.find()
    } catch (err: any) {
        throw Boom.badImplementation('Failed to get todos', err)
    }
}

// DELETE by id
export const deleteTodo = async (id: any) => {
    try {
        return await Todo.findByIdAndDelete(id)
    } catch (err: any) {
        throw Boom.notFound('Todo not found', err)
    }
}

// UPDATE by id
export const updateTodo = async (id: any, body: any) => {
    const { title, status } = body
    try {
        return await Todo.findByIdAndUpdate(
            id,
            { title, status },
            { new: true, runValidators: true }
        )
    } catch (err: any) {
        throw Boom.notFound('Todo not found', err)
    }
}
