
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes/AllRoutes';
import Layoute from './components/layoutes/Layoute';


function App() {
  return (
   <BrowserRouter>
   <Layoute>
   <AllRoutes/>

   </Layoute>
   </BrowserRouter>
  );
}

export default App;
