import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../slices/actions/postsActions';
import './Home.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { addedPosts, status, error } = useSelector((state) => state.posts);
  const [loadingTimeout, setLoadingTimeout] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }

    const timeoutId = setTimeout(() => {
      setLoadingTimeout(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [status, dispatch]);

  if (status === 'loading' && !loadingTimeout) {
    return <div>Chargement...</div>;
  }

  if (status === 'failed') {
    return <div>Erreur: {error}</div>;
  }

  return (
    <div className="home-page">
      <h1>Page d'Accueil</h1>
      <div className="posts-list">
        {Array.isArray(addedPosts) && addedPosts.length > 0 ? (
          addedPosts.map((post) => (
            <div key={post.id} className="post-card dark-blue-card">
              <div className="post-card-body">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <p>Auteur: {post.userId}</p>
                <a href={`/post/${post.id}`}>Voir plus</a>
              </div>
            </div>
          ))
        ) : (
          <div>Aucun post ajouté</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
