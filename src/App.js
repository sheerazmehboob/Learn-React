import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
// import Counter from './components/Counter'
import ClickFunction from './components/ClickFunction';
import ConditioalRendring from './components/ConditioalRendring';
import ListRendering from './components/ListRendering';
import Student from './components/Student';
import InlineStyling from './components/InlineStyling';
import ExternalStyling from './components/ExternalStyling';
import ModuleStyling from './components/ModuleStyling';
import UseStateComponent from './components/UseStateComponent';
import UseStateWithObjects from './components/UseStateWithObjects';
import FunctionalState from './components/FunctionalState';

function App() {
  return (
    <>
    {/* <Counter/>
    <ClickFunction name="Sherry"/>
    <ConditioalRendring/>
    <Student/>
    <InlineStyling/>
    <ExternalStyling value={false}/>
    <ListRendering/>
    <ModuleStyling/>
    <UseStateComponent/> */}
    {/* <UseStateWithObjects/> */}
    <FunctionalState/>
    </>
    
  );
}

export default App;
