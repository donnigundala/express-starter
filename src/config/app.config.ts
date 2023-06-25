import * as process from "process";

const appConfig = {
  env: process.env.NODE_ENV,
  server: {
    port: process.env.PORT || 3000
  },
  winston: {
    logFormat: process.env.LOG_FORMAT || 'dev',
    logDir: '../../logs'
  }
}

export default appConfig