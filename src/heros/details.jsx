import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

import { heroService} from '@/_services';

function Details({ match }) {
    const { id } = match.params;
    
    const [hero, setHero] = useState(null);


    // functions to build form returned by useForm() hook



    useEffect(() => {
            // get user and set form fields
            heroService.getById(id).then(hero => {
                console.log(id);
                console.log(hero);
                setHero(hero)
            });
    }, []);

    return (
        <div>
            <h5>Name:</h5>
            <h4>{hero && hero.name}</h4>
            <h5>Powers:</h5>
            <h4>{hero && hero.powers}</h4>
            <h5>Rate:</h5>
            <h4>{hero && hero.rate}</h4>

            <Link to={`../`} className="btn btn-sm btn-secondary  mr-1">Back</Link>
            
        </div>
    );
}

export { Details };