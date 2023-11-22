import "./card.css"

export default function Card( {task} ){
    return (
        <div className="card">
            <div className="card-id"> {task.id} </div>
            <div className="card-heading"> {task.title} </div>
            <div className="card-tag"> {task.tag[0] /*TODO: tag is an array*/} </div>
        </div>
    );
}

