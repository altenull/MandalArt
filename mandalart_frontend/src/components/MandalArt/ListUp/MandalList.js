import React from 'react';
import Mandal from './Mandal';

const MandalList = ({data, currentUser}) => {
    const mandalList = data.map((data) =>
        <Mandal
            data={data}
            ownership={(data.writer === currentUser)}
            key={data._id}
        />
    );

    return(
        <div>
            {mandalList}
        </div>
    );
}

export default MandalList;