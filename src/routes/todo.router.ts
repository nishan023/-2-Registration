
import { Router } from 'express'
import * as todoController from '../controller/todo.controller'
import { validate } from '../utils/validate'
import { postTodoDto } from '../validators/post-todo.validator'
import { putTodoDtobody } from '../validators/put-todo.validator'
import { deleteTodoDto } from '../validators/delete-todo.validator'
import {
    authenticateToken,
    isAdmin,
} from '../middleware/authentication.middleware'
const router = Router()

//POST to database
router.post(
    '/',
    validate(postTodoDto),
    authenticateToken,
    todoController.postTodos
)

//GET todos by id
router.get('/:id', authenticateToken, todoController.getTodosByID)

//GET todos ALL
router.get('/', authenticateToken, todoController.getTodosAll)

//DELETE by id
router.delete(
    '/:id',
    validate(deleteTodoDto),
    authenticateToken,
    todoController.deleteTodosByID
)

//UPDATE/PUT by id
router.put(
    '/:id',
    validate(putTodoDtobody),
    authenticateToken,
    todoController.updateTodo
)

export default router
