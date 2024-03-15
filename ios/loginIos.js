import { BLANK, logToFile } from '../automationResult.js';
import {
  findElement,
  clickElement,
  inputValue,
  clickElementForTarget,
} from '../common.js';

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
    '"회원가입" 화면',
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
    "'아이디/비밀번호 찾기' 화면",
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
  // "로그인" 화면 내 "비밀번호" 인풋박스에 임의 입력
  await inputValue(
    driver,
    `"비밀번호" 인풋박스`,
    '~TextInput_password',
    'asdfasdf',
  );

  // commit test
};
