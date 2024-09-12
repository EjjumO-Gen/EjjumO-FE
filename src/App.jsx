import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from "./pages/main/MainPage";
import Header from './components/layout/Header';
import ViewPlaylistPage from './pages/playlist/\bViewPlaylistPage';

const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: 50px;
  width: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/playlist/:playlistId" element={<ViewPlaylistPage />} />
        </Routes>
      </ContentWrapper>
    </BrowserRouter>
  )
}

export default App;