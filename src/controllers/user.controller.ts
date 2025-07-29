import { Request, Response, NextFunction } from 'express';
import { getAllSubmissions } from '../services/scan.service';
import dotenv from 'dotenv';
dotenv.config();

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const scanSubmissions = await getAllSubmissions();
    console.log(scanSubmissions);
    return res.status(200).json(scanSubmissions); // ✅ good practice to return
  } catch (error) {
    next(error); // ✅ pass errors to centralized handler
  }
};
