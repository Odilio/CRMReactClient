// in src/App.js
import React from 'react';
import { Admin, Resource,EditGuesser  } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';

//const dataProvider2 = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
          <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
          <Resource name="users" list={UserList} icon={UserIcon}/>
      </Admin>
  );

export default App;