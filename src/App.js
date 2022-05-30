import React from "react";
import Scott from "./1.components/1.function/Greet";
import { GreetOne } from "./1.components/1.function/GreetOne";
import { Named } from "./1.components/1.function/Named";
import Welcome from "./1.components/2.class/Welcome";
import { WelcomeOne } from "./1.components/2.class/WelcomeOne";
import LifeCycleA from "./10.life-cycle-methods/LifeCycleA";
import PostAPI from "./11.api-calls/PostAPI";
import ReqResAPI from "./11.api-calls/ReqResAPI";
import ReqResAPIOne from "./11.api-calls/ReqResAPIOne";
import StudentMongoAPI from "./11.api-calls/StudentMongoAPI";
import UserAPI from "./11.api-calls/UserAPI";
import Routing from "./12.routing/Routing";
import Hello from "./2.jsx/Hello";
import Greeting from "./3.props/Greeting";
import GreetingOne from "./3.props/GreetingOne";
import Counter from "./4.state/Counter";
import Message from "./4.state/Message";
import Person from "./4.state/Person";
import ClassClick from "./5.event-handling/ClassClick";
import EventBind from "./5.event-handling/EventBind";
import FunctionClick from "./5.event-handling/FunctionClick";
import Parent from "./5.event-handling/parent-child/Parent";
import UserGreetingFour from "./6.conditional-rendering/UserGreetingFour";
import UserGreetingOne from "./6.conditional-rendering/UserGreetingOne";
import UserGreetingThree from "./6.conditional-rendering/UserGreetingThree";
import UserGreetingTwo from "./6.conditional-rendering/UserGreetingTwo";
import NameList from "./7.list-rendering/NameList";
import NameListFour from "./7.list-rendering/NameListFour";
import NameListOne from "./7.list-rendering/NameListOne";
import NameListThree from "./7.list-rendering/NameListThree";
import NameListTwo from "./7.list-rendering/NameListTwo";
import AppStyling from "./8.styling/AppStyling";
import InlineStyling from "./8.styling/InlineStyling";
import StyleSheet from "./8.styling/StyleSheet";
import UserForm from "./9.form-data/UserForm";
import UserFormOne from "./9.form-data/UserFormOne";

function App() {
  // function showMessage(){
  //   return "Welcome to the React World"
  // }
  return (
    <div className="container">
      <Routing />
      {/* <StudentMongoAPI /> */}
      {/* <ReqResAPIOne /> */}
      {/* <ReqResAPI /> */}
      {/* <UserAPI /> */}
      {/* <PostAPI /> */}
      {/* <LifeCycleA /> */}
      {/* <UserFormOne /> */}
      {/* <UserForm /> */}
      {/* <AppStyling /> */}
      {/* <InlineStyling /> */}
      {/* <StyleSheet primary={false}/> */}
      {/* <NameListFour /> */}
      {/* <NameListThree /> */}
      {/* <NameListTwo /> */}
      {/* <NameListOne /> */}
      {/* <NameList /> */}
      {/* <UserGreetingFour /> */}
      {/* <UserGreetingThree /> */}
      {/* <UserGreetingTwo /> */}
      {/* <UserGreetingOne /> */}
      {/* <Parent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Person title="Great Boss" id={1} /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <GreetingOne name="Scott Desatnick" email="Scott@ef.com" city="Boston">
          <h1>Hello</h1>
      </GreetingOne> */}
      {/* <Greeting id={1} 
                name="Scott" 
                isAdmin={true}
                details={null}
                secret={undefined}
                address = {{city: 'Boston',  country: 'USA'}}
                skills = {["Great Boss", "Scrum Master"]}
                showMessage = {showMessage} 
                display = {() =>"Thats's it about props for now"}
      /> */}
      {/* <Greeting name ="Adam"/>
      <Greeting name="Tuan"/> */}
      {/* <Hello /> */}
      {/* <Scott />
      <GreetOne />
      <Named />
      <Welcome />
      <WelcomeOne /> */}

    </div>
  );
}

export default App;
