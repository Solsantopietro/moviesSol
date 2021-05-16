import './CardTv.scss';


const CardTv = ({ title, image }) => {
    return (
        <div className="CardTv">
            <img src={`https://image.tmdb.org/t/p/w500${image}`}/>
            <h3>{title}</h3>
        </div>
    )
}

export default CardTv; 