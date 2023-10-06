//import { FiterContainer, Inpute, Label } from './FilterByName.styled';
import { setFilter } from 'redux/store';
import { Inpute, Label } from './FilterByName.styled';
import { useDispatch } from 'react-redux';

export const FilterByName = ({value, onChange}) => {
  const dispatch = useDispatch();
  const onChangeFilter = evt => {
    console.log('FilterByName - evt.target.value ', evt.target.value);
    dispatch(setFilter(evt.target.value))
  };

  return (
    // <FiterContainer>
     <>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Inpute type="text" id="filter" name="filter" onChange={onChangeFilter} />
     </>
    // </FiterContainer> 
  );
};

// export const FilterByName = ({value, onChange}) => {
//   return (
//     // <FiterContainer>
//      <>
//       <Label htmlFor="filter">Find contacts by name</Label>
//       <Inpute type="text" id="filter" name="filter" value={value} onChange={onChange} />
//      </>
//     // </FiterContainer> 
//   );
// };
