import './styles/app.css'
import Sidebar from './components/sidebar/sidebar'
import Topbar from './components/topbar/topbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import Analytics from './pages/home/Analytics'

function App() {
  return (
    <Router>
      <Topbar />
      <Sidebar className='max-h-full overflow-auto' />
      <div className='max-h-full overflow-auto bg-haram-200 mr-56 pt-16'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/Analytics'>
            <Analytics />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
