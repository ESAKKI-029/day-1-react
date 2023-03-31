import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import My from './components/Test1';
import {Day,Name,MyClass} from './components/Tesat2.jsx';
import Yourclass from './components/Test3';
//import Day from './components/Test2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Yourclass  dept="ECE" name="Esakkiraj" />
  <Day />
  <Name />
  <MyClass />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();