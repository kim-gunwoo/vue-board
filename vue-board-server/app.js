// express
const express = require("express");
// node 에서 request 데이터 사용
const bodyParser = require("body-parser");
// app 에 express 주입
const app = express();
// request 상태 확인
const logger = require("morgan");
// Cross Origin Resource Sharing, 현재 도메인과 다른 도메인으로 리소스가 요청될 경우 허용
const cors = require("cors");

// 크로스도메인 사용
app.use(cors());
// dev 모드로 로그 실행
app.use(logger("dev"));
// json / www from 데이터 사용
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 접근가능한 파일 경로 설정
app.use(express.static("public"));

// router
app.use("/board", require("./router/board"));

// 가동시간 여부확인
const startT = Date.now();
app.use("/health", (_, res) => res.json({ time: Date.now() - startT }));

// 404 에러 처리
app.use((req, res, next) => {
    res.status = 404;
    next(Error("not found"));
});

//  500 에러
app.use((err, req, res, next) => {
    console.log(err);
    res.status(res.statusCode || 500);
    res.json({ error: err.message || "internal server error" });
});

module.exports = app;
