// MessageList.jsx
import React from "react";
import "./messageList.scss";
import ChatMessage from "../ChatMessage/ChatMessage";

function MessageList({currentRoom, onReact}) {
    const messages = [
        {id: 1, sender: "Jane Doe", text: "Hello, everyone!"},
        {id: 2, sender: "John Doe", text: "Hi there!"},
        {id: 3, sender: "Me", text: "Glad to join the conversation!"},
    ];

    return (
        <div className="message-list-container">
            <h2>{currentRoom}</h2>
            <div className="message-list">
                {messages.map((msg) => (
                    <ChatMessage
                        key={msg.id}
                        text={`${msg.sender}: ${msg.text}`}
                        onReact={(emoji) => onReact(msg.id, emoji)}
                        className={msg.sender === "Me" ? "mine" : "theirs"}
                    />
                ))}
            </div>
        </div>
    );
}

export default MessageList;
