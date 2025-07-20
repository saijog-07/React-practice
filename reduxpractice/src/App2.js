import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FlowerList from "./components/FlowerList";
import WatchList from "./components/WatchList";
import Billing from "./components/Billing";

const App2 = () => (
  <BrowserRouter>
    <nav style={{ padding: 10 }}>
        <Link to="/">Flowers</Link> <br/>
        <Link to="/watches">Watches</Link> <br/>
        <Link to="/billing">Billing</Link> <br/>
    </nav>
    <Routes>
        <Route path="/" element={<FlowerList />} />
        <Route path="/watches" element={<WatchList />} />
        <Route path="/billing" element={<Billing />} />
    </Routes>
  </BrowserRouter>
);

export default App2;
