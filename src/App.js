import './styles/app.css'
import Sidebar from './components/sidebar/sidebar'
import Topbar from './components/topbar/topbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'

function App() {
  return (
    <Router>
      <Topbar />
      <div className='flex'>
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
