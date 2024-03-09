// ChatRoomList.jsx
import "./chatRoomList.scss";

function ChatRoomList({onRoomSelect, currentRoom}) {
    const rooms = ["General", "Tech Talk", "Random"];

    return (
        <ul>
            {rooms.map((room) => (
                <li
                    key={room}
                    onClick={() => onRoomSelect(room)}
                    className={currentRoom === room ? "active" : ""}
                >
                    {room}
                </li>
            ))}
        </ul>
    );
}

export default ChatRoomList;
