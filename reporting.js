import { readFile } from 'fs/promises';

const filePath = 'logs.txt';

(async () => {
  try {
    const data = await readFile(filePath, 'utf8');
    const logs = data.split('\n'); // 각 로그 항목을 배열로 분할

    // 각 날짜별 ✅ 개수를 담을 객체 생성
    const countsByDate = {};

    // 정규표현식을 사용하여 날짜와 ✅ 개수 추출
    const dateRegex = /\w{3} (\w{3} \d{1,2} \d{4})/;
    logs.forEach((log) => {
      const matchDate = log.match(dateRegex);
      if (matchDate && matchDate[1]) {
        const date = matchDate[1];
        const matchCheckmark = log.match(/✅/g);
        const count = matchCheckmark ? matchCheckmark.length : 0;
        if (!countsByDate[date]) {
          countsByDate[date] = count;
        } else {
          countsByDate[date] += count;
        }
      }
    });

    // 결과 출력
    for (const date in countsByDate) {
      console.log(`${date}: ${countsByDate[date]}개`);
    }
  } catch (err) {
    console.error('파일을 읽는 중 오류가 발생했습니다:', err);
  }
})();
