import { Navbar } from "./components/layouts/navbar/Navbar";
import { Cart } from "./components/pages/itemListContainer/cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router";
import { ItemListConatiner } from "./components/pages/itemListContainer/itemListContainer/ItemListConatiner";
/*import { ItemDetail } from "./components/pages/itemListContainer/itemDetail/ItemDetail";*/

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListConatiner />} />
        <Route path="/category/:name" element={<ItemListConatiner />} />
        <Route path="/cart" element={<Cart />} />
        {/*<Route path="/itemDetail/:id" element={<ItemDetail />} />*/}
        <Route path="*" element={<h2>404 Not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
