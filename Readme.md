# 개요
- 주최 : 국방부
- 프로그램명 : 군장병, 군무원, 군간부 대상의 오픈소스 개발캠프
- 내용 : 교육기간 중 자습 및 프로젝트 구상 후 개발캠프 기간동안 프로젝트 구현
- 기간
  - 교육 : 2019.7.13 ~ 2019.10.20
  - 개발캠프 : 2019.10.21 ~ 2019.10/25
  
# 프로젝트 
### 개요
- 분야 : 웹
- 제목 : ArmyTalk
- 내용 : 군 부대 내 업무관리용 메신저, 작업요청 및 요청받은 작업을 메신저 형태로 관리할 수 있음.
- 개발언어 : Vue.js + Express + MongoDB

### 페이지 구성
- login.vue : 로그인 페이지
- register.vue : 회원가입 페이지
- home.vue : main 페이지, 사용자 목록 및 작업 목록이 출력됨
- chat 컴포넌트 모듈 : 기존 메시지 전송 디자인 페이지에서 메시지 송수신, 작업요청 송수신 기능 추가
- view.vue : 작업 현황 페이지, 요청작업 받은 작업 보낸 알림 받은 알림을 상세히 확인 가능
- workview.vue : 작업, 알림의 상세 페이지

### 미리보기
![login](img/login.jpg)
![home](img/home.jpg)
![view](img/view.jpg)
