import { clickElementForTarget, findElement } from '../common.js';

export let allowPermission = async (driver) => {
  await findElement(driver, "'앱 접근 권한 안내' 화면명", '~앱 접근 권한 안내');
  await findElement(driver, "'사진 파일' 항목", '~사진 파일');
  await findElement(driver, "'카메라' 항목", '~카메라');
  await findElement(driver, "'마이크' 항목", '~마이크');
  await findElement(driver, "'알림' 항목", '~알림');
  await findElement(driver, '[확인] 버튼', '~확인');
  await clickElementForTarget(
    driver,
    '[확인] 버튼',
    '~확인',
    "'사진 권한'",
    '~학습 자료 또는 채팅방 이미지 업로드를 위해 필요',
  );
  await clickElementForTarget(
    driver,
    '[모든 사진에 대한 접근 허용] 버튼',
    '~모든 사진에 대한 접근 허용',
    "'카메라 권한'",
    '~교재 인증 및 과외방, 채팅방 이미지 업로드를 위해 필요',
  );
  await clickElementForTarget(
    driver,
    "'카메라' 권한 모달 내 [확인] 버튼",
    '~확인',
    '마이크 권한',
    '~과외방에서 과외를 진행하기 위해 필요',
  );
  await clickElementForTarget(
    driver,
    "'마이크' 권한 모달 내 [확인] 버튼",
    '~확인',
    '메인',
    '~TouchableOpacity_root_tab_0',
  );
};
