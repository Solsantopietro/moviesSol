import './CardMovies.scss';


const CardMovies = ({ title, image }) => {
    return (
        <div className="CardMovies">
            <img src={`https://image.tmdb.org/t/p/w500${image}`}/>
            <h3>{title}</h3>
        </div>
    )
}

export default CardMovies;
