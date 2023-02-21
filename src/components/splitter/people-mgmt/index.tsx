import React, { ChangeEvent, MouseEvent, useCallback, useState } from 'react';

interface Props {
    onPersonAdded: (name: string) => void;
}

const PeopleManagement = (props: Props) => {
    const [name, setName] = useState("");
    const nameChanged = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }, []);

    const addClicked = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(name);
        props.onPersonAdded(name);
        setName('');
    }, [name]);
    return (
        <form>
            <input type="text" name="name" value={name} onChange={nameChanged} placeholder="Name"/>
            <button onClick={addClicked}>Add person</button>
        </form>
    );
}

export default PeopleManagement;