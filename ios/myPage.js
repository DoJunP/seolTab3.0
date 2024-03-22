// 학생인지 선생님인지에 따라서 확인해야 하는 케이스가 상이함
// 마이페이지 진입까지는 같음, 화면 내부에서 요소를 파악해야함

import { BLOCK, FAIL, logToFile, PASS } from '../automationResult.js';
import {
  clickElement,
  clickElementForTarget,
  downtopScroll,
  findElement,
} from '../common.js';

export let myPage = async (driver) => {
  // "메인" 화면 상단 네비게이션에서 [프로필] 버튼 클릭 시 "마이페이지" 화면 진입
  await clickElement(
    driver,
    '[프로필] 버튼',
    '~TouchableOpacity_account_icon_0',
  );
  try {
    await driver
      .$('~학생')
      .waitForDisplayed({ timeout: 10000, interval: 2000 });
    // 학생 마이페이지 확인 코드 작성
    await shareNavbar(driver);
    await studentMypage(driver);
  } catch (error) {
    if (error.message.includes('("학생") still not displayed')) {
      try {
        await driver
          .$('~선생님')
          .waitForDisplayed({ timeout: 10000, interval: 2000 });
        // 선생님 마이페이지 확인 코드 작성
        await shareNavbar(driver);
        await teacherMypage(driver);
      } catch (error) {
        if (error.message.includes('("선생님") still not displayed')) {
          console.log(
            "'메인' 화면에서 [프로필] 버튼 클릭 시 '마이페이지' 화면 진입",
            FAIL,
          );
          logToFile(
            ("'메인' 화면에서 [프로필] 버튼 클릭 시 '마이페이지' 화면 진입",
            FAIL),
          );
          await driver.saveScreenshot(
            `/Users/parkdojun/Documents/Seoltab3.0 Automation/bugImage/"메인" 화면에서 [프로필] 버튼 클릭 시 "마이페이지" 화면 진입 ${FAIL}(${formattedDate}).png`,
          );
        }
      }
    } else {
      console.log("'마이페이지' 테스트 중 오류 발생", BLOCK);
      logToFile("'마이페이지' 테스트 중 오류 발생", BLOCK);
    }
  } finally {
    driver.pause(1000);
  }
};

// 학생과 선생님 공통 요소
let shareNavbar = async (driver) => {
  await findElement(
    driver,
    '[<] 버튼',
    '//XCUIElementTypeOther[@name="설탭 로그인"]/XCUIElementTypeButton',
  );
  await findElement(driver, '"마이페이지" 화면명', '~마이페이지');
  await findElement(
    driver,
    '[설정] 버튼',
    '//XCUIElementTypeOther[@name="설탭 로그인"]/XCUIElementTypeOther[2]',
  );
};

