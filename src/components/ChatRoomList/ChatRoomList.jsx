function ChatRoomList({onRoomSelect}) {
    const rooms = ["General", "Tech Talk", "Random"]; // Placeholder data

    return (
        <ul>
            {rooms.map((room) => (
                <li key={room} onClick={() => onRoomSelect(room)}>
                    {room}
                </li>
            ))}
        </ul>
    );
}

export default ChatRoomList;
