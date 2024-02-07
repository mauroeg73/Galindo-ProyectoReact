import { Navbar } from "./components/layout/Navbar";
import { ItemListContainer } from "./pages/ItemListContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Locotes Indumetaria" />
    </div>
  );
};

export default App;
