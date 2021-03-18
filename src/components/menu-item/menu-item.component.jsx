import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title,imageSrc,history,linkUrl,match}) => (
    <div 
    
         className='menu-item' onClick={()=>history.push(`${match.url}${linkUrl}`)}>
  
<div className='background-image' style={{
            backgroundImage:`url(${imageSrc})`
        } } 
        />




    <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>shop now</span>
    </div>

</div>
    
);
export default withRouter(MenuItem);