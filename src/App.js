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
import UseEffectComponnet from './components/UseEffectComponnet';
import UseContextComponentA from './components/UseContextComponentA'
import { createContext } from 'react';

// Exported this context so which ever component want to use this can import it and use it
export const nameContext = createContext()
export const cityContext = createContext()

function App() {
  return (
    <>
    {/* {/* <Counter/> */}
    {/* <ClickFunction name="Sherry"/> */}
    {/* <ConditioalRendring/> */}
    {/* <Student/> */}
    {/* <InlineStyling/> */}
    {/* <ExternalStyling value={false}/> */}
    {/* <ListRendering/> */}
    {/* <ModuleStyling/> */}
    {/* <UseStateComponent/> */}
    {/* <UseStateWithObjects/> */}
    {/* <FunctionalState/> */}
    {/* <UseEffectComponnet/> */}
    
    {/*Uncomment Below Code. Creating A Context in App.js and we will use it in UseContextComponentC.js */}
                {/* <nameContext.Provider value={'Sheeraz'}>
                  <UseContextComponentA/>
                </nameContext.Provider> */}

    {/* To Use Multiple Context we will always place component inside the nested tags*/}
            <nameContext.Provider value={'Sheeraz'}>
                <cityContext.Provider value={'Lahore'}>
                    <UseContextComponentA/>
                </cityContext.Provider>
            </nameContext.Provider>


    </>
    
  );
}

export default App;
