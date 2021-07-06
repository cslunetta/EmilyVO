import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const AboutMe = () => {
    return (
        <Row>
            <Container>
                <Row>
                    <h1 className="title--name">About Me</h1>
                </Row>
                <Row>
                    <Col>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus maximus consectetur arcu, congue
                            consequat dolor. Proin fermentum, nunc vel rhoncus
                            placerat, diam justo iaculis nisl, at aliquam enim
                            diam eu nisi. In maximus magna nibh. Quisque
                            rhoncus, arcu vel condimentum tristique, purus
                            tortor accumsan nisi, eget blandit tortor lectus
                            commodo est. Nullam eget euismod nisl. Vestibulum
                            vel eros sem. Vestibulum non luctus enim. Etiam
                            rutrum turpis leo, eu fringilla tortor accumsan in.
                        </p>
                    </Col>
                    <Col>Image here</Col>
                </Row>
            </Container>
        </Row>
    );
};
