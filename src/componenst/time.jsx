function Time(){

    let time = new Date();
    return <p className="lead">
        current Date :
        {time.toLocaleDateString()}
        <br></br>
        current Time :
        
        {time.toLocaleTimeString()}
    </p>
}
export default Time