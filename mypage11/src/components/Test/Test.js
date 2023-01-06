import React,{useState} from 'react';



function Test(props) {
    const [menuToggle, menuToggleSet ] = useState(true); 
    const [naviOpen, setnaviOpen ] = useState(false);

    return (
        <div>
             <button className='btn d-md-none' id="allMenu" onClick={ e => {               
            menuToggleSet(!menuToggle);
            const  gnbulclass =  menuToggle ?  'mobileGnb': 'pcGnb';   
            setnaviOpen(!naviOpen)

          }} >햄버거</button>          
        </div>
    );
}

export default Test;