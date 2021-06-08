// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { APIKEY } from '../utils/variables'

// const CategorySection = () => {

//     const params = useParams()
//     const [category, setCategory] = useState([])

//     useEffect(() => {
//         fetch(`https://api.themoviedb.org/3/${params.type}/${params.catalogue}/Catalogue?api_key=${APIKEY}&language=es-ES`)
//             .then(res => res.json())
//             .then(data => setCategory(data.results))
//         }, [])
//         console.log(catalogue)

//     return(
//       <div>
//         {category.map(algo =>
//           <div>
//             <h1>{algo.title}</h1>
//             <h1>{algo.name}</h1>
//           </div>
//         )} 
//        </div>
        
//     )
// }

// export default CategorySection