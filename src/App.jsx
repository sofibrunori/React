import { Navbar } from "./components/layouts/navbar/Navbar";
import { ItemListConatiner } from "./components/pages/itemListContainer/ItemListConatiner";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListConatiner greeting="Hola, como estas?" />
    </div>
  );
}

export default App;
