import React from 'react';
import Mandal from './Mandal';

const MandalList = ({data, currentUser, handleRemove, deleteID, handleStar}) => {
    const mandalList = data.map((data, i) =>
        <Mandal
            data={data}
            ownership={(data.writer === currentUser)}
            onRemove={handleRemove}
            key={data._id}
            index={i}
            deleteID={(data._id === deleteID)}
            onStar={handleStar}
        />
    );

    return(
        <div>
            {mandalList}
        </div>
    );
}

export default MandalList;