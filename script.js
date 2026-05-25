'use strict';

// const canvas = document.getElementById('noiseEffects');
// const ctx = canvas.getContext('2d');

const body = document.querySelector('body');
const h2 = document.querySelector('h2');
const h3s = document.querySelectorAll('h3');
const buttonA = document.getElementById('buttonA');
const future = document.getElementById('future');
const clock = document.querySelector('.clock');

const enterButton = document.getElementById('enterButton');
const inputNameArea = document.getElementById('inputNameArea');
const yourNameArea = document.querySelector('.yourname');

const futureButtonA = document.getElementById('futureButton_forFuture');
const futureButtonB = document.getElementById('futureButton_whatIWant');

const futureSection = document.getElementById('futureSection');
const past = document.getElementById('past');
const pastButton = document.getElementById('pastButton');
const current = document.getElementById('current');
const currentButton = document.getElementById('currentButton');

const genArticle = document.createElement('article');
const genDiv = document.createElement('div');
//const myFuture = document.querySelector('.my-future');
//const element_h4_forFuture = document.createElement('h4');
const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');

const create_Article = document.createElement('article');
const create_h4 = document.createElement('h4');
const create_ul = document.createElement('ul');
// const create_h2 = document.createElement('h2');
const forFuture = `プログラミングの学習を修め、エンジニアレベルになること`;
const whatIWant = [
  '時間',
  '心の余裕',
  'よく通る声',
  'ファションセンス',
];

let future_Count = 0;
let whatIWant_Count = 0;
let likeCountNumber = 0;

futureButtonA.addEventListener('click', () => {
  const text = ['F', 'U', 'T', 'U', 'R', 'E'];
  let textCounter = 0;
  setInterval(() => {
    if (textCounter === 0) {
      future.textContent = text[textCounter];
      textCounter++;
    } else if (textCounter < text.length) {
      future.textContent += text[textCounter];
      textCounter++;
    } else {
      return;
    }
  }, 100);

  if (future_Count === 0) {
    future.style.color = 'Blue';
    future.classList.add('my-future');
    futureSection.appendChild(genArticle);
    genDiv.classList.add('priorities');
    create_h4_Element('未来のために最優先でやること');
    createParamElement(forFuture);
    // 押したらボタンを消すようにする
    future_Count++;
  } else {
    return;
  }
});

futureButtonB.addEventListener('click', () => {
  // 欲しいものボタン
  if (whatIWant_Count === 0) {
    // future.style.color = 'magenta';
    futureSection.appendChild(create_Article);
    create_Article.classList.add('whatIwant');
    create_Article.appendChild(create_h4);
    create_h4.textContent = '欲しいもの';
    whatIWant_Count++;
    console.log('h4の作成');
  } else if (whatIWant_Count <= whatIWant.length) {
    setInterval(() => {
      for (let i = 0; whatIWant_Count <= whatIWant.length; i++) {
        let createList = document.createElement('li');
        create_h4.appendChild(create_ul);
        createList.textContent = whatIWant[whatIWant_Count - 1];
        create_ul.appendChild(createList);

        whatIWant_Count++;
        console.log(whatIWant);
      }
    }, 500);

    let createList = document.createElement('li');
    create_h4.appendChild(create_ul);
    createList.textContent = whatIWant[whatIWant_Count - 1];
    create_ul.appendChild(createList);

    whatIWant_Count++;
    console.log('phase 2');
  } else {
    return;
  }
});

function createParamElement(content) {
  let param = document.createElement('p');
  genArticle.appendChild(param);
  return (param.textContent = content);
}

function create_h4_Element(content) {
  let h4 = document.createElement('h4');
  genArticle.appendChild(h4);
  return (h4.textContent = content);
}

buttonA.addEventListener('click', () => {
  h2_UpperCase();

  h3s.forEach((h3) => {
    h3.style.color = 'red';
  });
});

function h2_UpperCase() {
  let name = h2.textContent;
  name = name.toUpperCase();
  h2.textContent = name;
}

pastButton.addEventListener('click', (e) => {
  past.style.color = '#0a5800';
  const text = ['P', 'A', 'S', 'T'];
  let textCounter = 0;
  setInterval(() => {
    if (textCounter === 0) {
      past.textContent = text[textCounter];
      textCounter++;
    } else if (textCounter < text.length) {
      past.textContent += text[textCounter];
      textCounter++;
    } else {
      return;
    }
  }, 100);
});

currentButton.addEventListener('click', (e) => {
  const text = ['C', 'U', 'R', 'R', 'E', 'N', 'T'];
  let textCounter = 0;
  setInterval(() => {
    if (textCounter === 0) {
      current.textContent = text[textCounter];
      textCounter++;
    } else if (textCounter < text.length) {
      current.textContent += text[textCounter];
      textCounter++;
    } else {
      return;
    }
  }, 100);
});

likeButton.addEventListener('click', () => {
  likeCount.style.boxShadow = '15px, 0px, 10px rgb(0, 230, 255)';

  likeCountNumber++;
  likeCount.textContent = likeCountNumber;
});

