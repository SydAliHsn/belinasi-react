import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Religious from './pages/Religious';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import Fundraising from './pages/Fundraising';
import Political from './pages/Political';
import Schools from './pages/Schools';
import PeerToPeer from './pages/PeerToPeer';
import AnimalShelter from './pages/AnimalShelter';
import Adoption from './pages/Adoption';
import NotFound from './pages/NotFound';
import NonProfits from './pages/NonProfits';
import MissionTrips from './pages/MissionTrips';
import Contact from './pages/Contact';
import Cause from './pages/Cause';
import Designer from './pages/Designer';
import SignupLogin from './pages/SignupLogin';
import Dashboard from './pages/Dashboard';
import Shop from './pages/Shop';
import Wishlist from './pages/Wishlist';
import Checkout1 from './pages/Checkout1';
import Cart from './pages/Cart';
import About from './pages/About';
import MyAccount from './pages/MyAccount';

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cause" element={<Cause />} />
        <Route path="/signup-login" element={<SignupLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />

        <Route path="/myAccount" element={<MyAccount />} />

        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/designer" element={<Designer />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout1 />} />

        {/* Fundraising */}
        <Route path="/fundraising" element={<Fundraising />} />
        <Route path="/fundraising/religious" element={<Religious />} />
        <Route path="/fundraising/political" element={<Political />} />
        <Route path="/fundraising/schools" element={<Schools />} />
        <Route path="/fundraising/peer-to-peer" element={<PeerToPeer />} />
        <Route path="/fundraising/animal-shelter" element={<AnimalShelter />} />
        <Route path="/fundraising/adoption" element={<Adoption />} />
        <Route path="/fundraising/nonprofits" element={<NonProfits />} />
        <Route path="/fundraising/mission-trips" element={<MissionTrips />} />
        {/* Fundraising */}

        {/* Page not found should be at last */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
