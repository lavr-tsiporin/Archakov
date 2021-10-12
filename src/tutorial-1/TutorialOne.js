import { ProfileFunc } from './components/Profile/ProfileFunc';
import { ProfileClass } from './components/Profile/ProfileClass';
import './TutorialOne.css';

export const TutorialOne = () => {
  const profile = {
    name: 'Вася Пупкин',
    registredAt: new Date(2021, 5, 22).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
  };

  return (
    <div>
      {profile.name !== '' && profile.registredAt !== '' ? (
        <ProfileFunc name={profile.name} registredAt={profile.registredAt} />
      ) : (
        <ProfileFunc name="Ошибка" registredAt="Ошибка" />
      )}

      {profile.name !== '' && profile.registredAt !== '' ? (
        <ProfileClass name={profile.name} registredAt={profile.registredAt} />
      ) : (
        <ProfileClass name="Ошибка" registredAt="Ошибка" />
      )}
    </div>
  );
};
