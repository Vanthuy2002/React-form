import './App.css';
import Tooltip from './Fragments/Challenge/Tooltip';
import Exam from './Fragments/Example/Exam';

function App() {
  return (
    <>
      <Exam />

      <Tooltip text='Hover Me'>This is Tooltip Chanllenge</Tooltip>
    </>
  );
}

export default App;
