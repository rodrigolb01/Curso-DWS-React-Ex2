import React from 'react'
import './Item.sass'
import { faLink, faUser, faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Item = (props: any) => {
    return (
        <div className='container-item'>
            <div>
                <div className='line'>
                    <div className='item'>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className='text'>
                        {props.author}
                    </div>
                </div>
                <div className='line'>
                    <div className='item'>
                        <FontAwesomeIcon icon={faBook} />
                    </div>
                    <div className='text'>
                        {props.title}
                    </div>
                </div>
                <div className='line'>
                    <div className='item'>
                        <FontAwesomeIcon icon={faLink} />
                    </div>
                    <div className='text'>
                        {props.url}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item