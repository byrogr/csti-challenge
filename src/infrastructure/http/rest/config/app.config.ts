// import { readPackageSync } from "read-pkg";
import { getEnvironmentString, getEnvironmentNumber } from "../../../shared/config/environment";

export const AppInfo = Object.freeze({
    APP_VERSION: getEnvironmentString('APP_VERSION', '1.0.0'),
    APP_NAME: getEnvironmentString('APP_NAME', ''),
})
export const AppConfig = Object.freeze({
    PORT: getEnvironmentNumber('PORT', 3000),
    BASE_URL: getEnvironmentString('BASE_URL', '/api')
});
