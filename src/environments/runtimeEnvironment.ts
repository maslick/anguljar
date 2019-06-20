declare var ENV;

export const runtimeEnvironment = {
  backendUrl: ENV.backendUrl === '${BACKEND_URL}' ? 'www.google.com' : ENV.backendUrl
};
