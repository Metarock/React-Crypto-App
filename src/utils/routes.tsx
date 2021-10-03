import React from "react";
import { Route, Switch } from 'react-router-dom';
import { CryptoCurrencies, CryptoDetails, Exchanges, HomePage, News } from "../components/export";


export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/exchanges">
                <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
                <CryptoCurrencies simplified={false} />
            </Route>
            <Route exact path="/crypto/:coinId">
                <CryptoDetails />
            </Route>
            <Route exact path="/news">
                <News simplified={false} />
            </Route>
        </Switch>
    )
}