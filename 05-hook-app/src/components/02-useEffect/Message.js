import React, { useEffect, useState } from 'react'

export const Message = ({guest}) => {

    const [coords, setCoords] = useState({x: 0, y: 0});
    const {x, y} = coords;

    useEffect(() => {
        console.log(`%c⮞⮞${'Message component mount'} [Message useEffect]`, 'color: #ffffff; background: green; padding: 2px');

        const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y};
            setCoords(coords)
        }
        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log(`%c⮞⮞${'Message component amount'} [Message useEffect]`, 'color: #ffffff; background: darkred; padding: 2px');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <>
            <div className="alert alert-info" role="alert">
            Hello, {guest} this is a message...
            </div>

            <ul className="list-group">
                <li className="list-group-item active" aria-current="true">And these are the coords of the mouse</li>
                <li className="list-group-item"><b>X:</b> {x}</li>
                <li className="list-group-item"><b>Y:</b> {y}</li>
            </ul>

        </>
    )
}
