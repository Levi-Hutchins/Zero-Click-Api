import { Router } from 'express';
import { getAllScanSubmissionsController } from '../controllers/scan.controller';
import { getSubmissionByIdController } from '../controllers/scan.controller';
const router = Router();

router.get('/', getAllScanSubmissionsController);
router.get('/:id', getSubmissionByIdController);

export default router;
