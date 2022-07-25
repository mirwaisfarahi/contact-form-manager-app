import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Add from './AddContact';
import ContactList from './ContactList';

function App() {

  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);

  const contactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, contact])
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

  return (
    <div className='col-md-6 app'>
      <Header />
      <Add contactHandler = {contactHandler}/>
      <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
