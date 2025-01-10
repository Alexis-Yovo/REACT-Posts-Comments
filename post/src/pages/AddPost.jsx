import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../slices/actions/postsActions';
import Form from '../components/Form';
import './AddPost.css';

const AddPostPage = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      body,
      userId: 1,
    };
    dispatch(addPost(newPost));
    setTitle('');
    setBody('');
  };

  return (
    <div className="add-post-page">
      <h1>Ajouter un Post</h1>
      <Form
        onSubmit={handleSubmit}
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
      />
    </div>
  );
};

export default AddPostPage;
