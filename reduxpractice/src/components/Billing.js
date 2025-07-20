import { useSelector } from "react-redux";

const Billing = () => {
  const items = useSelector(s => s.cart.items);
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Billing</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {items.map(i => (
            <li>
              {i.name} - {i.price} x {i.qty} = {i.price * i.qty}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: {total}</h3>
    </div>
  );
};

export default Billing;
