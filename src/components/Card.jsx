import "./card.css"

export default function Card( {task} ){
    return (
        <div className="card">
            <div className="card-id"> {task.id} </div>
            <div className="card-heading"> {task.title} </div>
            <div>
                {
                 task.tag.map(t => <div className="card-tag"> {t} </div>)
                }
            </div>

        </div>
    );
}

