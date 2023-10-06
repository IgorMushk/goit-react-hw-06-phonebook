import { Button, Item, ItemText, List } from "./ContactList.styled.";
import { useDispatch, useSelector } from 'react-redux';
//import { delClient } from "redux/store";
import { delClient } from "redux/contactsSlice";

export const ContactList = ({onDeleteContact}) => {
  const contacts  = useSelector(state => state.contacts)
  console.log('ContactList-contacts :>>', contacts)
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);
  console.log('ContactList-filter :>>', filterValue);

  const getFilteredContats = () => {
    //console.log('filter', filter);
    const filteredContats = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    //console.log('---getFilteredContats', filteredContats);
    return filteredContats;
  };
  //console.log('filteredContats :', getFilteredContats());

 return  (
<List>
{getFilteredContats().map(({id, name, number}) => (
<Item key={id}>
    <ItemText>{name}: {number} </ItemText>
    <Button onClick={() => dispatch(delClient(id))}>Delite</Button> </Item>
    ))}
</List>
)};//

