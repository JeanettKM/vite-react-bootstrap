import React from 'react';
import LoginForm from './Components/LoginForm'; // login form component
import NavBar from './Components/NavBar'; // Navbar component
import ItemCard from './Components/ItemCard'; // ItemCard component
import Breadcrumbs from './Components/Breadcrumbs'; // Breadcrumbs component
import RegisterForm from './Components/RegisterForm'; // Register Form component

function App() {
  return (
    <div className="App">
      <NavBar />
      <Breadcrumbs />
      <LoginForm />
      <RegisterForm />
      <ItemCard />
      <LoginForm />
      <RegisterForm />
      <ItemCard />
    </div>
  );
}

export default App;
