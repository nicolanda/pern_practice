import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskForm } from "./components/TaskForm.js";
import { TaskList } from "./components/TaskList.js";
import { Navbar } from "./components/Navbar.js";
import { Container } from "@mui/material";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path='/tasks/:id/edit' element={<TaskForm/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
