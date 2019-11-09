import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import StudyTabs from "./StudyTabs";
import firebase from "firebase/app";
import "firebase/database";

// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css";

const hist = createBrowserHistory();
const firebaseConfig = {
  apiKey: "AIzaSyCymwfasOIduBIlff5Axu-U_II1SFH1mpA",
  authDomain: "find-research-studies.firebaseapp.com",
  databaseURL: "https://find-research-studies.firebaseio.com",
  projectId: "find-research-studies",
  storageBucket: "find-research-studies.appspot.com",
  messagingSenderId: "261332989508",
  appId: "1:261332989508:web:a4c08614fc8efad90bae11",
  measurementId: "G-SZ4EF3S9C4"
};

//firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const uid = '000';
const study = {
	'sid':'000',
	'title':'test',
	'time':[{
        "end" : "10/12/2019 15:00",
        "start" : "10/12/2019 13:00"
      }],
    'requirement':'none',
    'payment':'$0',
    'location':'all',
    'description':'just for test'
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StudyTabs key={study.sid} study={study} db={db} sid={study.sid} uid={uid}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});