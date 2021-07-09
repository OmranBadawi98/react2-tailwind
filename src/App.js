import './styles/app.css'
import Sidebar from './components/sidebar/sidebar'
import Topbar from './components/topbar/topbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import React from 'react'

function App() {
  return (
    <Router>
      <Topbar />
      {/* <div className='w-52 inset-0 h-screen'> */}
      <div className='h-screen'>
        <Sidebar />
        {/* </div> */}
        <div className='h-screen overflow-y-auto no-scrollbar bg-haram-200 mr-56 pt-16'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Analytics' component={Analytics} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
