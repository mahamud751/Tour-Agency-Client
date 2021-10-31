import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
// ;

const MyEvent = () => {

    const { user } = useAuth()
    const [users, setUsers] = useState([])
    console.log(user)
    useEffect(() => {
        fetch('https://floating-wave-05722.herokuapp.com/bookingPackage')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const single = users.find(pd => pd.email !== user.displayName)



    return (
        <div>
            <p>{single?.name}</p>
            <p>{single?.number}</p>
            <p>{single?.date}</p>
            <p>{single?.address}</p>
        </div >
    );
};

export default MyEvent;