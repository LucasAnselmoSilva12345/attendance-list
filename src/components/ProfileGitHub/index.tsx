import axios from 'axios';
import { useEffect, useState } from 'react';

type APIResponseProps = {
  name: string;
  avatar_url: string;
};

type UserProps = {
  name: string;
  avatar_url: string;
};

export function ProfileGitHub() {
  const [user, setUser] = useState<UserProps>({} as UserProps);

  useEffect(() => {
    async function getUserDataOfGitHub() {
      try {
        const response = await axios.get(
          'https://api.github.com/users/LucasAnselmoSilva12345'
        );
        const { name, avatar_url } = response.data as APIResponseProps;
        setUser({
          name,
          avatar_url,
        });
      } catch (error: any) {
        console.log(error);
      }
    }
    getUserDataOfGitHub();
  }, []);

  return (
    <div className="flex items-center">
      <strong className="hidden font-normal lg:block">{user.name}</strong>
      <img
        className="w-60 h-60 ml-2 rounded-30"
        src={user.avatar_url}
        alt="User Profile photo"
      />
    </div>
  );
}
