import "./Product.css";

// props is an object, either we can access props object directly or destructure values (i.e, props.title or {title})
// one way
/* function Product(props) {
  return (
    <div className="Product">
      <h2>{props.title}</h2>
      <h3>{props.price}</h3>
    </div>
  );
} */

// second way
function Product({ title, price = 1, features, methods }) {
  // dynamic component styling
  let isDiscount = price > 500;
  let styles = { backgroundColor: isDiscount ? "blue" : "" };
  return (
    <div className="Product" style={styles}>
      <h2>{title}</h2>
      <h3>Price : {price}</h3>
      <p>{features}</p>
      {/*jsx extract all values from array and then print that values*/}
      {/* creating list of array using map function */}
      <p>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </p>
      <p>Pay via : {methods.a}</p> {/*objects keys can be accessed*/}
      {isDiscount && <p>Discount : 5%</p>} {/*conditionals */}
    </div>
  );
}

export default Product;
