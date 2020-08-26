import React, {FunctionComponent} from 'react';

type CardProps = {
    title: string,
    paragraph: string
}


const Card: FunctionComponent<CardProps> = ({title, paragraph}) => 
<div>
    <h2>{title}</h2>
    <p>{paragraph}</p>
</div>


export default Card

