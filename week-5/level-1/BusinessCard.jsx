export const BusinessCard = (props) => {
  return (
    <div style={styles.card}>
      <h1 style={styles.name}>{props.name}</h1>
      <p style={styles.name}>{props.description}</p>
      <b>Interests</b>
      <ul>
        {props.interests.map((interest) => (
          <li key={interest} style={styles.name}>
            {interest}
          </li>
        ))}
      </ul>
      <div>
        <button style={styles.button}>
          <a href="www.linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </button>
        <button style={styles.button}>
          <a href="www.twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    background: "white",
    borderRadius: "8px",
    margin: "20px",
    maxWidth: "400px",
  },
  button: {
    color: "white",
    background: "blue",
  },
  name: {
    fontSize: "18px",
  },
};
