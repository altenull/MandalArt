import React from 'react';
import Mandal from './Mandal';

const MandalList = ({data, currentUser, handleRemove}) => {
    const mandalList = data.map((data, i) =>
        <Mandal
            data={data}
            ownership={(data.writer === currentUser)}
            onRemove={handleRemove}
            key={data._id}
            index={i}
        />
    );

    return(
        <div>
            {mandalList}
        </div>
    );
}

export default MandalList;