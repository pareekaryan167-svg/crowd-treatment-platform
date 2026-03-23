function statsCard({title , value}){
    return(
        <div className="card p-3 m-2">
            <h5>{title}</h5>
            <h2>{value}</h2>
            </div>
    );
}
export default statsCard;