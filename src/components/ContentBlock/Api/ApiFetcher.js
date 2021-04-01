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







// export default function MyComponent() {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);

//     // Примечание: пустой массив зависимостей [] означает, что
//     // этот useEffect будет запущен один раз
//     // аналогично componentDidMount()
//     useEffect(() => {
//         fetch("https://watchlater.cloud.technokratos.com/get/array")
//         .then(res => console.log(res))
        
//         .then(
//             (result) => {
//             setIsLoaded(true);
//             setItems(result);
//             },
//             // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
//             // чтобы не перехватывать исключения из ошибок в самих компонентах.
//             (error) => {
//             setIsLoaded(true);
//             setError(error);
//             }
//         )
//     })

    

//     if (error) {
//         return <div>Ошибка: {error.message}</div>;
//     } else if (!isLoaded) {
//         return <div>Загрузка...</div>;
//     } else {
//         return (
        
        
//         <ul>
//             {items.map(item => (
//             <li key={item.id}>
//                 {item.id}
//             </li>
//             ))}
//         </ul>
//         );
//     }
// }








// function MyComponent() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   // Примечание: пустой массив зависимостей [] означает, что
//   // этот useEffect будет запущен один раз
//   // аналогично componentDidMount()
//   useEffect(() => {
//     fetch("https://api.example.com/items")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
//         // чтобы не перехватывать исключения из ошибок в самих компонентах.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//   }