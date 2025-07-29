import { Router } from 'express';
import { getAllScanSubmissions } from '../controllers/scan.controller';
const router = Router();

router.get('/', getAllScanSubmissions);

export default router;
