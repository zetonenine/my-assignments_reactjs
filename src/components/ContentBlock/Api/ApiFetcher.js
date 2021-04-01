import { useState, useEffect } from 'react';
import axios from 'axios'

function MyComponent() {
    const url = 'https://watchlater.cloud.technokratos.com/get/array'
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setItems(response.data)
            })
    }, [url])
    
    return (items)
}


export default MyComponent;

