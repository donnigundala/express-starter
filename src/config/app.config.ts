import * as process from "process";

const appConfig = {
  env: process.env.NODE_ENV,
  server: {
    port: process.env.PORT || 3000
  }
}

export default appConfig