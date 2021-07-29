import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './BoxItem.css';


const UserItem = props => {
    return(
        <li className="box-item">
            <Card className="box-item__content">
                <Link to={`/${props.id}/places`}>
                    <div className="box-item__image">
                        <Avatar className="box-item__image" image={props.image} alt={props.name}/>
                    </div>
                    <div className=" box-item__info">
                        <h2>{props.name}</h2>
                        <h3>{props.boxCount} {props.boxCount === 1 ? 'Item' : 'Items'}</h3>
                    </div>
                </Link>
            </Card>
        </li>
    );
};

export default UserItem;