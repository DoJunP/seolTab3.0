import fs from 'fs';

const logFilePath = 'logs.txt';
export const PASS = '✅';
export const FAIL = '❌';
export const BLOCK = '🚫';
export const BLANK = ' '; // 빈 문자열로 수정

// 로그를 파일에 추가하는 함수
export function logToFile(message, result) {
  const timestamp = new Date();
  const logMessage = `${timestamp}: ${message} ${result}\n`;

  // 파일에 로그 추가
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('로그를 파일에 추가하는 동안 오류 발생:', err);
    }
  });
}
