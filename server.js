const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`🚀 Snake game running at http://localhost:${PORT}`);
});
