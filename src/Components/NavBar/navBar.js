import React from 'react';
import { MdHome, MdMailOutline, MdGrade, MdSettings, MdAccountCircle} from 'react-icons/md';
import '../NavBar/navBar.css';
  
const navBar = () => {
    return <div className='container'>
        <div className='row'>
            <div className='col'>
                <MdHome size="2em"/>
                <p>Home</p>
            </div>
            <div className='col'>
                <MdMailOutline size='2em'/>
                <p>Messages</p>
            </div>
            <div className='col'>
                <MdGrade size='2em'/>
                <p>Wishlist</p>
            </div>
            <div className='col'>
                <MdSettings size='2em'/>
                <p>Settings</p>
            </div>
            <div className='col'>
                <MdAccountCircle size='2em'/>
                <p>Myaccount</p>
            </div>
        </div>
        
    </div>
}

export default navBar;