import User  from '../models/users.models';
import bcrypt from 'bcryptjs';
import { signupBodySchema } from '../validators/auth.validator';
import { z } from 'zod';
import Boom from '@hapi/boom';
import {
  createAccessToken,
  createRefreshToken,
  verifyRefreshToken,
} from '../utils/token.util';

export const signup = async (
  user: z.infer<typeof signupBodySchema>
) => {
  const { email, password, is_admin } = user;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await User.create({
      email,
      password: hashedPassword,
      is_admin,
    });
  } catch (e: any) {
    if (e.code === 11000 && e.keyPattern?.email) {
      throw Boom.conflict('User with this email already exists');
    } else {
      throw e;
    }
  }
};

export async function login(email: string, password: string) {
  const user = await User.findOne({ email });

  if (!user) {
    throw Boom.badRequest('Username or password is incorrect.');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw Boom.badRequest('Username or password is incorrect.');
  }

  const accessToken = createAccessToken(user._id, user.is_admin);

  const refreshToken = createRefreshToken(user._id, user.is_admin);

  return { accessToken, refreshToken };
}

export async function refresh(refreshToken: string) {
  try {
    const decodedToken: any = verifyRefreshToken(refreshToken);
    return createAccessToken(decodedToken.userId, decodedToken.isAdmin);
  } catch (error) {
    throw Boom.unauthorized('User is not logged in');
  }
}
