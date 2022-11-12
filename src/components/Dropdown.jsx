import { useState } from 'react';
import '../style/dropdown.css'

function Dropdown (props) {
    const [drop, setDrop] = useState(false);
    
    const handleClick = () => setDrop(!drop);
    
    return (
        <div className='dropdown'>
            <div onClick={handleClick} className='dropTitleContainer'>
                <div className="dropTitle">{props.title}</div>
                {drop ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>}
            </div>
            <div className='dropContentContainer'>
                {drop && <div className="dropContent"> {props.content} </div>}
            </div>
        </div>
    )
}

export default Dropdown;









            
