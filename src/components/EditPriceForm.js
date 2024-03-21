import React, {useState} from 'react'

function EditPriceForm({id, price, }) {

    const [newPrice, setNewPrice] = useState(price)

    function handleSubmit(e) {
        e.preventDefault();


    const editPrice = () => {
        fetch(`http://localhost:6001/plants/${plants.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({price:newPrice}),
            })
            .then(res => {
            if(res.ok) {
            } else {
                console.error('Something is wrong')
            }
            })
            .then(data => {
            console.log('Price change')
            })
    
            .then((res) => res.json())
            .then(onEditPlant)
    
}
return (

    <form onSubmit = {handlesubmit}>
        <input
            value={newPrice}
            onChange={(e) => setNewPrice(parseFloat(e.target.value))}
            type="number"
    </form>
  )
}


export default EditPriceForm;