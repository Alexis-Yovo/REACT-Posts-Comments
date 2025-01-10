import PropTypes from 'prop-types';
import './Form.css';

const Form = ({ onSubmit, title, body, setTitle, setBody, placeholderTitle, placeholderBody, buttonText }) => {
  return (
    <form onSubmit={onSubmit} className="form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={placeholderTitle || "Titre du message"}
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder={placeholderBody || "Écrivez votre commentaire"}
      />
      <button type="submit">{buttonText || "Publier"}</button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setBody: PropTypes.func.isRequired,
  placeholderTitle: PropTypes.string,
  placeholderBody: PropTypes.string,
  buttonText: PropTypes.string,
};

export default Form;
