import * as React from 'react';
import {Link} from 'react-router-dom';


export interface IMainHeader {}

const MainHeader: React.FC<IMainHeader> = () => {
    return (
        <header>
            <nav>
            <ul>
                <li><Link to='/'>Welcome</Link></li>
                <li><Link to='/CardsDisplayPage'> Cards Dispaly</Link></li>
            </ul>
        </nav>
    
    </header>
    )
        
};

export default MainHeader;