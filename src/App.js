import React from "react";
// import { CurrentUserLoader } from "./CurrentUserLoader";
// import { UserLoader } from "./UserLoader";
// import { ResourceLoader } from "./ResourceLoader";
import { DataLoader } from "./DataLoader";
import { UserInfo } from "./UserInfo";

const getInfo = url => async()=>{
  const response = await (await fetch(url)).json()
  return response
}

function App() {
  return (
    //Current User Loader
    // <CurrentUserLoader>
    //   <UserInfo/>
    // </CurrentUserLoader>

    //User Loader
    // <>
    //   <UserLoader userId="3">
    //     <UserInfo />
    //   </UserLoader>
    //   <UserLoader userId="3">
    //     <UserInfo />
    //   </UserLoader>
    // </>
    // <>
    // <ResourceLoader resourceName='user' resourceUrl='/users/123'>
    //   <UserInfo/>
    // </ResourceLoader>
    // </>
    <>
  <DataLoader resourceName='user' getFunc={getInfo('/users/123')}>
    <UserInfo/>
  </DataLoader>
    </>
  );
}

export default App;
