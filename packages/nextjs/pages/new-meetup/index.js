import { NewMeetupForm } from "shared";

export default function NewMeetupPage() {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData, "enteredMeetupData");
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
