import React, {useState} from "react";
import "./chatMessage.scss";
import EmojiPicker from "emoji-picker-react";

function ChatMessage({text, onReact, className}) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    return (
        <div className={`chat-message ${className}`}>
            <div className="message-content">
                <span>{text}</span>
                <button
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    aria-label="React with emoji"
                    className="emoji-toggle-btn"
                >
                    😊
                </button>
            </div>
            {showEmojiPicker && (
                <div className="emoji-reaction-picker">
                    <EmojiPicker
                        onEmojiClick={(emojiData, event) => {
                            onReact(emojiData.emoji);
                            setShowEmojiPicker(false);
                        }}
                        skinTonesDisabled={true}
                    />
                </div>
            )}
            {/* Placeholder for displaying reactions */}
        </div>
    );
}

export default ChatMessage;
