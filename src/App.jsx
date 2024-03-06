import React, {useState} from "react";
import ChatRoomList from "../src/components/ChatRoomList/ChatRoomList.jsx";
import MessageList from "../src/components/MessageList/MessageList.jsx";
import MessageInput from "../src/components/MessageInput/MessageInput.jsx";

function App() {
    const [currentRoom, setCurrentRoom] = useState("General");

    const handleRoomSelect = (room) => {
        setCurrentRoom(room);
    };

    const handleSendMessage = (message) => {
        console.log(`Sending message: ${message}`); // Placeholder action
    };

    return (
        <div>
            <ChatRoomList onRoomSelect={handleRoomSelect} />
            <MessageList currentRoom={currentRoom} />
            <MessageInput onSendMessage={handleSendMessage} />
        </div>
    );
}

export default App;
