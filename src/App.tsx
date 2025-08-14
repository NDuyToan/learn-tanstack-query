// GPT: define App component that use useProfile() hook and render it's data to UI
import { useProfile } from '@/hooks';

const App: React.FC = () => {
  const { data: userProfile, error, isError, isLoading } = useProfile();

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      {userProfile && (
        <div>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          {/* Render other user profile data as needed */}
        </div>
      )}
    </div>
  );
};

export default App;
