function MessageList({currentRoom}) {
    const messages = [
        {id: 1, sender: "Jane Doe", text: "Hello, everyone!"},
        {id: 2, sender: "John Doe", text: "Hi there!"},
    ]; // Placeholder data

    return (
        <div>
            <h2>{currentRoom}</h2>
            <ul>
                {messages.map((msg) => (
                    <li key={msg.id}>
                        <strong>{msg.sender}</strong>: {msg.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MessageList;
