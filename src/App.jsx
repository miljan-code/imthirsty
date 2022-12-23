import { Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent/MainContent';

import Layout from './layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainContent />} />
      </Route>
    </Routes>
  );
};

export default App;
