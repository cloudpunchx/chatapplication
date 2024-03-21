// ChatMessage.jsx

import React from "react";
import "./chatMessage.scss";

function ChatMessage({sender, text, time, className}) {
    return (
        <div className={`chat-message ${className}`}>
            <div className="message-content-wrapper">
                <div className="message-content">
                    <strong>{sender}</strong>: {text}
                </div>
            </div>
            <div className="timestamp-wrapper">
                <div className="message-time">{time}</div>
            </div>
        </div>
    );
}

export default ChatMessage;
