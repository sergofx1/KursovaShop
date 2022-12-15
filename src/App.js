
import { Route,Router,Switch } from 'react-router-dom';
import MainRoutes from './Components/MainRoutes';
import BinComponent from './Components/Bin/BinComponent';
function App() {
 
 

 
 
 
 
 
 
 
  return (

    <div>

 




<Switch>

          <Route path="/Bin" component= {BinComponent} />
          <Route path="/" component= {MainRoutes} />


</Switch>




    


  
</div>

  

   
  );
}

export default App;
