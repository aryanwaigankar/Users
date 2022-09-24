
import './App.css';
import Main from './Components/Main';
import Form from './Components/Form';
import Edit from './Components/Edit';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <Routes>
        {/* <Route path="/about">
          <About />
        </Route> */}
        <Route index element={<Main />}></Route>
        <Route path="/Form" element={<Form />}></Route>
        <Route path="/Edit" element={<Edit />}></Route>
      </Routes>


    </Router>
    {/* <Form/> */}
    
    </>
  );
}

export default App;
