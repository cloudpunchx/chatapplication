// MessageList.jsx
import React from "react";
import "./messageList.scss";
import ChatMessage from "../ChatMessage/ChatMessage";

function MessageList({currentRoom}) {
    const messages = [
        {id: 1, sender: "Jane Doe", text: "Hello, everyone!", time: "10:00 AM"},
        {id: 2, sender: "John Doe", text: "Hi there!", time: "10:05 AM"},
        {
            id: 3,
            sender: "Me",
            text: "Glad to join the conversation!",
            time: "10:10 AM",
        },
    ];

    return (
        <div className="message-list-container">
            <h2>{currentRoom}</h2>
            <div className="message-list">
                {messages.map((msg) => (
                    <ChatMessage
                        key={msg.id}
                        sender={msg.sender}
                        text={msg.text}
                        time={msg.time}
                        className={msg.sender === "Me" ? "mine" : "theirs"}
                    />
                ))}
            </div>
        </div>
    );
}

export default MessageList;
