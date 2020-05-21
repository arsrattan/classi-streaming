import Peer from "simple-peer";

export function createPeer(userToSignal, callerID, stream, socketRef) {
    const peer = new Peer({
        initiator: true,
        trickle: false,
        stream,
    });

    peer.on("signal", signal => {
        socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
    })

    return peer;
}

export function addPeer(incomingSignal, callerID, stream, socketRef) {
    const peer = new Peer({
        initiator: false,
        trickle: false,
        stream,
    })

    peer.on("signal", signal => {
        socketRef.current.emit("returning signal", { signal, callerID })
    })

    peer.signal(incomingSignal);

    return peer;
}