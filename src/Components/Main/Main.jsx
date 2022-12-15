import "./reset.css"
import "./style.scss"
import Product from "../Product/Product"


import { useState, useEffect } from "react";


function Main ()  {

  

// const [productsList , setProductsList] = useState([

//     {id:1, name:"Hator Rockfall TKL", img:"../img/keyboard1.jpg", description: "Keyboard", price:52.69
//   },
  
//     {id:2, name:"Razer BlackWidow Lite", img:"../img/keyboard2.jpg", description: "Keyboard", price:122.12
//   },
  
//   {id:3, name:"Glorius GMMK TKL", img:"../img/keyboard3.jpg", description: "Keyboard", price:177.29},
     
//   {id:4, name:"Logitech G915 TKL", img:"../img/keyboard4.jpg", description: "Keyboard", price:270.99},




  
//   {id:5, name:"Razer DeathAdder V3", img:"../img/mouse1.jpg", description: "Mouse", price: 120.17
// },

//   {id:6, name:"Glorious Model O", img:"../img/mouse2.jpg", description: "Mouse", price:90.99
// },

// {id:7, name:"Logitech G PRO X", img:"../img/mouse3.jpg", description: "Mouse", price:200.19},
   
// {id:8, name:"Hator Pulsar Essential", img:"../img/mouse4.jpg", description: "Mouse", price:50.99},


// {id:9, name:"Logitech G335 Wired",img:"../img/headphones1.jpg", description: "Headphones", price: 120.11

// },

//   {id:10, name:"Razer Blackshark V2",img:"../img/headphones2.jpg", description: "Headphones", price:222.99
// },

// {id:11, name:"EPOS H3", img:"../img/headphones3.jpg",description: "Headphones", price:302.77},
   
// {id:12, name:"SteelSeries Arctis 3",img:"../img/headphones4.jpg", description: "Headphones", price:99.99}


//   ]);

//   const [binList, setBinList] = useState(setOrNull());
//     const [update, setUpdate] = useState(0);
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     localStorage.setItem('orderList', JSON.stringify(binList))
//     getTotal();
//     console.log(binList);
// }, [update]);

// async function getTotal() {
//   let total = 0;
//   await binList.forEach(order => {
//       total += Number(order.count) * Number(productsList[binList.indexOf(order)].price);
//   })
//   setTotal(total)
// }
// function setOrNull() {
//   if (localStorage.getItem('orderList') === null){
//       let order = [];
//       productsList.forEach(product => {
//           order.push({id: product.id, count:0})
//       })
//       return order
//   }
//   else {
//       return JSON.parse(localStorage.getItem('orderList'));
//   }
// }

// const addItemToOrder = (id) =>(e) => {
//   console.log('qwe')
//   e.preventDefault()
//   console.log(binList)
//   binList.forEach(item => {
//           if(item.id == id){
//               item.count++;
//               console.log("++");
//               setUpdate(update+1);
//           }
//       }
//   )
// }
// // const removeItemFromOrder = (id) =>(e) => {
// //   e.preventDefault()
// //   binList.forEach(item => {
// //           if(item.id == id){
// //               if(item.count > 0){
// //                   item.count--;
// //                   console.log("--");
// //                   setUpdate(update+1);
// //               }
// //           }
// //       }
// //   )
// // }
  
  
 




return(

  <>
  <div>   
       <div className="about" id="about">
        <div className="about__header">
          <h2>About us</h2>
          <p> Lorem ipsum is placeholder text commonly</p>
        </div>
        <div className="about__body">
          <div className="about__text">
            <h3>The client and the product that best meets his needs</h3>
            <p> We make every effort to create the best opportunity to make the right and informed choice. Сontinues in stores, where our priority is to give visitors the opportunity to personally evaluate the qualities of the products of interest and, accordingly, to make a purchase decision based not on the inscriptions on the packaging, but on personal experience.</p>
          </div>
          <div className="about__image"> <img src="../img/mouse.png" alt="" /></div>
        </div>
      </div><div className="product" id="shop">

          <div className="product__header">

            <h2>Product</h2><a href=""><img src="../img/filter.png" alt="" />
              <p>Filter</p></a>
          </div>
          <div className="product__body">
</div>
     
</div>
</div>


<Product variant="main"/>
{/* <div className= "product">
<div className="product__body">
{
  productsList.map((product, index) =>(
    <div className="product__card" key={product.id}> <img src= {product.img} alt=""/>
    <h3>{product.name}</h3><span>{product.description}</span>
    <p>{product.price}</p><a href="" onClick={addItemToOrder(product.id)}><img src="../img/plus.png" alt=""/>
      <p>Add to Cart</p></a>
      <a href=""> ++</a>
  </div>

  ))

}
</div>
</div> */}

</>








)
   

  
  


    


  
  

} 

            
           

            





  
  

          











    






export default Main;