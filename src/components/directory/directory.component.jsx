import React, { Component } from 'react'

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import sections from '../../data/directory';

export class Directory extends Component {
    constructor(props) {
        super();

        this.state = {
            sections
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem title={title} key={id} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory

