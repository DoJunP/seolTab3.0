import React, { useState, useEffect } from 'react';
import { ResponsivePie } from '@nivo/pie';
import { Table, Tab, Tabs } from 'react-bootstrap';

function FileLoader() {
  const [fileContent, setFileContent] = useState(null);
  const [passCount, setPassCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [blockCount, setBlockCount] = useState(0);
  const [pieChart, setPieChart] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // 선택된 파일 객체 가져오기

    if (file) {
      const reader = new FileReader(); // FileReader 객체 생성

      reader.onload = function (e) {
        // 파일 읽기가 완료되었을 때 실행되는 함수
        const contents = e.target.result; // 파일 내용을 가져옴
        setFileContent(contents); // 파일 내용을 상태에 저장

        // 파일 내용에서 ✅, ❌, 🚫 개수를 세고 각각의 상태에 저장
        const pass = (contents.match(/✅/g) || []).length;
        setPassCount(pass);
        const fail = (contents.match(/❌/g) || []).length;
        setFailCount(fail);
        const block = (contents.match(/🚫/g) || []).length;
        setBlockCount(block);
        setPieChart(true);
      };

      reader.readAsText(file); // 파일을 텍스트로 읽음
    } else {
      console.error('파일이 선택되지 않았습니다.');
    }
  };

  const pieData = [
    { id: 'Pass', value: passCount },
    { id: 'Fail', value: failCount },
    { id: 'Block', value: blockCount },
  ];

  return (
    <div className="container">
      <div>
        <div className="parent">
          <div className="left-box">
            <Table>
              <thead>
                <tr>
                  <th>Result</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {pieData.map((a, i) => {
                  return (
                    <tr>
                      <td>{pieData[i].id}</td>
                      <td>{pieData[i].value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <input type="file" onChange={handleFileChange} />
          </div>
          <div className="right-box">
            {pieChart == true ? (
              <div style={{ height: '350px' }}>
                <ResponsivePie
                  data={pieData}
                  margin={{ top: 40, bottom: 40 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  activeOuterRadiusOffset={8}
                  colors={{ scheme: 'paired' }}
                  borderColor={{
                    from: 'color',
                    modifiers: [['darker', 0.6]],
                  }}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: 'color' }}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor="#333333"
                  defs={[
                    {
                      id: 'dots',
                      type: 'patternDots',
                      background: 'inherit',
                      color: 'rgba(255, 255, 255, 0.3)',
                      size: 4,
                      padding: 1,
                      stagger: true,
                    },
                    {
                      id: 'lines',
                      type: 'patternLines',
                      background: 'inherit',
                      color: 'rgba(255, 255, 255, 0.3)',
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10,
                    },
                    {
                      id: 'redLines',
                      type: 'patternLines',
                      background: 'rgba(255, 200, 200, 0.3)',
                      color: 'rgba(255, 0, 0, 1)',
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10,
                    },
                  ]}
                  fill={[
                    {
                      match: {
                        id: 'Fail',
                      },
                      id: '',
                    },
                    {
                      match: {
                        id: 'Block',
                      },
                      id: '',
                    },
                  ]}
                  legends={[
                    {
                      anchor: 'right',
                      direction: 'column',
                      justify: false,
                      translateX: 140,
                      translateY: 0,
                      itemsSpacing: 2,
                      itemWidth: 60,
                      itemHeight: 14,
                      itemTextColor: '#999',
                      itemDirection: 'left-to-right',
                      itemOpacity: 1,
                      symbolSize: 14,
                      symbolShape: 'circle',
                    },
                  ]}
                />
              </div>
            ) : (
              <p style={{ textAlign: 'center', marginTop: '25%' }}>No result</p>
            )}
          </div>
        </div>
        <div className="footer"></div>
      </div>
      <Tabtab
        passCount={passCount}
        failCount={failCount}
        blockCount={failCount}
        fileContent={fileContent}
      />
    </div>
  );
}

function Tabtab(props) {
  const [key, setKey] = useState('Pass Case');
  let [lines, setLines] = useState('');
  let [passLines, setPassLines] = useState([]);
  let [failLines, setFailLines] = useState([]);
  let [blockLines, setBlockLines] = useState([]);

  useEffect(() => {
    if (props.fileContent !== null) {
      const linesArray = props.fileContent.split('\n');
      setLines(linesArray);
      const filteredPass = linesArray.filter((line) => line.includes('✅'));
      const filteredFail = linesArray.filter((line) => line.includes('❌'));
      const filteredBlock = linesArray.filter((line) => line.includes('🚫'));
      setPassLines(filteredPass);
      setFailLines(filteredFail);
      setBlockLines(filteredBlock);
    }
  }, [props.fileContent]);

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="Pass Case" title="Pass Case" style={{ textAlign: 'left' }}>
        {passLines.length == 0 && <p>자동화 결과를 불러와 주세요</p>}
        {passLines.length != 0 &&
          passLines.map((a, i) => {
            return (
              <div style={{ padding: '5px' }}>
                {i + 1} : {passLines[i]}
              </div>
            );
          })}
      </Tab>
      <Tab eventKey="Fail Case" title="Fail Case" style={{ textAlign: 'left' }}>
        {failLines.length == 0 && <p>자동화 결과를 불러와 주세요</p>}
        {failLines.length != 0 &&
          failLines.map((a, i) => {
            return (
              <div style={{ padding: '5px' }}>
                {i + 1} : {failLines[i]}
              </div>
            );
          })}
      </Tab>
      <Tab
        eventKey="Block Case"
        title="Block Case"
        style={{ textAlign: 'left' }}
      >
        {blockLines.length == 0 && <p>자동화 결과를 불러와 주세요</p>}
        {blockLines.length != 0 &&
          blockLines.map((a, i) => {
            return (
              <div style={{ padding: '5px' }}>
                {i + 1} : {blockLines[i]}
              </div>
            );
          })}
      </Tab>
      <Tab
        eventKey="contact"
        title="Contact"
        style={{ textAlign: 'left' }}
        disabled
      >
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default FileLoader;
