import React,{useState}  from 'react';
import Form from './Form';

const Display = (props) => {
    const [isShown, setIsShown] = useState(true);
    const handleClick = event => {
        // 👇️ toggle visibility
        setIsShown(current => !current);
      };
    return (
        <div className="container">
            <div style={{display: isShown ? 'block' : 'none'}}>
           <h1>EMPLOYEE FEEDBACK DATA</h1>
           <div className='box box1'>
                <div className="show-data">
                    Name :  <span> {props.name} </span> | 
                    Department : <span> {props.dept} </span> | 
                    Rating : <span> {props.rate} </span> 
                </div>
            </div>
            <input type="submit" value="Go Back" onClick={handleClick} />
            </div>
            {!isShown ? <Form/>:null}
        </div>
        
      
    );
}

export default Display;