import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import databaseRef from '../config/firebase';
import '../App.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    databaseRef.on('value', (snap) => {
      console.log(snap.val());
      const dataList = Object.values(snap.val());
      this.setState({ products: dataList });
    });
  }
  render() {
    const { products } = this.state;
    const columns = [{
      dataField: 'name',
      text: 'Name',
    }, {
      dataField: 'batch',
      text: 'Batch',
    }, {
      dataField: 'currentCompany',
      text: 'Current Company',
    }, {
      dataField: 'address',
      text: 'Address',
    }, {
      dataField: 'email',
      text: 'email ',
    }, {
      dataField: 'branch',
      text: 'branch ',
    }, {
      dataField: 'mobile',
      text: 'Mobile',
    }, {
      dataField: 'gender',
      text: 'Gender',
    }];
    const { SearchBar } = Search;

    return (
      <div className="App">
        <ToolkitProvider
          keyField="timestamp"
          data={products}
          columns={columns}
          search
        >
          {
    props => (
      <div>
        <SearchBar {...props.searchProps} />
        <hr />
        <BootstrapTable
          {...props.baseProps}
        />
      </div>
    )
  }
        </ToolkitProvider>
      </div>
    );
  }
}

export default Table;
