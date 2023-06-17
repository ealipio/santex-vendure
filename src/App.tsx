import ProductList from './components/ProductList';
import Header from './components/Header';

function App() {
  return (
    <div className="w-full md:container bg-zinc-200 antialiased md:p-0">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
