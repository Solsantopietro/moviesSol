import './CardMovies.scss';


const CardMovies = ({ title, image }) => {
    return (
        <div className="CardMovies">
            <img src={image}/>
            <h3>{title}</h3>
        </div>
    )
}

export default CardMovies;
