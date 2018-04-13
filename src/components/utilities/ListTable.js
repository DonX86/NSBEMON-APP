import React, { Component } from 'react';
import { Table } from 'reactstrap';
import _ from 'lodash';

const renderItem = (item, index, headers) => {

  return (
    <tr key={`${item[headers[0].key]}_${index}`}>
      <th scope="row">{index}</th>
      {
        headers.map((header, nextIndex) => (
          <td key={`${item[header.key]}_${index}_${nextIndex}`} >
            {_.get(item, header.key, '-')}
          </td>
        ))
      }
    </tr>
  );
};

class ListTable extends Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            {
              this.props.headers.map((header) => <th key={header.title}>{header.title}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            this.props.items.map((item, index) => (
              renderItem(item, index, this.props.headers)
            ))
          }
        </tbody>
      </Table>
    );
  }
}

export default ListTable;