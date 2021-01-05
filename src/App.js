import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header/Header';
import Main from './Components/Main/Main/Main';

const App = () => {
  return (
    <div className="app">
      <header>
        <Header></Header>
      </header>
      <main>
        <Main></Main>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default App;
