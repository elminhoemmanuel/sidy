import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Overview, Overview1, Overview2} from './pages/Overview'
import {Reports, ReportsOne, ReportsTwo} from './pages/Reports'
import Products from './pages/Products'
import Teams from './pages/Teams'
import Messages from './pages/Messages'

function App() {
  return (
    <Router>
      <Sidebar/>
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/overview/users' exact component={Overview1} />
        <Route path='/overview/admin' exact component={Overview2} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/products' exact component={Products} />
        <Route path='/teams' exact component={Teams} />
        <Route path='/messages' exact component={Messages} />
      </Switch>
    </Router>
  );
}

export default App;
