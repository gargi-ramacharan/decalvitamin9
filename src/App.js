import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Redux Shopping Cart</span>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <ProductList />
          </div>
          
          <div className="col-md-4">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;