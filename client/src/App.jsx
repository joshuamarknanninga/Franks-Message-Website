import { Navigate, Route, Routes } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import MessagesPage from './pages/MessagesPage.jsx';
import MessageDetailPage from './pages/MessageDetailPage.jsx';
import PrayerWallPage from './pages/PrayerWallPage.jsx';
import SeriesDetailPage from './pages/SeriesDetailPage.jsx';
import SeriesPage from './pages/SeriesPage.jsx';

const App = () => (
  <Routes>
    <Route element={<PublicLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/messages" element={<MessagesPage />} />
      <Route path="/messages/:id" element={<MessageDetailPage />} />
      <Route path="/series" element={<SeriesPage />} />
      <Route path="/series/:seriesName" element={<SeriesDetailPage />} />
      <Route path="/prayer-wall" element={<PrayerWallPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
);

export default App;
