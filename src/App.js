import React, {useEffect, useState} from 'react';
import { Box } from '@mui/material';
import { connect } from 'react-redux';
import DataTable from './components/UserTable';
import { getUsers } from './store/actions/users'

function App(props) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
     async function fetchData() {
      setUserData(props.users && props.users)
    }
    fetchData();
  }, [props.users])

  return (
    <div className="App">
      <Box>
        <DataTable users={userData} />
      </Box>
    </div>
  );
}

const mapStateToProps = ({users}) => ({
  users: users.users,
});

export default connect(mapStateToProps, {getUsers})(App)
