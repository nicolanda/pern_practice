import { Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate()

  const loadTask = async () => {
    const response = await fetch("http://localhost:4000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    loadTask();
  }, []);

  return (
    <>
      <h1>Task list</h1>
      {tasks.map((task) => (
        <Card
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }}
          key={task.id}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ color: "white" }}>
              <Typography>{task.title}</Typography>
              <Typography>{task.description}</Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/tasks/${task.id}/edit`)}
              >
                Edit
              </Button>
              <Button
                style={{ marginLeft: ".5rem" }}
                variant="contained"
                color="warning"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
