import React, {useState} from "react";
import "./usernameModal.scss";

function UsernameModal({onSubmitUsername}) {
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitUsername(username);
    };

    return (
        <div className="username-modal-overlay">
            <div className="username-modal">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Enter username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default UsernameModal;
