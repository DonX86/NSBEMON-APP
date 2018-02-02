import React from 'react';
import { Col } from 'reactstrap';

import { Points } from './Points';

const PointsHorizontalList = (props) => {

  return props.group.map((item, i) => (
    <Col xs="12" sm="12" md="4" key={'points_horizontal_list_' + i}>
      <Points item={item} />
    </Col>
  ));
};

export { PointsHorizontalList };
