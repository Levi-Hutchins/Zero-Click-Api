import ScanSubmission, { IScanSubmission } from '../schemas/mongodb/scan.submission.schema';
import { logger } from '../utils/logger';

export async function getAllSubmissions(): Promise<IScanSubmission[]> {
  try {
    const submissions = await ScanSubmission.find();
    return submissions;
  } catch (error) {
    logger.error('Error fetching submissions:', error);
    throw error;
  }
}
export async function getSubmissionById(uuid: string) {
  try {
    const submission = await ScanSubmission.findOne({ uuid });
    if (!submission) {
      throw new Error('Submission not found');
    }
    return submission;
  } catch (error) {
    logger.error('Error fetching submission by ID:', error);
    throw error;
  }
}
