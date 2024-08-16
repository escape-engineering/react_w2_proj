# 리액트 숙련주차 개인과제

```
리액트 숙련주차 개인과제입니다.
```

##
- Javascript
- React
- React-router-dom

## 폴더 구조

## 프로젝트 구조

## 실행 방법
- 
## 주요 기능
- 

## 트러블슈팅
- 문제1
```
로컬스토리지에 데이터를 저장하고 useEffect안에서 해당 데이터를 가져오는 작업 중 생긴 문제
- 데이터 삭제 시 마지막 한 데이터가 삭제되지 않음

=> useEffect에서 total을 의존성 배열으로 사용하고, localStorage.setItem은 total.length>0일때 진행되어 total에선 삭제되었으나 로컬스토리지에 저장돼 페이지에도 남아있고, 새로고침을 하더라도 데이터가 삭제되지 않음

==> useEffect의 페이지가 로드된 후 실행되는 기능을 제거한 useDidMountedEffect 커스텀 훅을 만들어 사용함.

===> bool값을 useRef를 이용해 만들고, useDidMountedEffect안에서 해당 ref값이 true일 때 함수를 실행, false일 때 ref를 true로 바꾸는 작업을 통해 페이지가 로드될때 / 의존성배열이 바뀔 때를 나누어 해결 
```
