import React from 'react';

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      product: Object.assign({}, RESET_VALUES),
      errors: {}
    };
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState((prevState) => {
      prevState.product[name] = value;
      return { product: prevState.product };
    });
  }

  handleValidation(){
    let product = this.state.product;
    let errors = {};
    let formIsValid = true;

    if(product.name === ''){
      formIsValid = false;
      errors.name = "Procuct name cannot be empty";
    }

    if(product.category === ''){
      formIsValid = false;
      errors.category = "Product category cannot be empty";
    }

    if(product.price === ''){
      formIsValid = false;
      errors.price = "Product price cannot be empty";
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  handleSave(e) {
    e.preventDefault();
    if(!this.handleValidation()){
      alert("Form has errors.")
      return;
   }
    this.props.onSave(this.state.product);
    this.setState({
      product: Object.assign({}, RESET_VALUES),
      errors: {}
    });
  }
  
  render() {
    return (
      <form>
        <h3>Enter a new product</h3>
        <p>
          <label>
            Name
            <br />
            <input 
              type="text" 
              name="name" 
              onChange={this.handleChange} 
              value={this.state.product.name}/>
              <span style={{color: "red"}}> {this.state.errors["name"]}</span>

          </label>
        </p>
        <p>
          <label>
            Category
            <br />
            <input 
              type="text" 
              name="category" 
              onChange={this.handleChange} 
              value={this.state.product.category} />
              <span style={{color: "red"}}> {this.state.errors["category"]}</span>
          </label>
        </p>
        <p>
          <label>
            Price
            <br />
            <input 
              type="text" 
              name="price" 
              onChange={this.handleChange} 
              value={this.state.product.price} 
            />
            <span style={{color: "red"}}> {this.state.errors["price"]}</span>
          </label>
        </p>
        <p>
          <label>
            <input 
              type="checkbox" 
              name="stocked" 
              onChange={this.handleChange} 
              checked={this.state.product.stocked}
              />
            &nbsp;In stock?
          </label>
        </p>
        <input type="submit" value="Save" onClick={this.handleSave}/>
      </form>
    );
  }
}

export default ProductForm;