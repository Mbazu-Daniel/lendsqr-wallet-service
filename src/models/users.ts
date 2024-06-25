import db from "../db/db";
import bcrypt from "bcryptjs";

export interface IUser {
  id: number;
  email: string;
  password: string;
  accountNumber: string;
  balance: number;
}

export const createUser = async (user: IUser): Promise<IUser> => {
  user.password = await bcrypt.hash(user.password, 10);
  return await db("users").insert(user);
};

export const getUserByAccountNumber = async (
  accountNumber: string
): Promise<IUser | undefined> => {
  return await db("users").where({ accountNumber }).first();
};

export const getUserById = async (id: number): Promise<IUser | undefined> => {
  return await db("users").where({ id }).first();
};

export const updateUserBalance = async (
  id: number,
  balance: number
): Promise<void> => {
  await db("users").where({ id }).update({ balance });
};
