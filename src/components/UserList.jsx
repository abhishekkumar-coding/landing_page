import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserList() {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    const [filteredUsers, setFilteredUsers] = useState([])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            setUsers(res.data)
            filteredUsers(res.data)
        })
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);
        setFilteredUsers(users.filter((user) => user.name.toLowerCase().includes(query)));

    }

    return (
        <div className='flex w-full p-10 flex-col items-center'>
            <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={handleSearch}
                className="border p-2 rounded mx-auto w-full md:w-1/2 mb-10"
            />
            <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-6">
                {filteredUsers.map((user, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 hover:scale-105 transition-all duration-300"
                    >
                        <h2 className="text-xl font-semibold">{user.name}</h2>
                        <p className="mt-2 text-gray-600">{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserList