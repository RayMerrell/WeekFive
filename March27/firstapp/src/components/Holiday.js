const Holiday = (props) =>{
    return(
        <div id="Holiday">
            <div className="holiday-child">
                <img className="holiday-image" src={props.imageSRC[0]} alt={props.alt} />
                <p className="Holiday-description">{props.descriptions[0]}</p>
            </div>
            <div className="holiday-child">
                <img className="holiday-image" src={props.imageSRC[1]} alt={props.alt} />
                <p className="Holiday-description">{props.descriptions[1]}</p>
            </div>
            <div className="holiday-child">
                <img className="holiday-image" src={props.imageSRC[2]} alt={props.alt} />
                <p className="Holiday-description">{props.descriptions[2]}</p>
            </div>
            <div className="holiday-child">
                <img className="holiday-image" src={props.imageSRC[3]} alt={props.alt} />
                <p className="Holiday-description">{props.descriptions[3]}</p>
            </div>
            <div className="holiday-child">
                <img className="holiday-image" src={props.imageSRC[4]} alt={props.alt} />
                <p className="Holiday-description">{props.descriptions[4]}</p>
            </div>
        </div>
    );
}
export default Holiday;