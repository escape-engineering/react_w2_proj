# 리액트 숙련주차 개인과제
```
리액트 숙련주차 개인과제입니다.
```

## 배포사이트
[개인과제 배포사이트](https://react-w2-proj.vercel.app/)

##
- Javascript
- React
- React-router-dom
- redux
- @reduxjs/toolkit
- react-toastify
- styled-components

## 폴더 구조
📦react_w2_proj<br/>
┣ 📂public<br/>
┃ ┗ 📜vite.svg<br/>
┣ 📂src<br/>
┃ ┣ 📂assets<br/>
┃ ┃ ┣ 📜dexPageEmptyImg.png<br/>
┃ ┃ ┣ 📜landingPageBackground.jpg<br/>
┃ ┃ ┣ 📜landingPageLogo.png<br/>
┃ ┃ ┗ 📜react.svg<br/>
┃ ┣ 📂components<br/>
┃ ┃ ┣ 📂common<br/>
┃ ┃ ┃ ┗ 📜Button.jsx<br/>
┃ ┃ ┗ 📂dex<br/>
┃ ┃ ┃ ┣ 📜Dashboard.jsx<br/>
┃ ┃ ┃ ┣ 📜PokemonCard.jsx<br/>
┃ ┃ ┃ ┣ 📜PokemonList.jsx<br/>
┃ ┃ ┃ ┗ 📜SelectedList.jsx<br/>
┃ ┣ 📂hooks<br/>
┃ ┃ ┗ 📜useSelectPokemon.jsx<br/>
┃ ┣ 📂pages<br/>
┃ ┃ ┣ 📜Dex.jsx<br/>
┃ ┃ ┣ 📜Landing.jsx<br/>
┃ ┃ ┗ 📜PockeDetail.jsx<br/>
┃ ┣ 📂redux<br/>
┃ ┃ ┣ 📂config<br/>
┃ ┃ ┃ ┗ 📜configStore.js<br/>
┃ ┃ ┗ 📂slices<br/>
┃ ┃ ┃ ┗ 📜pokeSlices.js<br/>
┃ ┣ 📂shared<br/>
┃ ┃ ┗ 📜Router.jsx<br/>
┃ ┣ 📜App.css<br/>
┃ ┣ 📜App.jsx<br/>
┃ ┣ 📜index.css<br/>
┃ ┣ 📜main.jsx<br/>
┃ ┣ 📜mock.js<br/>
┃ ┗ 📜util.js<br/>
┣ 📜.gitignore<br/>
┣ 📜.prettierignore<br/>
┣ 📜eslint.config.js<br/>
┣ 📜index.html<br/>
┣ 📜package.json<br/>
┣ 📜README.md<br/>
┣ 📜vite.config.js<br/>
┗ 📜yarn.lock<br/>

## 프로젝트 구조
- 랜딩페이지<br/>
![landingPage](https://github.com/user-attachments/assets/f574be82-ec68-4c01-ac1c-dcbc037add26)
    - 랜딩페이지는 사이트 진입 시 처음 보는 화면입니다.
    - 해당 페이지는 배경사진, 로고, dex페이지 이동 버튼이 존재합니다.
    - 포켓몬 도감 시작하기 버튼을 클릭하면 dex페이지로 이동이 가능합니다.

- dex페이지<br/>
![dexPage](https://github.com/user-attachments/assets/98e25668-f1ac-4f01-a3c9-cbe2bc07fa35)
    - 내가 선택한 포켓몬 리스트를 보여주는 상단부와 전체 포켓몬 리스트를 보여주는 하단부가 존재합니다.
    - 하단의 포켓몬 리스트에서 원하는 포켓몬의 추가버튼을 누르면 상단의 선택포켓몬에 추가됩니다.
    ![dexPage_selected](https://github.com/user-attachments/assets/a89fec0d-4999-4a0e-955f-20047218e6e1)
    - 추가된 선택 포켓몬은 삭제 버튼을 가지고있으며, 버튼을 누르면 해당 포켓몬이 선택 목록에서 삭제됩니다.
    - 최대 6개까지 포켓몬 선택이 가능하며, 중복 포켓몬은 선택하지 못합니다.
    - 제한사항을 어기는 시도에는 react-toastify를 사용하여 alert를 사용자에게 보여줍니다.
    ![duplSelect](https://github.com/user-attachments/assets/a659d449-e9d2-4473-9b9a-f16f0a77cf47)
    - 선택포켓몬 목록이나 전체 포켓몬 리스트의 각 포켓몬 카드를 클릭하면 해당 포켓몬을 설명해주는 디테일 페이지로 이동합니다.

- detail페이지<br/>
![detailPage](https://github.com/user-attachments/assets/fd889205-e679-44d6-9d40-0b6448f1c73f)
    - 해당 포켓몬의 id를 queryString에 담아 데이터에서 해당 포켓몬 데이터만 추출해 사용자에게 보여줍니다.
    - 디테일 페이지에서도 선택 포켓몬 리스트에 해당 포켓몬을 추가할 수 있으며, 같은 제한사항에 따라 alert가 출력될 수 있습니다.
    - 브라우저 자체의 뒤로가기 버튼이 아닌, 화면의 뒤로가기를 누르면 선택목록이 유지된 상태로 dex페이지로 이동 가능합니다.

## 트러블슈팅
- 문제1
```
로컬 서버에서는 이미지 src를 참조주소값으로 작동했으나, 배포 서버에서 이미지 오류 발생

=> 이미지 자체를 import해와 img태그의 src로 주입하도록 변경함
```
- 문제2
```
react-toastify를 활용한 alert가 정상적으로 화면에 출력되지 않는 문제 발생

=> ToastContainer를 최상단인 Router.jsx에 추가하여 정상적으로 모든 페이지에서 사용가능하도록 변경함
```
![Router-toastify](https://github.com/user-attachments/assets/f49bdb1b-7a36-4c69-b22c-98cba71206a5)

## 프로젝트 회고
props-drilling로 프로젝트를 처음 시작했다. 확실히 컴포넌트 사이에 props로 데이터를 전달해주고 자식 컴포넌트에서 함수를 사용하고, 리렌더링이 어떻게 일어날지 생각하는 과정이 매우 귀찮고 헷갈렸다. 컴포넌트 depths가 크게 깊지도 않았지만, 한 단위 자식의 이동이 아니라면 확실하게 불편하고 데이터 흐름을 읽기 어려워진다고 느꼈다.
그래서 Context를 사용해서 영역적인 상태관리를 진행할 때 훨씬 수월하게 진행되었다.
최상단 컴포넌트에서 모두 만들어서 같이 공유하는 context에 넣어주고, props를 내려줄 필요 없이 가져올 것만 가져와 사용하는 방식이 확연하게 편리하고 데이터 흐름도 이해가 쉬웠다.
하지만 Context에서 redux로 변경했을 땐 차이가 무엇인가를 느끼기 어려웠다. 리듀서도 스토어도 새로 생긴것은 알겠지만, 굳이 Context로 해결 가능한 문제를 라이브러리를 설치하면서까지 전역상태관리를 해야하나?라는 생각이 들기도 했다.
하지만 프로젝트의 사이즈가 실제 서비스하는 타 페이지보다 매우 작은 점을 고려해본다면, 전역 상태관리의 장점이 덜 드러난 부분도 있다고 생각한다.

저번 개인 과제때는 컴포넌트의 분리기준과 state 분리기준에 감이 좀 없다는 생각이 들었지만, 같은 로직을 공유하는 state끼리 뭉쳐놓고, 컴포넌트 분리도 재사용성 위주로 생각하여 분리를 하다보니 깔끔하게 분리할 수 있었다고 생각한다.
또한 useCustomHook을 만들어 기능로직과 UI로직을 분리하니 컴포넌트가 어떤 역할인지 파악하기 쉬워졌다고 생각한다.
