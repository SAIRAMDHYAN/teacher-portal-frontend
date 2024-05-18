import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbare from './Screens/navbar';
import Login from './Screens/login';
import Register from './Screens/register';
import StudentsDetails from './Screens/studentsDetails';
// import AddDetails from './components/addDetails';
import AddDetails from './Screens/AddDetails';
function App() {

  return (
    <>
    <Router>
    <Navbare/>
      <Routes>
               {/* <Route path='/navbar' element={}></Route> */}
               <Route path='/login' element={<Login/>}></Route>
               <Route path='/register' element={<Register/>}></Route>
               <Route path='/' element={<AddDetails/>}></Route>
               {/* <Route path='/' element={<StudentsDetails/>}></Route> */}

      </Routes>
    </Router>
    </>
  )
}

export default App;
