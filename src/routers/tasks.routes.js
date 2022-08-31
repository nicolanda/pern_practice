const { Router } = require("express");
const pool = require("../db");

const {
  getAllTask,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks.controllers");

const router = Router();

/* 
router.get('/tasks', async (req, res) => {
  const result = await pool.query('select now()');
  console.log(result) => object from request db
  res.json('executed')
})
*/
router.get("/tasks", getAllTask);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

module.exports = router;
