import Card from "./main-components/Card";


function Main({ comics }) {
    return <main>
        <div className="jumbo-container">
        </div>
        <div className="card-container">
            <h2>Current Series</h2>
            {comics.map((comic) => {
                return <Card key={comic.id} series={comic.series} img={comic.thumb} />
            })}
        </div>
    </main>
}


export default Main;