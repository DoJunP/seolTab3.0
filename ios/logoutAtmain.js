export let logoutAtmain = async (driver) => {
  await driver.$('~TouchableOpacity_account_icon_0').click();
  await driver.$('~마이페이지').waitForDisplayed();
  await driver.touchAction({
    action: 'tap',
    x: 769,
    y: 51,
  });
  let logoutBtn = await driver.$('~로그아웃');
  await logoutBtn.waitForDisplayed();
  await logoutBtn.click();
};
