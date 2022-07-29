import logo from './logo.svg';
import './App.css';
import parse from 'html-react-parser'




function App() 
{
    let jsonData = {
        TestText: '테스트 텍스트~',
        TestLiterals: '리터럴 변환',
        TestInt: 124,
    }

    window.TestCall = function (event, param)
    {
        alert("'TestCall'에서 호출됨");
    }   

    let sTest1 = '<button onClick={TestCall}>버튼 이벤트 호출({TestText})</button>';
    let sTest2 = '<div><button onclick="alert(\'hello\')">JS 함수</button><button onclick="{TestCall}">리액트 함수</button></div>';
    let sTest3 = '<div><button onclick="alert(\'hello\')">JS 함수</button><button onclick="{TestCall}">리액트 함수</button>${TestLiterals}</div>';

    let reactsTest1 = "";
    let reactsTest2 = "";
    let reactsTest2_2 = "";
    let reactsTest3 = "";

    reactsTest1
        = sTest1.replaceReact(jsonData);
    console.log("--- reactsTest1  ---");
    console.log(reactsTest1);

    reactsTest2
        = parse(sTest2
            , {
                replace: domNode =>
                {
                    if (domNode.name === 'button')
                    {//버튼 이벤트 처리
                        let sFuncName = domNode.attribs.onclick;

                        delete domNode.attribs.onclick;

                        return (
                            <button
                                {...domNode.attribs}
                                onClick={() => { Function('"use strict";return (' + sFuncName + ')')(); }}
                            >{domNode.children[0].data}</button>
                        );
                    }
                }
            });

    console.log("reactsTest2 : ");
    console.log(reactsTest2);

    

    reactsTest2_2
        = parse(sTest2
            , {
                replace: domNode =>
                {
                    if (domNode.name === 'button')
                    {
                        console.log(domNode);
                        let temp = domNode.attribs.onclick;
                        //기본 빈 함수
                        let funcCall = function (event, param) { };

                        //기존 로드의 클릭이벤트 제거
                        delete domNode.attribs.onclick;

                        if ("{" === temp.substring(0, 1)
                            && "}" === temp.substring(temp.length - 1))
                        {//앞뒤로 있는게 중괄호다 = 리액트 함수

                            //리액트 함수로 취급한다.
                            temp = temp.split(/{|}/g)[1];
                            //클래스일때
                            //funcCall = this[temp];
                            //자바스크립트일때
                            funcCall = window[temp];
                        }
                        else
                        {//자바스크립트
                            funcCall = function (event, param)
                            {
                                Function('"use strict";return (' + temp + ')')(event, param);
                            };
                        }

                        return (
                            <button
                                {...domNode.attribs}
                                onClick=
                                {(event, param) =>
                                {
                                    funcCall(event, param);
                                }}
                            >{domNode.children[0].data}</button>
                        );
                    }
                }
            });
    console.log("reactsTest2_2 : ");
    console.log(reactsTest2_2);




    //리터럴 문자 변환
    reactsTest3 = sTest3.interpolate(jsonData);
    console.log("reactsTest3 -interpolate : " + reactsTest3);
    //리액트 변수 변환
    reactsTest3 = reactsTest3.replaceReact(jsonData);
    console.log("reactsTest3 -replaceReact : " + reactsTest3);

    reactsTest3
        = parse(reactsTest3
            , {
                replace: domNode =>
                {
                    if (domNode.name === 'button')
                    {
                        console.log(domNode);
                        let temp = domNode.attribs.onclick;
                        //기본 빈 함수
                        let funcCall = function (event, param) { };

                        delete domNode.attribs.onclick;

                        if ("{" === temp.substring(0, 1)
                            && "}" === temp.substring(temp.length - 1))
                        {//앞뒤로 있는게 중괄호다

                            //리액트 함수로 취급한다.
                            temp = temp.split(/{|}/g)[1];
                            //클래스일때
                            //funcCall = this[temp];
                            //자바스크립트일때
                            funcCall = window[temp];
                        }
                        else
                        {
                            funcCall = function (event, param)
                            {
                                Function('"use strict";return (' + temp + ')')(event, param);
                            };
                        }

                        return (
                            <button
                                {...domNode.attribs}
                                onClick=
                                {(event, param) =>
                                {
                                    funcCall(event, param);
                                }}
                            >{domNode.children[0].data}</button>
                        );
                    }
                }
            });

    console.log(" --- reactsTest3 --- ");
    console.log(reactsTest3);

  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                  Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Learn React
              </a>
          </header>

          html 직접 출력
          <br />
          <button onClick={window.TestCall}>백엔드 호출 1</button>
          <br />
          <br />
          sTest1 변수 출력
          <br />
          {sTest1}
          <br />
          <br />
          sTest1 : dangerouslySetInnerHTML로 출력
          <div dangerouslySetInnerHTML={{ __html: sTest1 }}></div>
          <br />
          <br />
                sTest1 -> reactsTest1(리액트 변수 변환 후) : dangerouslySetInnerHTML로 출력
          <br />
          <div dangerouslySetInnerHTML={{ __html: reactsTest1 }}></div>
          <br />
          <br />
          onClick 변환 : 자바스크립트만 변환
          <br />
          {reactsTest2}
          <br />
          <br />
          onClick 변환 : 리액트 함수도 변환
          <br />
          {reactsTest2_2}
          <br />
          <br />
          리터럴, 리액트 변수, 리액트 이벤트 처리
          <br />
          {reactsTest3}
      </div>
  );
}


export default App;




/**
 * 문자열을 리러털로 변환
 * https://stackoverflow.com/a/41015840/6725889
 * @param {json} params 데이터로 사용할 json
 */
String.prototype.interpolate = function (params)
{
    const names = Object.keys(params);
    const vals = Object.values(params);
    return new Function(...names, `return \`${this}\`;`)(...vals);
}

/**
 * 문자열에서 리액트 문법의 변수를 찾아 변환하여 리턴한다.
 * @param {any} jsonParams 찾을 변수명: 데이터
 */
String.prototype.replaceReact = function (jsonParams)
{
    let sReturn = this;

    //처리할 대상
    let arrTarget = sReturn.match(/\{[\w]+\}/g);
    arrTarget && arrTarget.forEach((jsonItem) =>
    {
        let regex = new RegExp(jsonItem, 'g');
        let stateItem = jsonItem.split(/{|}/g)[1];
        let objTarget = jsonParams[stateItem];
        if (objTarget)
        {//대상이 있다.
            sReturn = sReturn.replace(regex, objTarget);
        }
        //대상이 아니면 그냥 둔다.
    });

    return sReturn;
}