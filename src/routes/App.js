import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Home/HomePage";
import { EditTodo } from "./EditTodo/EditTodo";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<EditTodo />} />
        <Route path="/*" element={<p>Not found</p>} />
      </Routes>
    </HashRouter>
  );
}


export default App;
