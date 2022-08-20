import { PhonebookForm } from './PhonebookForm';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        margin: '0 20px',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <PhonebookForm
        onSubmit={values => {
          console.log(values.contacts);
          values.contacts.push(values.name);
        }}
      />
    </div>
  );
};
