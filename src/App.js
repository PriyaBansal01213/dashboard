import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>        
        <Routes>
          <Route path = "/" exact Component={Dashboard}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
