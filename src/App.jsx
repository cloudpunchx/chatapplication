// App.jsx
import React, {useState, useEffect} from "react";
import Cookies from "js-cookie";

import SiteLogo from "./components/SiteLogo/SiteLogo";
import UsernameModal from "./components/UsernameModal/UsernameModal";
import ChatRoomList from "./components/ChatRoomList/ChatRoomList";
import MessageList from "./components/MessageList/MessageList";
import MessageInput from "./components/MessageInput/MessageInput";
import ExitChatroomBtn from "./components/ExitChatroomBtn/ExitChatroomBtn";
import "./App.scss";

function App() {
    const [currentRoom, setCurrentRoom] = useState("General");
    const [username, setUsername] = useState("");

    useEffect(() => {
        const storedUsername = Cookies.get("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleRoomSelect = (room) => setCurrentRoom(room);

    const handleSendMessage = (message) => {
        console.log(`Sending message: ${message}`); // Placeholder for now
    };

    const handleSubmitUsername = (username) => {
        setUsername(username);
        Cookies.set("username", username, {expires: 0.25}); // Expires in 6 hours
    };

    const handleResetUsername = () => {
        setUsername("");
        Cookies.remove("username");
    };

    return (
        <div className="app-container">
            {!username && (
                <UsernameModal onSubmitUsername={handleSubmitUsername} />
            )}
            {username && (
                <>
                    <aside className="sidebar">
                        <SiteLogo size="medium" />
                        <ChatRoomList onRoomSelect={handleRoomSelect} />
                        <ExitChatroomBtn
                            onExitConfirmed={handleResetUsername}
                        />
                    </aside>
                    <main className="chat-area">
                        <MessageList currentRoom={currentRoom} />
                        <MessageInput onSendMessage={handleSendMessage} />
                    </main>
                </>
            )}
        </div>
    );
}

export default App;
