import React, { useCallback, useState } from 'react';
import PeopleManagement from './people-mgmt';
import './style.scss';

const Splitter = () => {
    const [people, setPeople] = useState<string[]>([]);
    const personAdded = useCallback((name: string) => {
        setPeople([...people, name]);
    }, [people]);
    console.log(people);
    return (
        <div className="splitter">
            <PeopleManagement onPersonAdded={personAdded}/>
            <table>
                <thead>
                    <tr>
                        {
                            people.map((name, i) => (<th key={i}>{name}</th>))
                        }
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default Splitter;