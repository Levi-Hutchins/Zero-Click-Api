import mongoose, { Schema } from 'mongoose';

import { env } from '../../config/env.config';

export interface IScanSubmission extends Document {
  uuid: string;
  api: string;
  visibility: 'public' | 'private';
  url: string;
  message: string;
}

const SubmissionSchema: Schema = new Schema(
  {
    uuid: { type: String, required: true },
    api: { type: String, required: true },
    visibility: { type: String, enum: ['public', 'private'], required: true },
    url: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: env.SCAN_SUBMISSIONS_COLLECTION || 'default_scan_submissions',
  }
);

const ScanSubmission = mongoose.model<IScanSubmission>('Submission', SubmissionSchema);
export default ScanSubmission;
