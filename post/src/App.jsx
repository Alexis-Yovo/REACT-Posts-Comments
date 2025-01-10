import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AddPostPage from './pages/AddPost';
import PostDetailPage from './pages/PostDetail';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-post" element={<AddPostPage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
