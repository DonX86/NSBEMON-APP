import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { takeN, dropN } from '../../utilities/utilities';

import { PointsHorizontalList } from './PointsHorizontalList';

const PointsVerticalList = (props) => {

  let groupedCategories = [];
  let original = [...props.categories];
  while (original.length > 0) {
    console.log('takeN', takeN(original, 3));
    groupedCategories.push(takeN(original, 3));
    original = dropN(original, 3);
  }

  console.log(groupedCategories);


  return (
    <Container>
      {
        groupedCategories.map((group, i) => (
          <Row style={{marginBottom: "25px"}} key={'points_vertical_list_' + i}>
            <PointsHorizontalList group={group} />
          </Row>
        ))
      }
    </Container>
  );
};

export { PointsVerticalList };