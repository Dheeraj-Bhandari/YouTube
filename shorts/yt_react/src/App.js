import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParentRoute from './Components/ParentRoute';
import ChildRoute from './Components/ChildRoute';

function App() {

  return (
    <div className="App" style={{ display: "flex", justifyItems: "flex-start", alignItems: "flex-start", width: "100%" }}>
      <Router>
        <Routes>
          <Route path="/" element={<ParentRoute />}>
            <Route index element={<ChildRoute />} />
            

          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
