const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const tasksRoutes = require("./routers/tasks.routes");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(tasksRoutes);

//error handler
app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server listen on ${PORT}`);
});
