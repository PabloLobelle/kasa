import { useState } from 'react';

function Dropdown (props) {
    const [drop, setDrop] = useState(false);
    
    const handleClick = () => setDrop(!drop);
    
    return (
        <div>
            <div onClick={handleClick}>
                <div>{props.title}</div>
                {drop ? <i class="fa-solid fa-chevron-down"></i> : <i class="fa-solid fa-chevron-up"></i>}
            </div>
            {drop && <div className="content"> {props.content} </div>}
        </div>
    )
}

export default Dropdown;









            
