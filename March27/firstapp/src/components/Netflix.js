const Netflix=(props)=>{
    return(
        <div id="Netflix">            
            <div className="netflix-child orange">
                <img className="images" src={props.imageSRC[0]} alt={props.alt} />
            </div>
            <div className="netflix-child blue">
                <img className="images" src={props.imageSRC[1]} alt={props.alt} />
            </div>
            <div className="netflix-child orange">
                <img className="images" src={props.imageSRC[2]} alt={props.alt} />
            </div>
            <div className="netflix-child blue">
                <img className="images" src={props.imageSRC[3]} alt={props.alt} />
            </div>
            <div className="netflix-child orange">
                <img className="images" src={props.imageSRC[4]} alt={props.alt} />
            </div>
        </div>
    );
}
export default Netflix;