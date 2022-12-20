import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MeetupList, Layout, MeetupDetail, NewMeetupForm } from "shared";
import "./index.less";
import Link from "./LinkWrapper";
import HostedAppWrapper from "./HostedAppWrapper";
import { meetupItemData } from "./constants";

function App() {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData, "enteredMeetupData");
  };

  return (
    <Router>
      <Layout LinkComponent={Link}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HostedAppWrapper endpoint="/meetups">
                <MeetupList isHostedApp={false} />
              </HostedAppWrapper>
            }
          />
          <Route
            exact
            path="/new-meetup"
            element={
              <HostedAppWrapper>
                <NewMeetupForm
                  onAddMeetup={addMeetupHandler}
                  isHostedApp={false}
                />
              </HostedAppWrapper>
            }
          />
          <Route
            exact
            path="/:meetupId"
            element={
              <MeetupDetail
                image={meetupItemData.image}
                title={meetupItemData.title}
                address={meetupItemData.address}
                description={meetupItemData.description}
                isHostedApp={true}
              />
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
