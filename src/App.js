import React, {useState, useEffect} from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import './stylesheet/style.css';
import { Home } from './components/Home';
import { Addemployee } from './components/AddEmployee';
import { Editemployee } from './components/EditEmployee';


import { GlobalProvider } from './context/GlobalState';

function App() {
// const [data, setData] = useState({ data: [] });

// useEffect(async ()=> {
//     const result = await axios(
//         ' 	http://dummy.restapiexample.com/api/v1/employees'
//     );
//     setData(result.data);
//     console.log(result.data);
// }, []);

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={Addemployee} exact />
          <Route path="/edit/:id" component={Editemployee} exact />
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
