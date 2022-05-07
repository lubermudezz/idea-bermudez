
export const Item = ({itemData}) => {
    return (
        <div style ={{border: 'solid blue 3px', margin: '10px'}}>
            <strong>{itemData.name}</strong>
            <div>
               <p>{itemData.description}</p> 
               <p>{itemData.price}</p>
                
            </div>
            <img src={itemData.image} height="300" width="500"></img>
        </div>
    )

};

