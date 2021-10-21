import React from 'react';
import './index.scss';

const Card = (props) => {
    const {image, heading, list} = props.data;
    return (
        <div className="class-body">
           <div>
               <div className={'imageBox'}>
               <img width={"100%"} height={"100%"} src={image} alt=""/>
               </div>
           </div>
            <div>
                <h3>{heading}</h3>
           </div>
            <div className={'list'}>
                {list.map(item=><li className="color-gray-2">{item}</li>)}
           </div>
        </div>
    )
};

export default Card;
