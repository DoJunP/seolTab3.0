import { findElement, clickElement } from '../common.js';

export const logIn = async (driver) => {
  // 로그인 화면 진입 시 "알림 권한" 팝업 발생
  await findElement(
    driver,
    '알림 권한 팝업',
    '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]',
  );
  // 로그인 화면 "알림 권한" 팝업 [허용] 버튼 클릭 시 "알림 권한" 팝업 닫힘
  await clickElement(
    driver,
    '[허용] 버튼',
    '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]',
  );

  // "로그인" 화면 내 "이메일" 인풋박스 노출

  // "로그인" 화면 내 "비밀번호" 인풋박스 노출

  // "로그인" 화면 내 [로그인] 버튼 노출

  // "로그인" 화면 내 [회원가입] 버튼 노출

  // "로그인" 화면 내 [ID/PW 찾기] 버튼 노출
};
