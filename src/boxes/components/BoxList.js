import React from 'react';
import BoxItem from './BoxItem';
import Card from '../../shared/components/UIElements/Card';
import './BoxList.css';

const UsersList = props => {
    if (props.items.length === 0) {
        return (
            <div>
                <Card>
                    <h2>No boxes found.</h2>
                </Card>
            </div>
        );
    }
    return <ul className="box-list">
        {props.items.map(box => {
            return <BoxItem key={box.id} id={box.id} image={box.image} name={box.name} boxCount={box.items} />
        })}
    </ul>

};

export default UsersList