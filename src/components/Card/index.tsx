import './styles.css';

type CardProps = {
  name: string;
  time: string;
};

export function Card({ name, time }: CardProps) {
  return (
    <div className="container-card">
      <strong>{name}</strong>
      <small>{time}</small>
    </div>
  );
}
