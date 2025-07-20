const ProductCard = ({ name, price, image, onadd }) => {
  return (
    <div style={{
      border: "1px solid #000",
      padding: "10px",
      width: "200px",
      marginBottom: "20px",
    }}>
      <img
        src={image}
        alt={name}
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <button onClick={onadd}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
