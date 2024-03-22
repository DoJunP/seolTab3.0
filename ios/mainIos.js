import { remote } from 'webdriverio';
import { BLANK, logToFile } from '../automationResult.js';
import { logIn } from './loginIos.js';
import { allowPermission } from './permission.js';
import { logoutAtmain } from './logoutAtmain.js';
import { myPage } from './myPage.js';
import { appSettings } from './appSetting.js';

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
  // 로그인 화면인지 판단 후 로그인 화면이면 로그인 화면 케이스 검증 시작, 로그인 화면이 아닌 경우 해당 케이스 제외
  try {
    await driver
      .$('~TouchableOpacity_Submit')
      .waitForDisplayed({ timeout: 10000, interval: 2000 });
    await logIn(driver);
  } catch (error) {
    console.log(error);
    if (error.message.includes('("~TouchableOpacity_Submit") still not')) {
      console.log('로그인 화면에 있지 않습니다');
      await logoutAtmain(driver);
      await logIn(driver);
    } else {
      throw error;
    }
  }
  // "앱 접근" 권한 안내 화면 진입 여부 판단 후 자동화 케이스 시작
  try {
    await driver.$('~앱 접근 권한 안내').waitForDisplayed();
    await allowPermission(driver);
  } catch (error) {
    console.log(error);
    if (error.message.includes('("~앱 접근 권한 안내") still not')) {
      console.log('모든 권한 허용 상태');
    } else {
      throw error;
    }
  }
  await myPage(driver);
  await appSettings(driver);
  await driver.deleteSession();
  logToFile('--------------------{END}--------------------', BLANK);
}

main().catch(console.log);
