import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { takeN, dropN } from '../../utilities/utilities';

import PointsHorizontalList from './PointsHorizontalList';

const PointsVerticalList = (props) => {

  let groupedCategories = [];
  let original = [...props.trainings];

  // We want to get a list of lists
  // where [[trainig1 training2 training3] .... [trainingN trainingN+1 trainingN+2]]
  while (original.length > 0) {
    groupedCategories.push(takeN(original, 3));
    original = dropN(original, 3);
  }

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

export default PointsVerticalList;
