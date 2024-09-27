import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from "./pages/main/MainPage";
import Header from './components/layout/Header';
import ViewPlaylistPage from './pages/playlist/ViewPlaylistPage';
import CommentPage from './pages/comment/CommentPage';
import ViewProfilePage from './pages/profile/ViewProfilePage';
import ViewMyProfilePage from './pages/profile/ViewMyProfilePage';
import DeleteUserPage from './pages/profile/DeleteUserPage';
import DeleteCompletePage from './pages/profile/DeleteCompletePage';
import CreatePlaylistPage from './pages/playlist/CreatePlaylistPage';
import EditPlaylistPage from './pages/playlist/EditPlaylistPage';
import AuthPage from './pages/auth/AuthPage';

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
          <Route path="/playlist/:playlistId/comment" element={<CommentPage />} />
          <Route path="/profile/:userId" element={<ViewProfilePage />} />
          <Route path="/profile/my" element={<ViewMyProfilePage />} />
          <Route path="/profile/my/delete" element={<DeleteUserPage />} />
          <Route path="/profile/my/delete/complete" element={<DeleteCompletePage />} />
          <Route path="/playlist/create" element={<CreatePlaylistPage />} />
          <Route path="/playlist/:playlistId/edit" element={<EditPlaylistPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </ContentWrapper>
    </BrowserRouter>
  )
}

export default App;