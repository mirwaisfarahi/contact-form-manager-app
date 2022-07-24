import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Add from './AddContact';
import ContactList from './ContactList';

const list = [
  {
    id: 1,
    name: 'Mirwais Farahi',
    email: 'waisfarahi@gmail.com'
  },
  {
    id: 2,
    name: 'Ahmad',
    email: 'ahmad@gmail.com'
  }
];

function App() {
  return (
    <div className='col-md-6 app'>
      <Header />
      <Add />
      <ContactList contacts = {list} />
    </div>
  );
}

export default App;
