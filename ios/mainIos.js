import { remote } from 'webdriverio';
import { BLANK, logToFile } from '../automationResult.js';
import { logIn } from './loginIos.js';

async function main() {
  const caps = {
    platformName: 'ios',
    'appium:deviceName': 'ipad',
    'appium:platformVersion': '16.5.1',
    'appium:automationName': 'xcuitest',
    'appium:udid': '00008020-000815642104402E',
    'appium:bundleId': 'com.onuii.seoltab3.dev',
    'appium:xcodeOrgId': 'HLNWXJ8WJ4',
    'appium:xcodeSigningId': 'iphone Developer',
    'appium:includeSafariInWebviews': true,
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
  //   await driver.deleteSession();
  logToFile('--------------------{END}--------------------', BLANK);
}

main().catch(console.log);