// 학생용 케이스
let studentMypage = async (driver) => {
  await findElement(
    driver,
    '"기본 정보" 탭',
    '//XCUIElementTypeStaticText[@name="기본 정보"]',
  );
  await findElement(
    driver,
    '"수강 정보" 탭',
    '//XCUIElementTypeStaticText[@name="수강 정보"]',
  );
  await findElement(
    driver,
    '"결제 정보" 탭',
    '//XCUIElementTypeStaticText[@name="결제 정보"]',
  );
  await findElement(driver, '"연락처" 항목', '~연락처');
  await findElement(driver, '"학교 정보" 항목', '~학교 정보');
  await findElement(driver, '"계정 정보" 항목', '~계정 정보');
  await findElement(driver, '"추천 코드" 항목', '~추천 코드');
  await findElement(
    driver,
    '[내 수강권 확인하기] 버튼',
    '//XCUIElementTypeStaticText[@name="내 수강권 확인하기"]',
  );
  await findElement(
    driver,
    '[비밀번호 변경] 버튼',
    '//XCUIElementTypeStaticText[@name="비밀번호 변경"]',
  );
  await findElement(
    driver,
    '[회원탈퇴] 버튼',
    '//XCUIElementTypeStaticText[@name="회원탈퇴"]',
  );
  await findElement(
    driver,
    '[공지사항] 버튼',
    '//XCUIElementTypeStaticText[@name="공지사항"]',
  );
  await findElement(
    driver,
    '[고객센터] 버튼',
    '//XCUIElementTypeStaticText[@name="고객센터"]',
  );
  await findElement(
    driver,
    '[서비스 이용약관] 버튼',
    '//XCUIElementTypeStaticText[@name="서비스 이용약관"]',
  );
  try {
    let result = await driver.$(
      '//XCUIElementTypeStaticText[@name="개인정보 처리방침"]',
    );
    console.log(Boolean(result));
    if (result) {
      console.log(`[개인정보 처리방침] 버튼 노출`, PASS);
      logToFile(`[개인정보 처리방침] 노출`, PASS);
    }
  } catch (error) {
    console.log(error);
    // await downtopScroll(driver);
    await findElement(
      driver,
      '[개인정보 처리방침] 버튼',
      '//XCUIElementTypeStaticText[@name="개인정보 처리방침"]',
    );
    if (error.message.includes('still not')) {
      console.log(`[개인정보 처리방침] 버튼 노출`, FAIL);
      logToFile(`[개인정보 처리방침] 버튼 노출`, FAIL);
      await driver.saveScreenshot(
        `/Users/parkdojun/Documents/Seoltab3.0 Automation/bugImage/[개인정보 처리방침] 버튼 노출 ${FAIL}(${formattedDate}).png`,
      );
    } else {
      console.log(`[개인정보 처리방침] 노출 확인 테스트 중 오류 발생`, BLOCK);
      logToFile(`[개인정보 처리방침] 노출 확인 테스트 중 오류 발생`, BLOCK);
    }
  } finally {
    driver.pause(500);
  }
  await clickElementForTarget(
    driver,
    '[내 수강권 확인하기] 버튼',
    '(//XCUIElementTypeLink[@name="내 수강권 확인하기"])[1]',
    '"마이페이지_수강 정보"',
    '~이용중인 상품',
  );
  await clickElement(
    driver,
    '"기본정보" 탭',
    '//XCUIElementTypeStaticText[@name="기본 정보"]',
  );
  await clickElementForTarget(
    driver,
    '[비밀번호 변경] 버튼',
    '~비밀번호 변경',
    '"비밀번호 변경"',
    '~현재 비밀번호',
  );
  await clickElement(
    driver,
    '[<]',
    '//XCUIElementTypeOther[@name="설탭 로그인"]/XCUIElementTypeButton',
  );
  await clickElementForTarget(
    driver,
    '[공지사항] 버튼',
    '(//XCUIElementTypeLink[@name="공지사항"])[1]',
    '"공지사항"',
    '//XCUIElementTypeStaticText[@name="공지사항"]',
  );
  await driver.touchAction({
    action: 'tap',
    x: 42,
    y: 10,
  });
  await clickElementForTarget(
    driver,
    '[고객센터] 버튼',
    '(//XCUIElementTypeLink[@name="고객센터"])[1]',
    '"고객센터" 화면',
    '(//XCUIElementTypeOther[@name="설탭 매니저"])[1]',
  );
  await driver.touchAction({
    action: 'tap',
    x: 42,
    y: 10,
  });
  await clickElementForTarget(
    driver,
    '[서비스 이용약관] 버튼',
    '~서비스 이용약관',
    '"서비스 이용약관"',
    '~[필수] 서비스 이용약관, 탭',
  );
  await driver.touchAction({
    action: 'tap',
    x: 42,
    y: 10,
  });

  await clickElementForTarget(
    driver,
    '[개인정보 처리방침] 버튼',
    '(//XCUIElementTypeLink[@name="개인정보 처리방침"])[1]',
    '"개인정보 처리방침"',
    '~[필수] 개인정보 처리방침, 탭',
  );
  await driver.touchAction({
    action: 'tap',
    x: 42,
    y: 10,
  });
  // "마이페이지" 화면 [설정] 버튼 클릭 시 "앱 설정" 화면 진입
  await driver.touchAction({
    action: 'tap',
    x: 769,
    y: 51,
  });
};

let teacherMypage = async (driver) => {
  console.log('선생님 코드 미작성');
  console.log('선생님 코드 미작성');
  console.log('선생님 코드 미작성');
  console.log('선생님 코드 미작성');
};
