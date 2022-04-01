import "./App.css";

import * as React from "react";
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";

import MainPage from "./component/main/MainPage";
import Emoji from "./component/main/Emoji";

function App1() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/feed/hashtag/:keyword" element={<MainPage />} />
        <Route path="/emoji" element={<Emoji/>}/>
        {/* <Route index element={<Main />} />
          <Route path="feed" element={<Feed />} />
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="storyreal" element={<StoryReal />} />
          <Route path="widgets" element={<Widgets />} />
          <Route path="main" element={<Main />} />
          <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App1;
