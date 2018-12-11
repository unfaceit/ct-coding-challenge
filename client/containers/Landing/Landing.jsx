import React, { Component } from 'react'
import axios from 'axios'
import style from './styles.css'
import { PageWrapper, Text } from './LandingUI.jsx'
import Login from '../Login/Login.jsx'

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      loggedIn: false,
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <PageWrapper>
        <div className={style.wrapper}>
          <Text>
            This is an HTML manipulator. You can create simple websites and save
            them to your account. Please login now.
          </Text>
        </div>
        <Login />
      </PageWrapper>
    )
  }
}

export default Landing