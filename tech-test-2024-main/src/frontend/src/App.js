import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import { Welcome } from './components/Welcome.tsx'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

function App() {
  const root = document.getElementById("root");
  return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/welcome/:userId" element={<Welcome/>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;
