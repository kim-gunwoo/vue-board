// application 설정
const app = require("./app");
// 사용디비 설정
const db = require("./config/LowDB");
// 사용포트 설정
const PORT = process.env.PORT || 4500;

// application 설정
app.listen(PORT, () => console.log(`server is running localhost:${PORT}`));
