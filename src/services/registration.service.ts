import Student from '../models/student.models';
import { AppError } from '../utils/appError';
import { sendEmail } from '../utils/mailer';

export interface StudentData {
  fullName: string;
  email: string;
  phoneNumber: string;
  birthDate: Date;
  gender: string;
  permanentAddress: string;
  temporaryAddress: string;
}

export const createStudent = async (studentData: StudentData) => {
  const newStudent = new Student({ ...studentData });
  await newStudent.save();
  return 'Student registered successfully';
};

export const getStudents = async () => {
  const allStudents = await Student.find().select('-createdAt -updatedAt -__v');
  const count = await Student.countDocuments();
  return { allStudents, count };
};

export const acceptStudent = async (id: string) => {
  const acceptedStudent = await Student.findByIdAndUpdate(
    id,
    { status: 'accepted' },
    { new: true }
  );

  if (!acceptedStudent) {
    throw new AppError('Student not found', 404);
  }

  await sendEmail(acceptedStudent.email, 'Documents Accepted', 'acceptance-email');
  return acceptedStudent;
};

export const rejectStudent = async (id: string) => {
  const rejectedStudent = await Student.findByIdAndUpdate(
    id,
    { status: 'rejected' },
    { new: true }
  );

  if (!rejectedStudent) {
    throw new AppError('Student not found', 404);
  }

  await sendEmail(rejectedStudent.email, 'Documents Rejected', 'rejection-email');
  return rejectedStudent;
};
