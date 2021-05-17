import './CardMedia.scss';


const CardMedia = ({ title, image }) => {
    return (
        <div className="CardMedia">
            <img src={`https://image.tmdb.org/t/p/w500${image}`}/>
            <h3>{title}</h3>
        </div>
    )
}

export default CardMedia;
