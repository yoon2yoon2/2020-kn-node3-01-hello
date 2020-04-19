# 2020.04.19 노드 수업
## 1.visual studio code를 다운로드 및 설치
## 2.확장 기능 설치
## 3.node.js 설치 [노드 다운로드](https://nodejs.org)
## 4.git 설치 [깃 다운로드](https://git-scm.com) 다운로드 하고 우측 중앙의 컴퓨터에서 다운로드 한다.
## 5.탐색기에서 프로젝트 폴더를 생성하고 vscode에서 폴더열기로 프로젝트 폴더를 연다.
## 6. github.com에서 생성한 레파지토리를 연동시킨다.
```bash
git init
git remote add origin https://github.com/yoon2yoon2/2020-kn-node3-01.hello
```
## 7.npm 프로젝트를 시작한다.
```bash
npm init -y

# moment.js 모듈을 설치한다.
npm i moment

# express.js 모듈을 설치한다.
npm i express
```

## supervisor 설치
```bash
# supervisor 모듈을 global 옵션을 통해서 설치한다.(한번만)
# npm install --global supervisor 어느 창에서든 명령어가 먹게 해주는 옵션 -g
# 기본셀 (powershell (x), cmd창으로 열어서 실행)
npm i -g supervisor
```

```js
// javascript 주석
/* 블럭주석 */
var a =10;
console.log(a);
```

## app.js 생성
```
```