const BBC= (props) => {

    return (
       <div id="BBC">
       <div className="BBC-child">
           <img className="BBC-image" src={props.data[0].imageSRC} alt={props.alt} />
           <br />
           <h2>{props.data[0].title}</h2>
           <p>{props.data[0].paragraph}</p>
           <p>{props.data[0].age}|{props.data[0].cat}|{props.data[0].flag}</p>
       </div>
        <div className="BBC-child">
            <img className="BBC-image" src={props.data[1].imageSRC} alt={props.alt} />
            <br />
            <h2>{props.data[1].title}</h2>
            <p>{props.data[1].paragraph}</p>
            <p>{props.data[1].age}|{props.data[1].cat}|{props.data[1].flag}</p>
        </div>
    
        <div className="BBC-child">
            <img className="BBC-image" src={props.data[2].imageSRC} alt={props.alt} />
            <br />
            <h2>{props.data[2].title}</h2>
            <p>{props.data[2].paragraph}</p>
            <p>{props.data[2].age}|{props.data[2].cat}|{props.data[2].flag}</p>
        </div>
    
        <div className="BBC-child">
            <img className="BBC-image" src={props.data[3].imageSRC} alt={props.alt} />
            <br />
            <h2>{props.data[3].title}</h2>
            <p>{props.data[3].paragraph}</p>
            <p>{props.data[3].age}|{props.data[3].cat}|{props.data[3].flag}</p>
        </div>
        </div>
    );
}
export default BBC;