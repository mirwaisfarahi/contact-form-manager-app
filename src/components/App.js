import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; import { v4 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Add from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

function App() {

  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);

  const contactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }])
  }

  const deleteContactHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts([...newContacts])
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

  return (
    <div className='col-md-6 app'>
      <Router>
        <Header />
        <Switch>
          <Route
          exact path="/" 
          render={(props) => (
            <ContactList
            {...props}
            contacts={contacts} 
            getContactId={deleteContactHandler}
            />
          )}/>

          <Route 
          exact path="/add"
          render={(props) => (
            <Add 
            {...props}
            contactHandler={contactHandler}
            />
          )} />
          {/* Below method will have a time and performance optimization issue. Because it time it will reload all the components */}
          {/* <Route exact path="/" component={() => <ContactList contacts={contacts} getContactId={deleteContactHandler} />} /> */}
          {/* <Route exact path="/add" component={() => <Add contactHandler={contactHandler} />} /> */}
          <Route exact path="/contact/:id" component={ContactDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
