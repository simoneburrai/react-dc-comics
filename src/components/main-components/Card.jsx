function Card(comic) {
    console.log(comic);
    return <div className="card">
        <div className="img-container">
            <img className="card-image" src={comic.img} alt={comic.series} />
        </div>
        <h3 className="card-title">{comic.series}</h3>
    </div>
}


export default Card;