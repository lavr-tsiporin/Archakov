import { ProfileFunc } from "./components/Profile/ProfileFunc";
import { ProfileClass } from "./components/Profile/ProfileClass";
import './TutorialOne.css'

export const TutorialOne = () => {
  const profile = {
    name: 'Вася',
    date: new Date(2021, 5, 22).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }
  return (
    <div>
      <ProfileFunc
        data={profile}
      />
      <ProfileClass
        data={profile}
      />
    </div>
  )
}