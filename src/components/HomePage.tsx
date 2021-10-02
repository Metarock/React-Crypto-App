import React, { useState } from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Link } from 'react-router-dom';
import { CryptoCurrencies } from './CryptoCurrencies';
import { News } from './News';
interface HomePageProps {

}

const { Title } = Typography;

export const HomePage: React.FC<HomePageProps> = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;
    console.log("the data", data);

    if (isFetching) return <div>loading</div>
    return (
        <>
            <Title level={2} className="heading">
                Global Crypto Stats
            </Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Crypto</Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
            </div>
            <CryptoCurrencies simplified />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="show-more"><Link to="/news">Show more</Link></Title>
            </div>
            <News simplified />
        </>
    )
}