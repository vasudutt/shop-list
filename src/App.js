import React, { useState } from 'react';
import Nav from './components/Nav';
import ShopsList from './components/ShopsList';
import Form from './components/Form';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav setShowForm={setShowForm} />
      <ShopsList />
      {showForm && <Form setShowForm={setShowForm} />}
    </div>
  );
}

export default App;
