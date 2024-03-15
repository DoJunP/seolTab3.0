import { remote } from 'webdriverio';
import { BLANK, logToFile } from '../automationResult.js';
import { logIn } from './loginAos.js';

async function main() {
  const caps = {
    platformName: 'Android',
    'appium:platformVersion': '13.0',
    'appium:app': '/Users/parkdojun/Downloads/3.0app.apk',
    'appium:automationName': 'Appium',
    'appium:deviceName': '980432CC-29FE-4488-B6FE-2BA900906A50',
    'appium:ensureWebviewsHavePages': true,
    'appium:nativeWebScreenshot': true,
    'appium:newCommandTimeout': 3600,
    'appium:connectHardwareKeyboard': true,
  };
  const driver = await remote({
    protocol: 'http',
    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    capabilities: caps,
  });

  logToFile('--------------------{Start}--------------------', BLANK);
  await logIn(driver);
  await driver.deleteSession();
  logToFile('--------------------{END}--------------------', BLANK);
}

main().catch(console.log);
