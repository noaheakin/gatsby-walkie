import React from 'react';
import { Link } from 'gatsby';

const Phone = () => {
    return(
        <div>
            <p className="text-center text-4xl text-red-300 my-10">123-456-7890</p>
            <Link to='/'>
                <button className="flex justify-center">Return Home</button>
            </Link>
            
        </div>
    )
}

export default Phone;