import React from 'react';
import Card from '../Card/Card'
import './Cardlist.scss';

const Cardlist = props => {
    return (
        <div className="card-list">
            {props.monster.map(monster  => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    )
}

export default Cardlist
