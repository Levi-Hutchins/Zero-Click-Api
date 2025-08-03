import { Request, Response, NextFunction } from 'express';
import { getAllSubmissions, getSubmissionById } from '../services/scan.service';
import { logger } from '../utils/logger';

export const getAllScanSubmissionsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const scanSubmissions = await getAllSubmissions();
    if (!scanSubmissions || scanSubmissions.length === 0) {
      return res.status(404).json({ message: 'No scan submissions found' });
    }
    return res.status(200).json(scanSubmissions);
  } catch (error) {
    logger.error('Error in getAllScanSubmissions:', error);
    res.status(500).json({ message: 'Internal Server Error' });
    next(error);
  }
};

export const getSubmissionByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(501).json({ message: 'Not Implemented' });
};
