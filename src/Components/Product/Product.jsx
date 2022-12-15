import "./style.scss"
import { useState, useEffect } from "react";

function Product(props) {
    const [productsList , setProductsList] = useState([

        {id:1, name:"Hator Rockfall TKL", img:"../img/keyboard1.jpg", description: "Keyboard", price:52.69
      },
      
        {id:2, name:"Razer BlackWidow Lite", img:"../img/keyboard2.jpg", description: "Keyboard", price:122.12
      },

      {id:3, name:"Razer DeathAdder V3", img:"../img/mouse1.jpg", description: "Mouse", price: 120.17
    },
    
      {id:4, name:"Glorious Model O", img:"../img/mouse2.jpg", description: "Mouse", price:90.99
    }
    
    
   

      ]);
    
      const [binList, setBinList] = useState(setOrNull());
        const [update, setUpdate] = useState(0);
      const [total, setTotal] = useState(0);
    
      useEffect(() => {
        localStorage.setItem('orderList', JSON.stringify(binList))
        getTotal();
        console.log(binList);
    }, [update]);
    
    async function getTotal() {
      let total = 0;
      await binList.forEach(order => {
          total += Number(order.count) * Number(productsList[binList.indexOf(order)].price);
      })
      setTotal(total)
    }
    function setOrNull() {
      if (localStorage.getItem('orderList') === null){
          let order = [];
          productsList.forEach(product => {
              order.push({id: product.id, count:0})
          })
          return order
      }
      else {
          return JSON.parse(localStorage.getItem('orderList'));
      }
    }
    
    const addItemToOrder = (id) =>(e) => {
      console.log('qwe')
      e.preventDefault()
      console.log(binList)
      binList.forEach(item => {
              if(item.id == id){
                  item.count++;
                  console.log("++");
                  setUpdate(update+1);
              }
          }
      )
    }
    const removeItemFromOrder = (id) =>(e) => {
      e.preventDefault()
      binList.forEach(item => {
              if(item.id == id){
                  if(item.count > 0){
                      item.count--;
                      console.log("--");
                      setUpdate(update+1);
                  }
              }
          }
      )
    }
    if(props.variant == "main"){
        return(
            <>
        <div className= "product">
    <div className="product__body">
    {
    productsList.map((product, index) =>(
    <div className="product__card" key={product.id}> <img src= {product.img} alt=""/>
    <h3>{product.name}</h3><span>{product.description}</span>
    <p>{product.price}</p><a href="" onClick={addItemToOrder(product.id)}><img src="../img/plus.png" alt=""/>
    <p>Add to Cart</p></a>
    </div>

    ))

    }
    </div>
    </div>
    </>
        )
    }
    else if(props.variant == "bin"){
        return(
            <>
            {
            productsList.map((product, index) =>(
            <div class="forms__product" key={product.id}><img src={product.img} alt=""/>
      <div class="products__aboutbread"> 
        <h3>{product.name}</h3><span>{product.description}</span>
        <p>$22.69</p><p>{binList[index].count}</p><a href=""><img src="img/trash.png" alt="" onClick={removeItemFromOrder(product.id)}/></a>
      </div>
    </div>
        ))
            }
            <div class="forms__total"> 
      <p>Total: {total}$</p>
    </div>
    </>
    )
}
}

export default Product;