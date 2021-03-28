import './App.css';
import Search from "./containers/Search";

function App() {
  return (
    <section id="search-section">
    <div class="container-fluid">
        <h1 class="text-center">Hoogle</h1>
          <Search />
    </div>
  </section>
  );
}

export default App;
