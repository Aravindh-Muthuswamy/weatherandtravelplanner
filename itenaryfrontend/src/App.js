
import './App.css';
import Appbar from './components/Appbar.jsx';
import Itenary from './components/Itenary.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddItenary from './components/AddItenary.jsx';
import EditItenary from './components/EditItenary.jsx';
import Weather from './components/Weather.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <div className="App">
		{/* Handle Routing in the react app for easy navigation */}
		<Router>
			<Appbar />
			<Routes>
				<Route path="/" element={<Itenary />}></Route>
				<Route path="/additenar" element={<AddItenary/>}></Route>
				<Route path="/edititenary/:id/:name" element={<EditItenary/>}></Route>
				<Route path="/weather/:id/:name/:traveldate" element={<Weather/>}></Route>
				<Route path="/about" element={<About/>}></Route>
			</Routes>
		</Router>
    </div>
  );
}

export default App;
