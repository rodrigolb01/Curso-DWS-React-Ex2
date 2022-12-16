import React from 'react'
import './Item.sass'
import { faLink, faUser, faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Item = (props: any) => {
    return (
        <div className='item'>
            <div>
                <div>
                    <FontAwesomeIcon icon={faUser} />
                    {props.author}
                </div>
                <div>
                    <FontAwesomeIcon icon={faBook} />
                    {props.title}
                </div>
                <div>
                    <FontAwesomeIcon icon={faLink} />
                    {props.url}
                </div>
            </div>
            <div>
                rating
            </div>
        </div>
    )
}

export default Item