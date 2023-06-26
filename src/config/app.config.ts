import * as process from "process";

const appConfig = {
  env: process.env.NODE_ENV || 'development',
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0'
  },
  winston: {
    logDir: '../../logs'
  },
  morgan: {
    format: process.env.MORGAN_FORMAT || 'dev',
  }
}

export default appConfig