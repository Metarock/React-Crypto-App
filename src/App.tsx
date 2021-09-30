import React from 'react';
import { Routes } from './utils/routes';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Exchanges, HomePage, CryptoCurrencies, CryptoDetails, News } from './components/export';
import './App.css';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <CryptoCurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default App;
