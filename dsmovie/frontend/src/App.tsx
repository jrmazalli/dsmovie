import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Form2 from 'pages/Form2';
import Navbar from "components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>

        <Route path="/" element={<Listing />} />
        <Route path="/form2">
          <Route path=":movieId" element={<Form2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;