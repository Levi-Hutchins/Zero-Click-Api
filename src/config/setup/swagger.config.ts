import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { Express } from 'express';

export const swaggerOptions = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'ZeroClick API',
      version: '0.1.0',
      description:
        'This API provides endpoints for scanning and managing Cloudflare scan submissions. It is the core API for the ZeroClick application, allowing users to submit URLs for scanning and retrieve scan results.',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['../routes/*.ts'],
};

export const setupSwagger = (app: Express) => {
  const swaggerSpec = swaggerJsDoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
