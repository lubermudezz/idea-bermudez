import { useEffect, useState } from "react"
import { Data as itemData } from "../Data"
import { Item } from "../ItemDetail"

const ItemDetailContainer = (props) => {
   const [items, setItems] = useState([])

   useEffect(() => {
       const getItems = new Promise((res, rej) => {
           setTimeout(() => {
            res(itemData)
           }, 2000)
       })
       getItems.then((res) => {
           console.log('Completada')
           setItems(res)
       }).catch((err) => {
           console.log('Error', err)
       })
   })

 
   
    return(
        <>
      <h1>Hola soy el componente {props.name}</h1>
        <div>{items.map(item => <Item key={item.id} itemData={item}/>)}</div>
        </>
    )
}

export default ItemDetailContainer