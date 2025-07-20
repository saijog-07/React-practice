import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import ProductCard from "./ProductCard";

const flowers = [
    {
        id: "f1",
        name: "Rose",
        price: 50,
        image: "https://source.unsplash.com/200x200/?rose"
    },
    {
        id: "f2",
        name: "Tulip",
        price: 40,
        image: "https://source.unsplash.com/200x200/?tulip"
    },
    {
        id: "f3",
        name: "Lily",
        price: 60,
        image: "https://source.unsplash.com/200x200/?lily"
    },
    {
        id: "f4",
        name: "Daisy",
        price: 30,
        image: "https://source.unsplash.com/200x200/?daisy"
    },
    {
        id: "f5",
        name: "Sunflower",
        price: 45,
        image: "https://source.unsplash.com/200x200/?sunflower"
    },
    {
        id: "f6",
        name: "Marigold",
        price: 35,
        image: "https://source.unsplash.com/200x200/?marigold"
    },
    {
        id: "f7",
        name: "Jasmine",
        price: 55,
        image: "https://source.unsplash.com/200x200/?jasmine"
    },
    {
        id: "f8",
        name: "Lavender",
        price: 70,
        image: "https://source.unsplash.com/200x200/?lavender"
    },
    {
        id: "f9",
        name: "Orchid",
        price: 80,
        image: "https://source.unsplash.com/200x200/?orchid"
    },
    {
        id: "f10",
        name: "Peony",
        price: 65,
        image: "https://source.unsplash.com/200x200/?peony"
    }

    ];

const FlowerList = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", flexDirection: "column"}}>
      {flowers.map(f => (
        <ProductCard 
            name={f.name} 
            price={f.price} 
            image={f.image} 
            onadd={() => dispatch(addToCart(f))}
            />
      ))}
    </div>
  );
};

export default FlowerList;

