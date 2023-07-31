import React from 'react';
import { useSelector } from 'react-redux';

export default function Users() {
    const arr = useSelector((state) => state.dataReducer);
    console.log(arr);
    return (
        <div>
            {
                arr.map((item) => (
                    <h1 key={item.id}> <span>{item.id}</span> {item.name}</h1>
                ))
            }
        </div>
    );
}
