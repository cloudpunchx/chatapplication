// ChatRoomList.jsx
import "./chatRoomList.scss";

function ChatRoomList({onRoomSelect, currentRoom}) {
    const rooms = ["General", "Tech Talk", "Random"];

    return (
        <div>
            <h2 className="chat-room-header">Open Chat Rooms</h2>
            <ul>
                {rooms.map((room) => (
                    <li
                        key={room}
                        onClick={() => onRoomSelect(room)}
                        className={`chat-room-item ${
                            currentRoom === room ? "active" : ""
                        }`}
                    >
                        {room}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChatRoomList;
