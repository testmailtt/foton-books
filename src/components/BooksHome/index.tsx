import { Container, Paragraph, Content} from './styles';

import  Oval  from "../../assets/oval.svg";
import Square from "../../assets/square.svg";
import Bitmap from "../../assets/Bitmap.svg";

import theOne from "../../assets/theOne.jpg";
import thePsychology from "../../assets/thePsychology.jpg";

export function BooksHome(){
    return(
        <>
            <Paragraph>
                <p>Discover new book <a href="#">More</a></p>
            </Paragraph>
            <Container>
                <Content>
                    <div className="thumbBook">
                        <img className="oval" src={Oval} alt="" />
                        <div>
                            <h2 className="title-book">Hooked</h2>
                            <h3 className="autor">Nir Eyeal</h3>
                            <p>
                                <img className="squareIcon" src={Square} alt="SquareIcon" />
                                <span>120+</span> Read Now
                            </p>
                            <img className="book" src={Bitmap} alt="book" />
                        </div>
                    </div>
                    <div className="thumbBook-two">
                    <img className="oval" src={Oval} alt="" />
                    <div>
                        <h2 className="title-book">The One...</h2>
                        <h3 className="autor">Gary Keller, Jay P...</h3>
                        <p>
                            <img className="squareIcon" src={Square} alt="SquareIcon" />
                            <span>120+</span> Read Now
                        </p>
                        <img className="book" src={theOne} alt="book" />
                        </div>
                    </div>
                    <div className="thumbBook-three">
                        <img className="oval" src={Oval} alt="" />
                        <div>
                            <h2 className="title-book">The Psyc...</h2>
                            <h3 className="autor">Patricia Wallace</h3>
                            <p>
                                <img className="squareIcon" src={Square} alt="SquareIcon" />
                                <span>120+</span> Read Now
                            </p>
                            <img className="book" src={thePsychology} alt="book" />
                        </div>
                    </div>
                </Content>        
            </Container>
        </>
    );
}