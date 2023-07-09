import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';

function App() {
  const [currentPage, setCurrentPage] = useState('main');

  let currentComponent;
  if (currentPage === 'main') {
    currentComponent = <Main />;
  } else if (currentPage === 'bookingForm') {
    currentComponent = <BookingForm />;
  }

  return (
    <div className="App">
      <div className="section-top">
        <Header />
        <Nav setCurrentPage={setCurrentPage} />
      </div>
      {currentComponent}
      <Footer />
    </div>
  );
}

export default App;

