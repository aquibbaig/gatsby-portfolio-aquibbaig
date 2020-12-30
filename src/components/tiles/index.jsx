import React, { useEffect } from 'react';
import { Card, Row, Col, Button } from 'antd';

export default (props) => {
  const { bg, textCol, buttonLink, loading, img, className } = props;
  useEffect(() => {
    // setLoading(loading);
  }, [loading]);
  return (
    <Card
      loading={loading}
      style={{ backgroundColor: bg, color: textCol, marginTop: '5vh' }}
      className={className}
    >
      <Row align="middle">
        <Col xs={16}>
          <p style={{ fontSize: '1.3rem' }}>
            {props.header}
          </p>
          <p style={{ fontSize: '1rem' }}>
            {props.content}
          </p>
          <p>
            <Button type="primary"><a href={buttonLink}>View</a></Button>
          </p>
        </Col>
        <Col xs={8} align="center" style={{ fontSize: '1.4rem' }}>
          {img}
        </Col>
      </Row>
    </Card>
  );
};