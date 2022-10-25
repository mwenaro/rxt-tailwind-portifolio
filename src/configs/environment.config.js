const dev = {
  API_BASE_URL: 'http://localhost:8000/api/',
  CLIENT_BASE_URL: 'http://localhost:3000'
};

const prod = {
  API_BASE_URL: '',
  CLIENT_BASE_URL: ''
};

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return dev;
    case 'production':
      return prod;
    default:
      break;
  }
};

export const env = getEnv();
