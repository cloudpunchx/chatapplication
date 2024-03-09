// MessageInput.jsx
import React, {useState} from "react";
import "./messageInput.scss";
import EmojiPicker from "emoji-picker-react";

function MessageInput({onSendMessage}) {
    const [message, setMessage] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSendMessage(message);
        setMessage(""); // Clear the textarea after sending
    };

    const onEmojiClick = (emojiData, event) => {
        setMessage((prevMessage) => prevMessage + emojiData.emoji);
    };

    const toggleEmojiPicker = () => setShowEmojiPicker(!showEmojiPicker);

    return (
        <form onSubmit={handleSubmit} className="message-input-container">
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                rows="1"
            ></textarea>
            <div className="emoji-picker-container">
                {showEmojiPicker && (
                    <EmojiPicker
                        onEmojiClick={onEmojiClick}
                        height={400}
                        width={350}
                        skinTonesDisabled={true}
                    />
                )}
                <button
                    type="button"
                    onClick={toggleEmojiPicker}
                    className="action-btn"
                >
                    😊
                </button>
            </div>
            <button className="action-btn" type="submit">
                Send
            </button>
        </form>
    );
}

export default MessageInput;
