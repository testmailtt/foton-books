import SearchIcon  from '../../assets/searchIcon.svg'
import Hand from '../../assets/handIcon.svg';


import { Container, Content, Paragraph } from './styles'

export function Search(){
    return(
        <>
            <Container>
                <Content>
                    <img src={SearchIcon} alt="Search Icon" />
                    <input type="text" placeholder="Search Book"/>
                </Content>
            </Container>
            <Paragraph>
                <p>
                    Hi, <span>Mehmed Al Fatih</span> 
                    <img src={Hand} alt="Hand Icon" />
                </p>
            </Paragraph>
        </>
    )
}