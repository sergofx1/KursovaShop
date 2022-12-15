
import { Route,Router,Switch } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main'
import Contacts from './Contacts/Constacts';



function MainRoutes(){

 
     
    
     





return(

<>

<Header/>

<Switch>

    <Route path="/" component= {Main} />
   
    </Switch>
    
    <Contacts/>
    </>
    )

}


export default MainRoutes;