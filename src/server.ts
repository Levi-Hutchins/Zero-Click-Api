import app from './app';
import { env } from './config/env.config';

const PORT = env.PORT;
const TEST = env.TEST;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Test mode is ${TEST}`);
  console.log('Raw env:', process.env.TEST); // should show 'true'
});
