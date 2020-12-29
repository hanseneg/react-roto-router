import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import './style.css'

import Home from './Home'
import About from './About'
import Services from './Services'
import Footer from './Footer'

function App() {
    return (
        <div className='body'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/services'>Services</Link>
            </nav>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/services'>
                    <Services />
                </Route>
                <Route path='/footer'>
                    <Footer />
                </Route>
            </Switch>
            <footer>
                <Link to='/footer'>Copyrights</Link>
            </footer>
        </div>
    )
}

export default App
