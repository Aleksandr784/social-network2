import React from 'react';
import styles from './users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
    props.setUsers([
        {
            id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2nqycEuvFWplOxMW7reqJ41Iz6asEaSnH15Nl5Dv9TixSKWHs&usqp=CAU',
            followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' }
        },
        {
            id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5wAdWj3FZmPYPPAu1VgIoVOWpa6nTCz7xO31X-ss6sE20tA7z&usqp=CAU',
            followed: true, fullName: 'Sasha', status: 'I am a boss too', location: { city: 'Berlin', country: 'Germany' }
        },
        {
            id: 3, photoUrl: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1350,w_2400,x_0,y_303/f_auto,q_auto,w_1100/v1576269707/shape/mentalfloss/610356-gettyimages-1018078858.jpg',
            followed: false, fullName: 'Andrew', status: 'I am a boss too yo', location: { city: 'Kiev', country: 'Ukrainian' }
        },

    ]

    
    )
}

    return <div>
        hhh
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.cicty}</div>
                </span>


            </div>)
        }
    </div>
}

export default Users;