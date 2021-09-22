// Official (components | stylesheets)
import React from 'react';
import ISocial from './ISocial';

export default function Social({ social }: { social: ISocial }) {
    return (
        <a className="social mx-2 mx-md-3 rounded-lg" href={social.href}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d={social.path} />
            </svg>
        </a>
    )
}
