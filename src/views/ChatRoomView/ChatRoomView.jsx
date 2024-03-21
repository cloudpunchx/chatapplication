// views/ChatRoomView.jsx
import React from "react";
import SiteLogo from "../../components/SiteLogo/SiteLogo";
import ChatRoomList from "../../components/ChatRoomList/ChatRoomList";
import MessageList from "../../components/MessageList/MessageList";
import MessageInput from "../../components/MessageInput/MessageInput";
import ExitChatroomBtn from "../../components/ExitChatroomBtn/ExitChatroomBtn";

function ChatRoomView({
    currentRoom,
    setCurrentRoom,
    handleSendMessage,
    handleResetUsername,
}) {
    return (
        <>
            <aside className="sidebar">
                <SiteLogo size="medium" />
                <ChatRoomList onRoomSelect={setCurrentRoom} />
                <ExitChatroomBtn onExitConfirmed={handleResetUsername} />
            </aside>
            <main className="chat-area">
                <MessageList currentRoom={currentRoom} />
                <MessageInput onSendMessage={handleSendMessage} />
            </main>
        </>
    );
}

export default ChatRoomView;
