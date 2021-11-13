import Layout from './components/Layout';
import Product from './pages/Product';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import SignIn from './pages/SignIn';
import { useState } from 'react';
import SignUp from './pages/SignUp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className='layout'>
        <Layout setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}>
          {!isLoggedIn && (
            <Switch>
              <Route exact path='/sign-in'>
                <SignIn setIsLoggedIn={setIsLoggedIn} />
              </Route>
              <Route exact path='/sign-up'>
                <SignUp />
              </Route>
            </Switch>
          )}
          <Switch>
            <Route exact path='/'>
              <ProductsList filter='' />
            </Route>
            <Route exact path='/men'>
              <ProductsList filter='male' />
            </Route>
            <Route exact path='/woman'>
              <ProductsList filter='female' />
            </Route>
            <Route exact path='/about'>
              <AboutUs />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <Route exact path='/checkout'>
              <Checkout />
            </Route>
            <Route exact path='/product/:productId'>
              <Product />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
