
export const Item = ({itemData}) => {
    return (
        <div style ={{border: 'solid blue 3px', margin: '10px'}}>
            <strong>{itemData.name}</strong>
            <div>{itemData.tamaño}</div>
        </div>
    )

};

