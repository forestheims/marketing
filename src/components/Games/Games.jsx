import { useState } from 'react';
import styles from './Games.css';

export default function Games() {
  const [games, setGames] = useState(['Pong', '']);
  const [selected, setSelected] = useState('');

  return (
    <div className={styles.Games}>
      <h2 className={styles.HTwo}>Games</h2>
      <div className={styles.GameSelector}>
        {games.map((game) => (
          <button
            key={game}
            className={
              game === ''
                ? selected !== ''
                  ? styles.StopActive
                  : styles.StopInactive
                : styles.Button
            }
            onClick={() => setSelected(game)}
          >
            {game === '' ? 'Stop Game' : game}
          </button>
        ))}
      </div>

      <div className={styles.Game}>
        {selected ? (
          <iframe
            className={styles.Iframe}
            src={`https://forest-unity-games.s3.us-west-2.amazonaws.com/ForestUnity${selected}/index.html`}
            title="Unity Game"
          ></iframe>
        ) : (
          <div className={styles.Blank}>
            <h3 className={styles.HThree}>Pick a Game...</h3>
          </div>
        )}
      </div>
    </div>
  );
}
