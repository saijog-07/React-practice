import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import ProductCard from "./ProductCard";

const watches = [
    {
      id: "w1",
      name: "Classic Leather Watch",
      price: 1500,
      image: "https://source.unsplash.com/200x200/?leather-watch"
    },
    {
      id: "w2",
      name: "Digital Sport Watch",
      price: 900,
      image: "https://source.unsplash.com/200x200/?digital-watch"
    },
    {
      id: "w3",
      name: "Luxury Gold Watch",
      price: 3500,
      image: "https://source.unsplash.com/200x200/?gold-watch"
    },
    {
      id: "w4",
      name: "Smartwatch",
      price: 2500,
      image: "https://source.unsplash.com/200x200/?smartwatch"
    },
    {
      id: "w5",
      name: "Analog Wrist Watch",
      price: 1200,
      image: "https://source.unsplash.com/200x200/?analog-watch"
    },
    {
      id: "w6",
      name: "Stainless Steel Watch",
      price: 1800,
      image: "https://source.unsplash.com/200x200/?steel-watch"
    },
    {
      id: "w7",
      name: "Chronograph Watch",
      price: 2200,
      image: "https://source.unsplash.com/200x200/?chronograph-watch"
    },
    {
      id: "w8",
      name: "Minimalist Watch",
      price: 1000,
      image: "https://source.unsplash.com/200x200/?minimalist-watch"
    },
    {
      id: "w9",
      name: "Digital LED Watch",
      price: 800,
      image: "https://source.unsplash.com/200x200/?led-watch"
    },
    {
      id: "w10",
      name: "Military Tactical Watch",
      price: 2000,
      image: "https://source.unsplash.com/200x200/?military-watch"
    }
  ];


const WatchList = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", flexDirection: "column"}}>
      {watches.map(w => (
        <ProductCard 
            name={w.name} 
            price={w.price} 
            image={w.image} 
            onadd={() => dispatch(addToCart(w))}
            />

      ))}
    </div>
  );
};

export default WatchList;