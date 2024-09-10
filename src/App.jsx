import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from "./pages/main/MainPage";
import Header from './components/layout/Header';

const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: 50px;
`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </ContentWrapper>
    </BrowserRouter>
  )
}

export default App;