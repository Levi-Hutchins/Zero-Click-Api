import ScanSubmission, { IScanSubmission } from '../schemas/mongodb/scan.submission.schema';
import axios from 'axios';
import { env } from '../config/env.config';
import { logger } from '../utils/logger';
import { ClourflareScanResult } from '../schemas/cloudflare/scan.result.dto';

export async function getAllSubmissions(): Promise<IScanSubmission[] | null> {
  try {
    const submissions = await ScanSubmission.find();
    return submissions;
  } catch (error) {
    logger.error('Error fetching submissions:', error);
    throw error;
  }
}
export async function getSubmissionById(uuid: string): Promise<IScanSubmission | null> {
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

export async function submitCloudflareScan(url: string): Promise<ClourflareScanResult | null> {
  try {
    const urlPayload = {
      url: url,
    };

    // need to cast tot response type
    const scanResponse = await axios.post(env.CLOUDFLARE_SCAN_ENDPOINT, urlPayload, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.CLOUDFLARE_API_KEY}`,
      },
    });

    return scanResponse.data as ClourflareScanResult;
  } catch (error: any) {
    logger.error(`Error submitting ${url} to Cloudflare:`, error.message);

    return null;
  }
}
