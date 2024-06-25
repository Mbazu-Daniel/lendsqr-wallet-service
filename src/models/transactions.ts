import db from "../db/db";

export enum TransactionType {
  Fund = "fund",
  Transfer = "transfer",
  Withdraw = "withdraw",
}

export interface ITransaction {
  id?: number;
  type: TransactionType;
  amount: number;
  from_user_id: number;
  to_user_id?: number;
}

export const createTransaction = async (
  transaction: ITransaction
): Promise<ITransaction> => {
  const [newTransaction] = await db("transactions")
    .insert(transaction)
    .returning("*");
  return newTransaction;
};
