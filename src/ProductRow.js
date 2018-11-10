import React from 'react';

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.destroy = this.destroy.bind(this);
    this.edit = this.edit.bind(this);
  }
  destroy() {
    this.props.onDestroy(this.props.product.id);
  }

  edit() {
    this.props.onEdit(this.props.product.id);
    console.log('product row');
  }

  render() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
        <td><button onClick={this.edit}>Edit</button></td>
        <td><button onClick={this.destroy}>x</button></td>
      </tr>
    );
  }
}

export default ProductRow;