import { Button, Item, ItemText, List } from "./ContactList.styled.";
import { useDispatch, useSelector } from 'react-redux';
import { delClient } from "redux/store";

export const ContactList = ({onDeleteContact}) => {
  const contacts  = useSelector(state => state.contacts)
  console.log('ContactList :>>', contacts)
  const dispatch = useDispatch();

 return  (
<List>
{contacts.map(({id, name, number}) => (
<Item key={id}>
    <ItemText>{name}: {number} </ItemText>
    <Button onClick={() => dispatch(delClient(id))}>Delite</Button> </Item>
    ))}
</List>
)};//

