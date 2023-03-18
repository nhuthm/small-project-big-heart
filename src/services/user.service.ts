import * as UserModel from '../models/user.model'
import { I_UserDocument } from '../models/user.model';

export async function register(user: I_UserDocument): Promise<void> {
 try {
   await UserModel.create(user);
 } catch (error) {
   throw error;
 }
}

export async function login(user: I_UserDocument) {
 try {
   const foundUser = await UserModel.findOne({ name: user.name, password: user.password });
 } catch (error) {
   throw error;
 }
}