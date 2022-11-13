import "./App.css";
import KeyBug from "./components/KeyBug";
import Box from "./components/ReactDeclarative/Box";
import BoxContext from "./components/ReactDeclarative/BoxContext";
// import ModuleStyle from "./documents/ModuleStyle";
// import Hello from "./components/Hello";
// import Welcome from "./components/Welcome";
// import Greet from "./components/Greet";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import UserGreet from "./components/ConditionalRendering/UserGreet";
// import NameList from "./components/NameList";
// import StyleSheet from "./components/StyleSheet";
// import InlineStyling from "./components/InlineStyling";
// import Form from "./components/Form";
import LifeCycleA from "./components/componentsLifecycleMethods/LifeCycleA";
// import FragmentDemo from "./components/ReactFragment/FragmentDemo";
// import Table from "./components/ReactFragment/Table";
// import PureComp from "./components/PureComponent/PureComp";
// import ParentComp from "./components/PureComponent/ParentComp";
// import RefsDemo from "./components/UncontrolledComponents/RefsDemo";
// import FocusInput from "./components/UncontrolledComponents/FocusInput";
// import FRParentInput from "./components/UncontrolledComponents/FRParentInput";
// import ErrorBoundary from "./components/componentsLifecycleMethods/ErrorBoundary";
// import Hero from "./components/componentsLifecycleMethods/Hero";
// import ClickCounter from "./components/HigherOrderComponents/ClickCounter";
// import HoverCounter from "./components/HigherOrderComponents/HoverCounter";
import ClickCounter from "./components/RenderProps/ClickCounter";
import HoverCounter from "./components/RenderProps/HoverCounter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/routing-demo/HomePage";
import NextPage from "./components/routing-demo/NextPage";
function App() {
  return (
    <div className="App">
      {/* <Welcome name="Bruce" heroName="Batman">
        <p>This is Children Prop</p>
      </Welcome>
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Woman" />

      <Greet name="Shiv" skill="React" />
      <Hello /> */}
      {/* <Message /> */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick /> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent /> */}
      {/* <UserGreet></UserGreet> */}
      {/* <NameList></NameList> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <InlineStyling /> */}
      {/* <ModuleStyle /> */}
      {/* <Form></Form> */}
      {/* <LifeCycleA /> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Table></Table> */}
      {/* <PureComp /> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <FocusInput></FocusInput> */}
      {/* <FRParentInput></FRParentInput> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="SuperMan"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}

      {/* <ClickCounter name="Shiv"></ClickCounter> */}
      {/* <HoverCounter /> */}
      {/* <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>
      <Box theme="light" />
      <Box theme="dark" />

      <BoxContext theme="light" />
      <BoxContext theme="dark" /> */}

      {/* <KeyBug /> */}

      <Router>
        <Routes>
          <Route path="home" element={<HomePage />}></Route>
          <Route path="home/next" element={<NextPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
