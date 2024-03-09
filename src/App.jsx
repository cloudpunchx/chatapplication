import React, {useState} from "react";
import ChatRoomList from "./components/ChatRoomList/ChatRoomList";
import MessageList from "./components/MessageList/MessageList";
import MessageInput from "./components/MessageInput/MessageInput";
import "./App.scss";

function App() {
    const [currentRoom, setCurrentRoom] = useState("General");

    const handleRoomSelect = (room) => {
        setCurrentRoom(room);
    };

    const handleSendMessage = (message) => {
        console.log(`Sending message: ${message}`); // Placeholder action for now
    };

    return (
        <div className="app-container">
            <aside className="sidebar">
                <ChatRoomList onRoomSelect={handleRoomSelect} />
            </aside>
            <main className="chat-area">
                <MessageList currentRoom={currentRoom} />
                <MessageInput onSendMessage={handleSendMessage} />
            </main>
        </div>
    );
}

export default App;
