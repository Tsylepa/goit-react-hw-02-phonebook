import Phonebook from './Phonebook';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        minWidth: 320,
        padding: 20,
      }}
    >
      <Phonebook />
    </div>
  );
};
