import PropTypes from 'prop-types';

export const ContactItem = ({ item: { id, name, number }, onDelete }) => {
  return (
    <li>
      {name}
      {number}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
