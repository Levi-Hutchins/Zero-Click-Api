export const scanSubmissionResponse = {
  uuid: { type: 'string', format: 'uuid' },
  api: { type: 'string' },
  visibility: { type: 'string', enum: ['public', 'private'] },
  url: { type: 'string', format: 'uri' },
  message: { type: 'string' },
};
