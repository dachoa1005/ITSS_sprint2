import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginShow from './component/LoginShow';
import RegisterShow from './component/RegisterShow';
function App() {
  return (
    <>
      <Router>
        <Routes>
          
          <Route path="/login" element={<LoginShow />} />
          <Route path="/signup" element={<RegisterShow />} />
          <Route path="/" element={<h1>hello</h1>}></Route>

        </Routes>
      </Router>
    </>
  );
}
export default App;
