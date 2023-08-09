import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/style.css';

export default function Users() {
    const arr = useSelector((state) => state.dataReducer);

    return (
        <div className="users-container">
            <table className="users-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}
