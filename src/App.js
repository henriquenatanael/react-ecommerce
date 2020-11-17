import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Product from './pages/Product';

const App = () => {
  return (
    <Router>
      <Nav/>
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/products' component={Products} />
          <Route path='/product/:id' component={Product} />
        </Switch>
        <div style={{textAlign:'center'}} >
          <hr/>
          <p>Based in the <a href='https://www.soirette.com/collections/cakes' target='_blank'>Soirette website </a>.</p>
          <p>For educational use.</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
