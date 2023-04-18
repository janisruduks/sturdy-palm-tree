import './navigation.style.css'
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className='title-menu'>
            <h1><Link class='off' to='/'>Home</Link></h1>
            <h1><Link class='off' to='/add'>Add product</Link></h1>
            <h1><Link class='off' to='/show'>See all products</Link></h1>
            <h1></h1>
        </div>
    )
}

export default Navigation;