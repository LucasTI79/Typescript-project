import React from 'react';
import User from './components/User';
import api from './services/api';

interface IUser {
  name: string;
  email: string;
}

function App() {
  const [ users, setUsers] = React.useState<IUser[]>([])
  React.useEffect(() => {
    api.get<IUser[]>('/users').then(r => setUsers(r.data))
  },[])
  return (
    <div className="App">
      {users.map(user => <User key={user.email} user={user}/>)}
    </div>
  );
}

export default App;
