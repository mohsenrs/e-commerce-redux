import { Route } from 'react-router-dom'
import { Router, Switch } from 'react-router-dom'
import './App.css'
import Header from './containers/Header'
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={ProductListing} />
        <Route path='/product/:productId' exact component={ProductDetail} />
        <Route>404 not Found!</Route>
      </Switch>
    </div>
  )
}

export default App
