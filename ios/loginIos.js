import { PASS, logToFile, BLOCK, FAIL } from '../automationResult.js';
import { findElement, inputValue, clickElementForTarget } from '../common.js';

export let logIn = async (driver) => {
  // "로그인" 화면 내 "이메일" 인풋박스 노출
  await findElement(driver, `'이메일' 인풋박스`, '~TextInput_email');
  // "로그인" 화면 내 "비밀번호" 인풋박스 노출
  await findElement(driver, `'비밀번호' 인풋박스`, '~TextInput_password');
  // "로그인" 화면 내 [로그인] 버튼 노출
  await findElement(driver, '[로그인] 버튼', '~TouchableOpacity_Submit');
  // "로그인" 화면 내 [회원가입] 버튼 노출
  await findElement(driver, '[회원가입] 버튼', '~회원가입');
  // "로그인" 화면 내 [ID/PW 찾기] 버튼 노출
  await findElement(driver, '[ID/PW 찾기] 버튼', '~ID/PW 찾기');
  // "로그인" 화면 내 [회원가입] 버튼 클릭 시 "회원가입" 웹 링크 랜딩
  await clickElementForTarget(
    driver,
    '[회원가입] 버튼',
    '~회원가입',
    '"회원가입"',
    '~가입 유형 선택',
  );
  await driver.touchAction({
    action: 'tap',
    x: 42,
    y: 10,
  });
  // "로그인" 화면 내 [ID/PW 찾기] 버튼 클릭 시 "아이디/비밀번호 찾기" 웹 링크 랜딩
  await clickElementForTarget(
    driver,
    '[ID/PW 찾기] 버튼',
    '~ID/PW 찾기',
    "'아이디/비밀번호 찾기'",
    '~인증번호 전송',
  );
  await driver.touchAction({
    action: 'tap',
    x: 42,
    y: 10,
  });
  // "로그인" 화면 내 "이메일" 인풋박스에 임의 입력
  await inputValue(
    driver,
    `"이메일" 인풋박스`,
    '~TextInput_email',
    'louis@onuii.com',
  );
  // "로그인" 화면 내 "이메일" 인풋박스에 테스트 계정 입력
  await inputValue(
    driver,
    `"이메일" 인풋박스`,
    '~TextInput_email',
    'martin@seoltab.com',
  );
  // "로그인" 화면 내 "비밀번호" 인풋박스에 임의 입력
  await inputValue(
    driver,
    `"비밀번호" 인풋박스`,
    '~TextInput_password',
    'asdfasdf',
  );
  // "로그인" 화면 내 [로그인] 버튼 클릭 시 "앱 접근 권한 안내" 화면 진입
  //   await clickElementForTarget(
  //     driver,
  //     '[로그인] 버튼',
  //     '~TouchableOpacity_Submit',
  //     "'앱 접근 권한 안내'",
  //     '~앱 접근 권한 안내',
  //   );
  /* "로그인" 화면 내 [로그인] 버튼 클릭 시 "앱 접근 권한 안내" 화면 진입
    "앱 접근 권한 안내" 요소를 찾지 못한 경우 메인 화면의 요소를 찾아야 함, 
    이때의 케이스는 
    모든 권한이 설정된 경우. "로그인" 화면 내 [로그인] 버튼 클릭 시 "메인" 화면 진입
    "앱 접근 권한 안내" 요소를 찾은 경우 permission.js의 코드를 실행해야 한다.
  */
  //   try {
  //     await driver.$('~TouchableOpacity_Submit').click();
  //     await driver
  //       .$('~TouchableOpacity_account_icon_0')
  //       .waitForDisplayed({ timeout: 10000, interval: 2000 });
  //     console.log(
  //       `'로그인' 화면 내 [로그인] 버튼 클릭 시 '메인' 화면 진입`,
  //       PASS,
  //     );
  //     logToFile(`'로그인' 화면 내 [로그인] 버튼 클릭 시 '메인' 화면 진입`, PASS);
  //   } catch (error) {
  //     console.log(error);
  //     if (
  //       error.message.includes(
  //         '("~TouchableOpacity_account_icon_0") still not displayed',
  //       )
  //     ) {
  //       try {
  //         await driver
  //           .$('~앱 접근 권한 안내')
  //           .waitForDisplayed({ timeout: 10000, interval: 2000 });
  //         console.log(
  //           `'로그인' 화면 내 [로그인] 버튼 클릭 시 '앱 접근 권한 안내' 화면 진입`,
  //           PASS,
  //         );
  //         logToFile(
  //           `'로그인' 화면 내 [로그인] 버튼 클릭 시 '앱 접근 권한 안내' 화면 진입`,
  //           PASS,
  //         );
  //       } catch (error) {
  //         console.log(error);
  //         if (
  //           error.message.includes('("~앱 접근 권한 안내") still not displayed')
  //         ) {
  //           console.log(
  //             `'로그인' 화면 내 [로그인] 버튼 클릭 시 '앱 접근 권한 안내' 화면 진입`,
  //             FAIL,
  //           );
  //           logToFile(
  //             `'로그인' 화면 내 [로그인] 버튼 클릭 시 '앱 접근 권한 안내' 화면 진입`,
  //             FAIL,
  //           );
  //         } else {
  //           console.log(
  //             `'로그인' 화면 내 [로그인] 버튼 클릭 시 '메인' 화면 진입`,
  //             FAIL,
  //           );
  //           logToFile(
  //             `'로그인' 화면 내 [로그인] 버튼 클릭 시 '메인' 화면 진입`,
  //             FAIL,
  //           );
  //         }
  //       }
  //     } else {
  //       console.log(
  //         `'로그인' 화면 내 [로그인] 버튼 클릭 테스트 중 오류 발생`,
  //         BLOCK,
  //       );
  //       logToFile(
  //         `'로그인' 화면 내 [로그인] 버튼 클릭 시 '메인' 화면 진입`,
  //         BLOCK,
  //       );
  //     }
  //   } finally {
  //     driver.pause(1000);
  //   }

  try {
    await driver.$('~TouchableOpacity_Submit').click();
    await driver
      .$('~앱 접근 권한 안내')
      .waitForDisplayed({ timeout: 10000, interval: 2000 });
    console.log(
      `'로그인' 화면 내 [로그인] 버튼 클릭 시 '앱 접근 권한 안내' 화면 진입`,
      PASS,
    );
    logToFile(
      `'로그인' 화면 내 [로그인] 버튼 클릭 시 '앱 접근 권한 안내' 화면 진입`,
      PASS,
    );
  } catch (error) {
    if (error.message.includes('("~앱 접근 권한 안내") still not displayed')) {
      try {
        await driver
          .$('~TouchableOpacity_account_icon_0')
          .waitForDisplayed({ timeout: 10000, interval: 2000 });
        console.log(
          `'로그인' 화면 내 [로그인] 버튼 클릭 시 '메인' 화면 진입`,
          PASS,
        );
        logToFile(
          `'로그인' 화면 내 [로그인] 버튼 클릭 시 '메인' 화면 진입`,
          PASS,
        );
      } catch (error) {
        if (
          error.message.includes(
            '("~TouchableOpacity_account_icon_0") still not displayed',
          )
        ) {
          console.log(
            `'로그인' 화면 내 [로그인] 버튼 클릭 시 '메인' 화면 진입`,
            FAIL,
          );
          logToFile(
            `'로그인' 화면 내 [로그인] 버튼 클릭 시 '메인' 화면 진입`,
            FAIL,
          );
          await driver.saveScreenshot(
            `./bugImage/"로그인" 화면 내 [로그인] 버튼 클릭 시 "메인" 화면 진입 ${FAIL}(${formattedDate}).png`,
          );
        } else {
          console.log(
            `'로그인' 화면 내 [로그인] 버튼 클릭 시 '앱 접근 권한 안내' 화면 진입`,
            FAIL,
          );
          logToFile(
            `'로그인' 화면 내 [로그인] 버튼 클릭 시 '앱 접근 권한 안내' 화면 진입`,
            FAIL,
          );
          await driver.saveScreenshot(
            `./bugImage/"로그인" 화면 내 [로그인] 버튼 클릭 시 "앱 접근 권한 안내" 화면 진입 ${FAIL}(${formattedDate}).png`,
          );
        }
      }
    } else {
      console.log(
        `'로그인' 화면 내 [로그인] 버튼 클릭 테스트 중 오류 발생`,
        BLOCK,
      );
      logToFile(
        `'로그인' 화면 내 [로그인] 버튼 클릭 시 '메인' 화면 진입`,
        BLOCK,
      );
    }
  } finally {
    driver.pause(1000);
  }
};
