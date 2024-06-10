import { Footer, Jobs, NavBar, Search, Value } from "./Components";

const App = () => {
  return (
    <div className="w-[90%] m-auto bg-white">
      <NavBar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  );
};

export default App;
