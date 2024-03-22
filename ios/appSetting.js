import {
  clickElement,
  clickElementForTarget,
  findElement,
  inputValue,
} from '../common.js';

export let appSettings = async (driver) => {
  // 네비게이션 바 [<] 버튼 노출
  await findElement(driver, '[<] 버튼', '~TouchableOpacity_backBtn');
  // 네비게이션 바 “앱 설정” 화면명 노출
  await findElement(driver, '"앱 설정" 화면명', '~header_title');
  // “앱 설정” 화면 내 [푸시 알림] 버튼 노출
  await findElement(
    driver,
    '[푸시 알림] 버튼',
    '(//XCUIElementTypeOther[@name="푸시 알림 푸시 알림을 켜고 중요한 알림을 실시간으로 받아 보세요. 기기 설정"])[2]',
  );
  // “앱 설정” 화면 내 [권한 허용] 버튼 노출
  await findElement(
    driver,
    '[권한 허용]',
    '(//XCUIElementTypeOther[@name="권한 허용 설탭 서비스 이용에 필요한 필수 기능을 허용해 주세요. 기기 설정"])[2]',
  );
  // “앱 설정” 화면 내 “마케팅 수신 동의” 항목 노출
  await findElement(
    driver,
    '"마케팅 수신 동의" 항목',
    '(//XCUIElementTypeOther[@name="마케팅 수신 동의 동의 시 개인 정보 마케팅 활용에도 동의하시게 됩니다. 마케팅 정보 수신 동의 2024.03.15"])[1]',
  );
  // “앱 설정” 화면 내 [학습코스 사용법] 버튼 노출
  await findElement(
    driver,
    '[학습코스 사용법] 버튼',
    '(//XCUIElementTypeOther[@name="학습코스 사용법"])[1]',
  );
  //  “앱 설정” 화면 내 [오류 제보] 버튼 노출
  await findElement(
    driver,
    '[오류 제보] 버튼',
    '(//XCUIElementTypeOther[@name="오류 제보"])[1]',
  );
  // “앱 설정” 화면 내 [캐시 데이터 삭제] 버튼 노출
  await findElement(
    driver,
    '[캐시 데이터 삭제] 버튼',
    '(//XCUIElementTypeOther[@name="캐시 데이터 삭제"])[3]',
  );
  // “앱 설정” 화면 내 [푸시 알림] 버튼 클릭 시 “기기 설정” 화면 진입
  await clickElementForTarget(
    driver,
    '[푸시 알림] 버튼',
    '(//XCUIElementTypeOther[@name="푸시 알림 푸시 알림을 켜고 중요한 알림을 실시간으로 받아 보세요. 기기 설정"])[2]',
    '단말 "기기 설정" 화면',
    '//XCUIElementTypeStaticText[@name="알림"]',
  );
  await driver.touchAction({
    action: 'tap',
    x: 42,
    y: 10,
  });
  // “앱 설정” 화면 내 [권한 허용] 버튼 클릭 시 “기기 설정” 화면 진입
  await clickElementForTarget(
    driver,
    '[권한 허용]',
    '(//XCUIElementTypeOther[@name="권한 허용 설탭 서비스 이용에 필요한 필수 기능을 허용해 주세요. 기기 설정"])[2]',
    '단말 "기기 설정" 화면',
    '//XCUIElementTypeStaticText[@name="사진"]',
  );
  await driver.touchAction({
    action: 'tap',
    x: 42,
    y: 10,
  });
  // “앱 설정” 화면 내 [학습코스 사용법] 버튼 클릭 시 ““ 화면 진입
  await clickElementForTarget(
    driver,
    '[학습코스 사용법] 버튼',
    '(//XCUIElementTypeOther[@name="학습코스 사용법"])[1]',
    '"학습코스 사용법" 화면',
    '//XCUIElementTypeStaticText[@name="학습코스 사용법"]',
  );
  await driver.touchAction({
    action: 'tap',
    x: 42,
    y: 10,
  });
  // “앱 설정” 화면 내 [오류 제보] 버튼 클릭 시 “오류 제보” 화면 진입
  await clickElementForTarget(
    driver,
    '[오류 제보] 버튼',
    '(//XCUIElementTypeOther[@name="오류 제보"])[1]',
    '"오류 제보" 화면',
    'Null',
  );
  // 임시용 코드
  await clickElement(
    driver,
    '[닫기] 버튼',
    '(//XCUIElementTypeOther[@name="닫기"])[2]',
  );
  // “앱 설정” 화면 내 [캐시 데이터 삭제] 버튼 클릭 시 “캐시 데이터 삭제” 모달 발생
  await clickElementForTarget(
    driver,
    '[캐시 데이터 삭제] 버튼',
    '(//XCUIElementTypeOther[@name="캐시 데이터 삭제"])[3]',
    '"캐시 데이터를 삭제하시겠습니까?" 모달',
    '~캐시 데이터를 삭제하시겠습니까?',
  );
  await clickElement(
    driver,
    '"캐시 데이터를 삭제하시겠습니까?" 모달 내 [삭제] 버튼',
    '~삭제',
  );
  await clickElement(
    driver,
    '"앱 설정" 화면 [<] 버튼',
    '~TouchableOpacity_backBtn',
  );
  await clickElement(
    driver,
    '"마이페이지" 화면 [<] 버튼',
    '//XCUIElementTypeOther[@name="설탭 로그인"]/XCUIElementTypeButton',
  );
};

// 잠시 보관
let reporting = async (driver) => {
  // 네비게이션 바 [<] 버튼 노출
  await findElement(driver, '[<] 버튼', '~TouchableOpacity_backBtn');
  // “그 외 문제” 영역 노출
  await findElement(driver, '"그 외 문제" 영역', '~그 외 문제');
  // “오류 내용” 영역 노출
  await findElement(driver, '"오류 내용" 영역', '~오류 내용');
  // “오류 내용” 영역 내 인풋박스 임의 입력 시 입력값 노출
  await inputValue(
    driver,
    '"오류 내용" 영역 인풋박스',
    '~text_input_error_review_detail',
    '테스트입니다테스트입니다테스트입니다테스트입니다테스트입니다테스트입니다테스트입니다테스트입니다테스트입니다',
  );
  // “사진 첨부” 영역 노출
  await findElement(driver, '"사진 첨부" 영역', '~사진 첨부 (선택)');
  // “사진 첨부” 영역 내 [+] 버튼 노출
  await findElement(
    driver,
    '"사진 첨부" 영역 [+] 버튼',
    '~error_report_add_image_button',
  );
  // “사진 첨부” 영역 내 [+] 버튼 클릭 시 단말 “사진” 레이어 발생
  await clickElementForTarget(
    driver,
    '"사진 첨부" 영역 [+] 버튼',
    '~error_report_add_image_button',
    '"사진"',
    '~추가',
  );
  // “사진” 레이어에서 임의 사진 클릭 후 [추가] 버튼 클릭 시 사진 추가됨
  await driver.touchAction({
    action: 'tap',
    x: 338,
    y: 197,
  });
  await driver.pause(1000);
  await clickElement(driver, '[추가] 버튼', '~추가');
  // “오류 제보” 화면 내 [제출] 버튼 클릭 시 ““ 화면 진입
  await clickElementForTarget(
    driver,
    '"오류 제보" 화면 [제출] 버튼',
    '~error_report_submit_button_text',
    '"메인"',
    '~TouchableOpacity_account_icon_0',
  );
  // "오류 제보"
};
