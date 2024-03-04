import { FaTrash } from 'react-icons/fa';
import css from './ContactListItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import { getContact } from '../redux/selector';

export const ContactListItem = () => {
  const dispatch = useDispatch();
  const newContact = useSelector(getContact);

  const handleDelete = e => {
    dispatch(deleteContact(filteredContact.id));
  };
  
  return (
        <li className={css.contactListItem}>
          <p>{filteredContact.name}:</p>
          <p>{filteredContact.number}</p>
          <button onClick={handleDelete}>
            <FaTrash />
          </button>
        </li>
      );
};


////////////////HW04///////////////
// export const ContactListItem = ({ filteredContact, deleteContact }) => {
//   const handleDelete = () => {
//     deleteContact(filteredContact.id);
//   };

//   return (
//     <li className={css.contactListItem}>
//       <p>{filteredContact.name}:</p>
//       <p>{filteredContact.number}</p>
//       <button onClick={handleDelete}>
//         <FaTrash />
//       </button>
//     </li>
//   );
// };


