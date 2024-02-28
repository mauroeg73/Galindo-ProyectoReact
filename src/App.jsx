import ItemCountContainer from "./components/common/itemCount/ItemCountContainer";
import { Navbar } from "./components/layout/Navbar";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ItemCountContainer stock={10} />
    </div>
  );
};

export default App;
