import React from "react";
import { v1 as uuid } from "uuid";

const CreateRoom = (props) => {

    function startLiveBroadcast() {
        const broadcastId = uuid();
        props.history.push(`/broadcast/${broadcastId}`);
    }

    function createNewRoom() {
        const roomId = uuid();
        props.history.push(`/room/${roomId}`);
    }

    function joinRoom(roomId) {
    }

    return (
        <>
            <button onClick={startLiveBroadcast}>Start Live Broadcast</button>
            <button onClick={createNewRoom}>Create New Private Room</button>
            <button onClick={(roomId) => joinRoom(roomId)}>Join Existing Room</button>
        </>
    );
};

export default CreateRoom;