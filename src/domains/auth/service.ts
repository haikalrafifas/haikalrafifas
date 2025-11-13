import bcrypt from 'bcrypt';
import JWTAuth from '@/utilities/server/jwt';

import User from '../user/model';

export const findByNim = async (
  nim: number,
): Promise<User | undefined> => {
  return await User.query().findOne({ nim });
};

export const findAccount = async (
  nim: number,
  password: string,
): Promise<User | null> => {
  const user = await findByNim(nim);
  if (!user) return null;
  
  const storedHash = user.password;
  const isMatch = await bcrypt.compare(password, storedHash);

  if (!isMatch) return null;

  return user;
};

export const authenticate = (user: User) => {
  const payload = {
    id: user.id,
    nim: user.nim,
    name: user.name,
    image: user.image,
    role: user.role,
  };

  const accessToken = JWTAuth.access.sign(payload);

  return {
    access: accessToken,
  };
};

export const create = async (
  user: User
): Promise<User> => {
  user.password = await bcrypt.hash(user.password, 10);
  return await User.query().insert(user).returning('*');
};
