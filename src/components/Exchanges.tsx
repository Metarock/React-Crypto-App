import { Avatar, Col, Collapse, Row, Typography } from 'antd';
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import React from 'react';
import { useGetCryptoExchangeQuery } from '../services/index';


interface ExchangesProps {

}

const { Text } = Typography;
const { Panel } = Collapse;

export const Exchanges: React.FC<ExchangesProps> = () => {

    const { data, isFetching } = useGetCryptoExchangeQuery();
    const exchangeList = data?.data?.exchanges;

    if (isFetching) return <div>Loading</div>
    console.log('exchanges', data.data.exchanges);
    return (
        <>
            <Row>
                <Col span={6}>Exchanges</Col>
                <Col span={6}>24h Trade Volume</Col>
                <Col span={6}>Markets</Col>
                <Col span={6}>Change</Col>
            </Row>
            <Row>
                {exchangeList.map((exchange: any) => (
                    <Col span={24}>
                        <Collapse>
                            <Panel
                                key={exchange.id}
                                showArrow={false}
                                header={(
                                    <Row key={exchange.id}>
                                        <Col span={6}>
                                            <Text><strong>{exchange.rank}</strong></Text>
                                            <Avatar className="exchange-image" src={exchange.iconUrl} />
                                            <Text><strong>{exchange.name}</strong></Text>
                                        </Col>
                                        <Col span={6}>${millify(exchange.volume)}</Col>
                                        <Col span={6}>${millify(exchange.numberOfMarkets)}</Col>
                                        <Col span={6}>${millify(exchange.marketShare)}</Col>
                                    </Row>
                                )}
                            >
                                {HTMLReactParser(exchange.description || '')}
                            </Panel>
                        </Collapse>
                    </Col>
                ))}
            </Row>
        </>
    )
}