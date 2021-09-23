import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Test from './pages/Test';
import { useAuthDataContext } from 'context/AuthContext';
import page404 from "./pages/page404";

const PrivateRoute = ({ component,path, ...options }) => {
  const { authData: { user, privileges } } = useAuthDataContext();
  const finalComponent = user === 'authenticated' ? component : Login;

  // if( user && privileges === 'Admin' ){
  //   return <Redirect to='/admin'/>;
  // }

  return (user && <Route {...options} component={finalComponent} />) || null;
};

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        {/*<Route path="/test" exact component={Test} />*/}
        <PrivateRoute path="/test" exact component={Test} />
        {/*<Route path="/404" component={page404} />*/}
        {/*<Redirect to="/404" />*/}
      </Switch>
    </Router>
  );
}

export default App;