document.body.addEventListener('click', () => {

  body.style.backgroundColor = setBackgroundColor();
});

function setBackgroundColor() {
  const red = randomNumber(10, 90);
  const green = randomNumber(10, 90);
  const blue = randomNumber(10, 90);
  console.log(`#${red}${green}${blue}`);
  return `#${red}${green}${blue}`;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomLikeCount() {
  const likeNumber = randomNumber(11, 40);
  likeCountNumber = likeNumber;
  likeCount.textContent = likeCountNumber;
}

function handleClock() {
  const now = moment();
  if (now.seconds() % 2 === 0) {
    clock.textContent = now.format(`HH:mm:ss`);
  } else {
    clock.textContent = now.format(`HH mm ss`);
  }
}

setInterval(() => {
  handleClock();
}, 1000);

enterButton.addEventListener('click', () => {
  const name = inputNameArea.value;

  const create_h2_enterButton = document.createElement('h2');
  yourNameArea.appendChild(create_h2_enterButton);

  const welcom_textArray = ["W", "e", "l", "c", "o", "m", ",", " "];
  const nameTextSplitArray = name.split('');
  let textCounter_name = 0;
  let textCounter_welcom = 0;

  const interval = setInterval(() => {
    if (textCounter_welcom < welcom_textArray.length) {
      create_h2_enterButton.textContent += welcom_textArray[textCounter_welcom];
      textCounter_welcom++;
    } else if (textCounter_name < nameTextSplitArray.length) {
      create_h2_enterButton.textContent += nameTextSplitArray[textCounter_name];
      textCounter_name++;
    } else {
      clearInterval(interval);
    }
  }, 50);

  enterButton.remove();
  inputNameArea.remove();

  console.log(name);
  console.log(nameTextSplitArray);
});


generateRandomLikeCount();

// ========================================
// Myポートフォリオ DOM課題
// ========================================

// ========================================
// ① h3（過去・現在・未来）を取得して色を変更
// ========================================

// やること：
//// ・h3（.pastCurrentFuture）を取得
//// ・文字色を変更する
//// ・全部同じ色でもOK、個別でもOK

// ========================================
// ② 「未来」を操作（DOM生成）
// ========================================

// やること：
//// ・「未来」の親要素を取得する
//// ・my-future クラスを追加する
//// ・my-future を使って再取得する

//// ・div 要素を新しく作る
//// ・class に priorities を付ける

// ・div の中に内容を書く
//   例：
//   「未来のために最優先でしたいこと」
//   「ほしいもの」

// ・親要素に追加する（append）

//// ポイント：
//// 親 → 子 の関係を作る

// ========================================
//// ③ 名前を大文字にする関数
// ========================================

// やること：
//// ・#name または h2 を取得
//// ・textContent を取得
//// ・toUpperCase() で大文字にする
//// ・DOMに反映する

//// 関数として作ること

// ========================================
// ④ いいねボタン
// ========================================

//// やること：
//// ・ボタンを取得 or 作成
//// ・カウント用の変数を用意

//// ・クリックイベントをつける
//// ・クリックされるたびにカウントを増やす
//// ・数字を画面に表示する

//// ポイント：
////・変数で状態を管理する
//// ・console.logで確認する

// ========================================
// ▼チャレンジ課題（任意）
// ========================================

// ----------------------------------------
// ① 配列 → DOM生成
// ----------------------------------------

// やること：
//// ・配列を作る（例：行きたい場所）
// ・ループで要素を作る
// ・DOMに追加する

// 一度ボタンを押すと一定間隔でリストが表示される

// ----------------------------------------
// ② CSSをDOMで変更
// ----------------------------------------

//// やること：
//// ・styleを変更する
//// ・またはclassを付け替える

// ----------------------------------------
// ③ ランダム背景色
// ----------------------------------------

//// やること：
//// ・Math.random() を使う
//// ・色を作る
//// ・クリックで背景色を変更

// ----------------------------------------
// ④ 入力フォーム
// ----------------------------------------

// やること：
// ・inputの値を取得
// ・ページに表示する

// h2の上にinputで名前を入力させる
// 入力後にボタンを押させるとアニメーション
// "Welcom, namename"
// 枠を適用する


// ----------------------------------------
// ⑤ ライブラリ（上級）
// ----------------------------------------

//// 例：moment.js
//// ・時間を表示する

// ========================================
// ▼実装順（おすすめ）
// ========================================

//// 1. h3の色変更
//// 2. 名前を大文字
//// 3. 未来に要素追加
//// 4. いいねボタン

// ========================================

// function test(actual, expected) {
//   if (_.isEqual(actual, expected)) {
//     console.log("  actual: ", actual);
//     console.log("expected: ", expected);
//     console.log("Test Passed.");
//   } else {
//     console.error("Test Failed.");
//     console.log("  actual: ", actual);
//     console.log("expected: ", expected);
//     console.trace();
//   }
// }
