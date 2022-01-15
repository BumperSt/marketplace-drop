import Image from 'next/image'
import {Descreption, ItemDiv, LastComponentTitle, ListComponentContainer} from './lastComponentStyle'


const LastComponentInHome = () => {
  return (
    <ListComponentContainer>
      <ItemDiv>
        <LastComponentTitle>Fusce nec vulputate purus.</LastComponentTitle>
        <Image width="332" height="164" src={'/temporary/destaque.png'}></Image>
        <Descreption>Aenean quis mauris ac diam efficitur mollis. Nunc sagittis pharetra velit, sed sollicitudin sem lacinia at.</Descreption>
      </ItemDiv>

    </ListComponentContainer>
  )
}
  
  export default LastComponentInHome
  