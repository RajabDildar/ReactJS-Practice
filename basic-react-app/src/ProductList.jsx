import Product from "./Product";

function ProductList() {
  return (
    <>
      <Product
        title="Pen"
        price={20}
        features={["hi-tech", "fast", "durable"]}
        methods={{ a: "credit card", b: "COD" }}
      />
      <Product
        title="Bag"
        price={200}
        features={["hi-tech", "fast", "durable"]}
        methods={{ a: "Google pay", b: "COD" }}
      />
      <Product
        title="Shoes"
        price={1000}
        features={["hi-tech", "fast", "durable"]}
        methods={{ a: "COD", b: "credit card" }}
      />
    </>
  );
}

export default ProductList;
