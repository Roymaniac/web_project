import dotenv from 'dotenv';
import { env } from 'process';

dotenv.config();

export const PORT = env.PORT || 5000;
export const { DB_URI } = env;
export const { JWT_SECRET } = env;
export const { NODE_ENV } = env;
export const { MAIL_HOST } = env;
export const { MAIL_PORT } = env;
export const { MAIL_USER } = env;
export const { MAIL_PASSWORD } = env;
export const { WEB_HOST } = env;
export const { GOOGLE_CLIENT_ID } = env;
export const { GOOGLE_CLIENT_SECRET } = env;
export const { GOOGLE_CALLBACK_URI } = env;
export const { FACEBOOK_CLIENT_ID } = env;
export const { FACEBOOK_CLIENT_SECRET } = env;
export const { FACEBOOK_CALLBACKURL } = env;
