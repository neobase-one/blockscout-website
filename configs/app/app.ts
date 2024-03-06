import { getEnvValue } from './utils';

const calculateAppHost = () => {
  if (getEnvValue('NEXT_PUBLIC_VERCEL_ENV')) {
    switch (getEnvValue('NEXT_PUBLIC_VERCEL_ENV')) {
      case 'preview':
        return getEnvValue('NEXT_PUBLIC_VERCEL_BRANCH_URL');
      case 'production':
        return 'blockscout-website.vercel.app';
      default:
        return getEnvValue('NEXT_PUBLIC_VERCEL_URL');
    }
  } else {
    return getEnvValue('NEXT_PUBLIC_APP_HOST');
  }
};

const appPort = getEnvValue('NEXT_PUBLIC_APP_PORT');
const appSchema = getEnvValue('NEXT_PUBLIC_APP_PROTOCOL');
const appHost = calculateAppHost();
const baseUrl = [ appSchema || 'https', '://', appHost, appPort && ':' + appPort ]
  .filter(Boolean)
  .join('');
const isDev = getEnvValue('NEXT_PUBLIC_APP_ENV') === 'development';

const app = Object.freeze({
  isDev,
  protocol: appSchema,
  host: appHost,
  port: appPort,
  baseUrl,
  useProxy: getEnvValue('NEXT_PUBLIC_USE_NEXT_JS_PROXY') === 'true',
});

export default app;
