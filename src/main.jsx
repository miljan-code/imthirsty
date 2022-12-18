import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { CocktailProvider } from './context/CocktailContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CocktailProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </CocktailProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
