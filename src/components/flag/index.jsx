import React, { useEffect } from 'react';
import { Card, Col, Button } from 'antd';

export default (props) => {
  const { loading, bg, textCol, header, className } = props;
  useEffect(() => {
    // setLoading(loading);
  }, [loading]);
  return (
    <div className={className}>
      <Card
        hoverable
        loading={loading}
        style={{ backgroundColor: bg, color: textCol, height: '20vh', textAlign: 'center' }}
      >
        <p style={{ fontSize: '1.2rem' }}>
          {header}
        </p>
      </Card>
    </div>
  )
}
