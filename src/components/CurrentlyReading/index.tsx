import { Paragraph, Container, Content } from "./styles";

import Originals from '../../assets/originals.jpg'
import IconOriginals from '../../assets/iconOriginals.svg'


export function CurrentlyReading(){
    return(
        <>
            <Paragraph>
                <p>Currently Reading<a href="#">All</a></p>
            </Paragraph>
            <Container>
                <Content>
                    <div>
                        <img src={Originals} alt="" />
                        <h2 className="title-book">
                            Originals
                        </h2>
                        <h3>
                            by Adam Grant  
                        </h3>
                        <p>
                            <img className="iconOriginals" src={IconOriginals} alt="SquareIcon" />
                            Chapter <span className="span-original">2</span> from 9
                        </p>
                    </div>
                </Content>
            </Container>
        </>
    )
}