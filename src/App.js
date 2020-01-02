import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import { Button,Card,Progress } from 'antd';
import './App.css';
import { getUserList, deleteUser } from "./redux/action.creators";

function App({ user, loading, getUserList, deleteUser }) {
  return (
    <div className="App">
      <header className="App-header">
        {
          loading ?
            <Loader className="loader" type="ThreeDots" color="Yellow" height={80} width={80} />
            :null
            }
        <Card title="USERS"  style={{ width: 300 }} >
          {
            user.map(station => (
              <p className="user" key={station.id} onClick={() => { deleteUser(station.id) }}>{station.name}</p>
            ))
            }
        </Card>
        <Button type="primary" onClick={getUserList}>Change Name</Button>
      </header>

    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user,
  loading: state.loading
})

const mapDispatchToprops = dispatch => ({
  getUserList: () => dispatch(getUserList()),
  deleteUser: (id) => dispatch(deleteUser(id))
})

export default connect(mapStateToProps, mapDispatchToprops)(App);
