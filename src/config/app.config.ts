import * as process from "process";

const appConfig = {
  env: process.env.NODE_ENV,
  server: {
    port: process.env.PORT || 3000
  },
  winston: {
    logDir: '../../logs'
  },
  morgan: {
    format: process.env.MORGAN_FORMAT || 'dev',
  }
}

export default appConfig