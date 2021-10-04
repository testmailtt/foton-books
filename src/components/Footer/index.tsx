import { Container, Content } from './styles'

import home from '../../assets/home.svg'
import book from '../../assets/book.svg'
import user from '../../assets/user.svg'

export function Footer(){
    return(
        <Container>
            <Content>
                <div>
                    <img src={home} alt="" />
                    <img src={book} alt="" />
                    <img src={user} alt="" />
                </div>
            </Content>
        </Container>
    )
}