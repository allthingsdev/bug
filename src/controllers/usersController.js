import { testEnvironmentVariable } from '../settings.js';

export const usersHome = (req, res) => res.status(200).json({ message: "Users Controller" });