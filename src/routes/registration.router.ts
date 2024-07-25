import { Router } from 'express';
import * as registerStudentController  from '../controller/registration.controller';
import { validate} from '../utils/validate';
import { studentRegistrationSchema} from '../validators/registration.validator';


const registerStudentRouter = Router();

registerStudentRouter.post('/student/register',validate(studentRegistrationSchema),registerStudentController.registerStudent);

export default registerStudentRouter;

