require('dotenv').config();

const APP_VERSION: string = String(process.env.APP_VERSION || 'v0.0.1');
const APP_PORT: number = Number(process.env.APP_PORT || 3001);
const JWT_SECRET: string = process.env.SALT_ROUNDS || 'sct';

exports.app_version = APP_VERSION
exports.app_port = APP_PORT
exports.jwt_secret = JWT_SECRET