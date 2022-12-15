import { Routes, Route } from 'react-router-dom';
import Cocktail from './components/Showcase/Showcase';
import Layout from './layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Cocktail />} />
      </Route>
    </Routes>
  );
}

export default App;
