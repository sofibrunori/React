import { Navbar } from "./components/layouts/navbar/Navbar";
import { ItemListConatiner } from "./components/pages/itemListContainer/ItemListConatiner";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListConatiner greeting="Hola react" />
    </div>
  );
}

export default App;
