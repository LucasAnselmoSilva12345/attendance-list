import { ProfileGitHub } from '../../components/ProfileGitHub';
import { InputName } from '../../components/InputName';

export function Home() {
  return (
    <div className="flex flex-col items-center">
      <header className="w-3/4 md:w-1/2 mt-84 mx-0 mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-astral-950">Attendance list</h1>
        <ProfileGitHub />
      </header>
      <InputName />
    </div>
  );
}
