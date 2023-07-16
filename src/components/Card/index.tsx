export type CardProps = {
  name: string;
  time: string;
};

export function Card({ name, time }: CardProps) {
  return (
    <div className="w-3/4 md:w-1/2 h-100 mb-5 p-5 rounded-10 flex items-center justify-between bg-astral-700 text-white">
      <strong className="text-lg">{name}</strong>
      <small>{time}</small>
    </div>
  );
}
