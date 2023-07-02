import React, {useState} from "react";
import Results from "./Results";
import Tooltip from "./Tooltip";

const Instructions = () => {
    return (
        <section className="instructions-container">
            <h2> Instructions </h2>
            <ol>
                <li>Enter 2 Github users</li>
                <li>Battle</li>
                <li>See the winners</li>
            </ol>
        </section>
    );
};

const PlayerPreview = ({username, onReset, label}) => {
    return (
        <article className='card'>
            <h3 className='player-label'>{label}</h3>
            <div className="split">
                <div className="row gap-md">
                    <img
                        width={32}
                        height={32}
                        className="avatar"
                        src={`https://github.com/${username}.png?size=200`}
                        alt={`Avatar for ${username}`}
                    />
                    <a href={`https://github.com/${username}`} className="link">
                        {username}
                    </a>
                </div>
                <button onClick={onReset} className="btn secondary">
                    Reset
                </button>
            </div>
        </article>
    )
}

const PlayerInput = ({label, onSubmit}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(username);
    };
    const [username, setUsername] = useState("");

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    return (
        <form className="card bg-light" onSubmit={handleSubmit}>
            <label htmlFor="username" className="player-label">
                {label}
            </label>
            <div className="input-row">
                <input
                    type="text"
                    id="username"
                    className="input-light"
                    placeholder="github username"
                    autoComplete="off"
                    value={username}
                    onChange={handleChange}
                />
                <button
                    className="btn link btn-dark"
                    type="submit"
                    disabled={!username}
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

const Battle = () => {
    const [playerOne, setPlayerOne] = useState(null);
    const [playerTwo, setPlayerTwo] = useState(null);
    const [battle, setBattle] = useState(false);

    const disabled = !playerOne || !playerTwo;

    const handleSubmit = (id, player) => {
        if (id === "playerOne") {
            setPlayerOne(player);
        } else {
            setPlayerTwo(player);
        }
    };

    const handleReset = (id) => {
        if (id === "playerOne") {
            setPlayerOne(null);
        }
        if (id === "playerTwo") {
            setPlayerTwo(null);
        }
    }


    if (battle) {
        return (<Results playerTwo={playerTwo} playerOne={playerOne}/>);
    }

    return (
        <main className="stack main-stack animate-in">
            <div className="split">
                <h1>Players</h1>
                <button disabled={disabled} onClick={() => setBattle(!battle)} className="btn primary">
                    Battle
                </button>
            </div>
            <section className="grid">
                {playerOne === null ? (
                    <PlayerInput
                        label="Player One"
                        onSubmit={(player) => handleSubmit("playerOne", player)}
                    />
                ) : <PlayerPreview username={playerOne} label="Player One" onReset={() => handleReset("playerOne")}/>}
                {playerTwo === null ? (
                    <PlayerInput
                        label="Player Two"
                        onSubmit={(player) => handleSubmit("playerTwo", player)}
                    />
                ) : <PlayerPreview username={playerTwo} label="Player Two" onReset={() => handleReset("playerTwo")}/>}
            </section>
            <Tooltip element={<h1>Hello</h1>}>
                <Instructions/>
            </Tooltip>

        </main>
    );
};

export default Battle;
