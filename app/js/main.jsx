import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import '../styles/main.scss'
import Cookbook from '../components/Cookbook.jsx'

const App = () => <Cookbook />


ReactDOM.render(
    <App />,
    document.getElementById('app')
)
