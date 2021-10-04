import {Paragraph, Container, Content} from './styles'
import Video from '../../assets/bg-video.png'

export function AllVideo(){
    return(
        <>
            <Paragraph>
                <p>Currently Reading <a href="https://youtu.be/vBzBgewl4ac">All Video</a></p>
            </Paragraph>
            <Container>
                <Content>
                <div>
                    <a href="https://youtu.be/vBzBgewl4ac">
                        <img src={Video} alt="" />
                    </a>
                </div>
                </Content>
            </Container>
        </>
    )
}