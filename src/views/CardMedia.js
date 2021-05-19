import './CardMedia.scss';


const CardMedia = ({ title, image, name }) => {
    return (
        <div className="CardMedia">
            <img src={`https://image.tmdb.org/t/p/w500${image}`}/>
            <h3>{title}</h3>
            <h3>{name}</h3>

        </div>
    )
}

export default CardMedia;
