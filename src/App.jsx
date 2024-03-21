// App.jsx
import React, {useState, useEffect} from "react";
import Cookies from "js-cookie";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import UsernameModal from "./components/UsernameModal/UsernameModal";
import ChatRoomView from "./views/ChatRoomView/ChatRoomView";
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
        <BrowserRouter>
            <div className="app-container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            !username ? (
                                <UsernameModal
                                    onSubmitUsername={handleSubmitUsername}
                                />
                            ) : (
                                <Navigate replace to="/chat" />
                            )
                        }
                    />
                    <Route
                        path="/chat"
                        element={
                            <ChatRoomView
                                currentRoom={currentRoom}
                                setCurrentRoom={setCurrentRoom}
                                handleSendMessage={handleSendMessage}
                                handleResetUsername={handleResetUsername}
                            />
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
