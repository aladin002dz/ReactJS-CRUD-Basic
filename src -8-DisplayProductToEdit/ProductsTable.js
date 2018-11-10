import React from 'react';
import ProductRow from './ProductRow.js';
import SortableColumnHeader from './SortableColumnHeader.js';

class ProductsTable extends React.Component {
  constructor(props) {
    super(props);
    this.sortByKeyAndOrder = this.sortByKeyAndOrder.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = {
      sort: {
        column: 'name',
        direction: 'desc'
      }
    };
  }
  sortByKeyAndOrder(objectA, objectB) {
    let isDesc = this.state.sort.direction === 'desc' ? 1 : -1;
    let [a, b] = [objectA[this.state.sort.column], objectB[this.state.sort.column]];
    if (this.state.sort.column === 'price') {
      [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d\.]/g, ''), 10));
    }
    if (a > b) {
      return 1 * isDesc;
    }
    if (a < b) {
      return -1 * isDesc;
    }
    return 0;
  }
  sortProducts() {
    let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
    return productsAsArray.sort(this.sortByKeyAndOrder);
  }
  handleDestroy(id) {
    this.props.onDestroy(id);
  }
  
  handleEdit(id) {
    this.props.onEdit(id);
    console.log('Table');
  }

  handleSort(column, direction) {
    this.setState({
      sort: {
        column: column,
        direction: direction
      }
    });
  }
  render() {
    var rows = [];
    this.sortProducts().forEach((product) => {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      rows.push(
        <ProductRow product={product} 
          key={product.id} onEdit={this.handleEdit}  
          onDestroy={this.handleDestroy}></ProductRow>);
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <SortableColumnHeader
                onSort={this.handleSort}
                currentSort={this.state.sort}
                column="name"
              ></SortableColumnHeader>
              <SortableColumnHeader
                onSort={this.handleSort}
                currentSort={this.state.sort}
                column="price"
              ></SortableColumnHeader>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductsTable;