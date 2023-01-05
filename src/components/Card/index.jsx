import './styles.css';

export function Card({ name, time }) {
  return (
    <div className="container-card">
      <strong>{name}</strong>
      <small>{time}</small>
    </div>
  );
}
