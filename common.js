import { BLANK, BLOCK, FAIL, PASS, logToFile } from './automationResult.js';

let timeStamp = new Date();
let formattedDate = `${timeStamp.getFullYear()}-${String(
  timeStamp.getMonth() + 1,
).padStart(2, '0')}-${String(timeStamp.getDate()).padStart(2, '0')}`;

/* 
화면 내에서 요소를 찾을 때 사용한다
요소를 정상적으로 찾았을 때, PASS
요소를 찾지 못했을 때, FAIL
예상치 못한 오류 발생 시, BLOCK
*/
export let findElement = async (driver, name, path) => {
  try {
    await driver.$(path);
    console.log(`${name} 노출`, PASS);
    logToFile(`${name} 노출`, PASS);
  } catch (error) {
    console.log(error);
    if (error.message.includes('still not')) {
      console.log(`${name} 노출`, FAIL);
      logToFile(`${name} 노출`, FAIL);
      await driver.saveScreenshot(
        `./bugImage/${name} 노출 ${FAIL}(${formattedDate}).png`,
      );
    } else {
      console.log(`${name} 노출 확인 테스트 중 오류 발생`, BLOCK);
      logToFile(`${name} 노출 확인 테스트 중 오류 발생`, BLOCK);
    }
  } finally {
    driver.pause(500);
  }
};

/*
클릭 이벤트에 사용한다
정상적으로 클릭하면 PASS
클릭하지 못했을 때, FAIL
예상치 못한 오류 발생 시, BLOCK
*/
export let clickElement = async (driver, name, path) => {
  try {
    await driver.$(`${path}`).click();
    console.log(`${name} 클릭`, PASS);
  } catch (error) {
    if (error.message.includes("Can't call click")) {
      console.log(`${name} 클릭`, FAIL);
    } else {
      console.log(`${name} 클릭 테스트 중 오류 발생`, BLOCK);
    }
  } finally {
    driver.pause(500);
  }
};

/*
클릭 이벤트를 발생 시키고, 타켓 요소를 찾을 때 사용한다. 화면 전환이나 모달 발생 확인용으로 사용
클릭이 성공하고, 타켓 요소를 찾았을 때, PASS
클릭할 요소를 찾지 못했을 때, FAIL
클릭 후 타켓 요소를 찾지 못했을 때, FAIL
예상치 못한 오류 발생 시 BLOCK
*/
export let clickElementForTarget = async (
  driver,
  clickElementName,
  clickElementPath,
  targetElementName,
  targetElementPath,
) => {
  try {
    await driver.$(`${clickElementPath}`).click();
    await driver
      .$(targetElementPath)
      .waitForDisplayed({ timeout: 10000, interval: 2000 });
    console.log(
      `${clickElementName} 클릭 시 ${targetElementName} 화면/모달 진입/발생`,
      PASS,
    );
    logToFile(
      `${clickElementName} 클릭 시 ${targetElementName} 화면/모달 진입/발생`,
      PASS,
    );
  } catch (error) {
    console.log(error);
    if (error.message.includes("because element wasn't found")) {
      console.log(
        `${clickElementName} 노출되지 않아 케이스 테스트 불가`,
        BLOCK,
      );
      logToFile(`${clickElementName} 노출되지 않아 케이스 테스트 불가`, BLOCK);
    } else if (error.message.includes('still')) {
      console.log(
        `${clickElementName} 클릭 시 ${targetElementName} 화면\\모달 진입/발생`,
        FAIL,
      );
      logToFile(
        `${clickElementName} 클릭 시 ${targetElementName} 화면\\모달 진입/발생`,
        FAIL,
      );
      await driver.saveScreenshot(
        `./bugImage/${clickElementName} 클릭 시 ${targetElementName} 화면 or 모달 진입 or 발생 ${FAIL}(${formattedDate}).png`,
      );
    } else {
      console.log(
        `${clickElementName} 클릭 시 ${targetElementName} 화면/모달 진입/발생 테스트 중 오류 발생`,
        BLOCK,
      );
      logToFile(
        `${clickElementName} 클릭 시 ${targetElementName} 화면/모달 진입/발생 테스트 중 오류 발생`,
        BLOCK,
      );
    }
  } finally {
    driver.pause(500);
  }
};

/*
인풋박스에 값을 넣을 때 사용
정상적으로 값을 넣었을 때 PASS
값을 넣지 못했을 때, FAIL
예상치 못한 오류 발생 시, BLOCK
*/
export let inputValue = async (driver, name, path, value) => {
  try {
    await driver.$(`${path}`).setValue(value);
    console.log(`${name}에 ${value} 입력 시 노출`, PASS);
    logToFile(`${name}에 ${value} 입력 시 노출`, PASS);
  } catch (error) {
    console.log(error);
    if (error.message.includes("Can't call setValue")) {
      console.log(`${name}에 ${value} 입력 시 노출`, FAIL);
      logToFile(`${name}에 ${value} 입력 시 노출`, FAIL);
      await driver.saveScreenshot(
        `./bugImage/${name}에 ${value} 입력 시 노출 ${FAIL}(${formattedDate}).png`,
      );
    } else {
      console.log(`${name}에 ${value} 입력 시 노출 테스트 중 오류 발생`, BLOCK);
      logToFile(`${name}에 ${value} 입력 시 노출 테스트 중 오류 발생`, BLOCK);
    }
  } finally {
    driver.pause(500);
  }
};

// 위에서 아래 스크롤
export let topdownScroll = async (driver) => {
  await driver.touchAction([
    { action: 'press', x: 558, y: 763 },
    { action: 'wait', ms: 2000 },
    { action: 'moveTo', x: 555, y: 230 },
    'release',
  ]);
};

// 아래에서 위로 스크롤
export let downtopScroll = async (driver) => {
  await driver.touchAction([
    { action: 'press', x: 558, y: 230 },
    { action: 'wait', ms: 2000 },
    { action: 'moveTo', x: 555, y: 763 },
    'release',
  ]);
};

// commit
