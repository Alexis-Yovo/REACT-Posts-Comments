import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchComments, addComment } from '../slices/commentsSlice';
import { fetchPostById } from '../slices/actions/postsActions';
import './PostDetail.css';

const PostDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { comments, status: commentsStatus, error: commentsError } = useSelector((state) => state.comments);
  const { selectedPost, status: postStatus, error: postError, addedPosts } = useSelector((state) => state.posts);
  const [newComment, setNewComment] = useState('');
  const [loadingTimeout, setLoadingTimeout] = useState(false);

  useEffect(() => {
    dispatch(fetchComments(id));
    dispatch(fetchPostById(id));

    const timeoutId = setTimeout(() => {
      setLoadingTimeout(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [id, dispatch]);

  const handleAddComment = () => {
    const comment = {
      postId: id,
      name: 'User 1',
      email: 'user1@example.com',
      body: newComment,
    };
    dispatch(addComment(comment));
    setNewComment('');
  };

  if ((postStatus === 'loading' || commentsStatus === 'loading') && !loadingTimeout) {
    return <div>Chargement...</div>;
  }

  if (postStatus === 'failed') {
    return <div>Erreur: {postError}</div>;
  }

  if (commentsStatus === 'failed') {
    return <div>Erreur: {commentsError}</div>;
  }

  const post = addedPosts.find(post => post.id === parseInt(id)) || selectedPost;

  return (
    <div className="post-detail-page">
      <h1>Détail du Post</h1>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
      <div className="comments-list">
        {Array.isArray(comments) && comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="comment-card">
              <div className="comment-card-body">
                <h3>{comment.name}</h3>
                <p>{comment.body}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Aucun commentaire pour le moment.</p>
        )}
      </div>
      <div className="add-comment-card">
        <label>Commentaire : </label>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Ajouter un commentaire"
        />
        <button onClick={handleAddComment}>Ajouter</button>
      </div>
    </div>
  );
};

export default PostDetailPage;
