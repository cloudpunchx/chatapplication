// MessageList.jsx
import "./messageList.scss";

function MessageList({currentRoom}) {
    const messages = [
        {id: 1, sender: "Jane Doe", text: "Hello, everyone!"},
        {id: 2, sender: "John Doe", text: "Hi there!"},
        {id: 3, sender: "Me", text: "Glad to join the conversation!"}, // This message simulates one sent by the current user
    ]; // Placeholder data with a 'mine' message added

    return (
        <div>
            <h2>{currentRoom}</h2>
            <ul className="message-list">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`message-container ${
                            msg.sender === "Me" ? "mine" : "theirs"
                        }`}
                    >
                        <li>
                            <strong>{msg.sender}</strong>: {msg.text}
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default MessageList;
