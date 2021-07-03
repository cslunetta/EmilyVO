import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./PageHead.css";

const PageHead = () => {
    return (
        <Row className="pageHead">
            <Container>
                <Row>
                    <Col className="pageHead_left">
                        <div className="title">
                            <h1 className="title--name">Emily Kay Kline</h1>
                            <h4 className="title--subtext">
                                Voice-Over Artist
                            </h4>
                        </div>
                        <div className="title--socials">
                            <h5>
                                <div
                                    class="fb-page"
                                    data-href="https://www.facebook.com/emmytays/"
                                    data-tabs=""
                                    data-width=""
                                    data-height=""
                                    data-small-header="true"
                                    data-adapt-container-width="true"
                                    data-hide-cover="false"
                                    data-show-facepile="true"
                                >
                                    <blockquote
                                        cite="https://www.facebook.com/emmytays/"
                                        class="fb-xfbml-parse-ignore"
                                    >
                                        <a href="https://www.facebook.com/emmytays/">
                                            Emmy Tay&#039;s Floral Designs
                                        </a>
                                    </blockquote>
                                </div>
                                <a
                                    href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw"
                                    class="twitter-follow-button"
                                    data-show-count="false"
                                >
                                    Follow @TwitterDev
                                </a>
                                <script
                                    async
                                    src="https://platform.twitter.com/widgets.js"
                                    charset="utf-8"
                                ></script>
                                / <a>Voice123</a>
                            </h5>
                        </div>
                    </Col>
                    <Col className="pageHead_right">
                        <img
                            className="title--image"
                            src="#"
                            alt="Picture of Emily"
                        />
                    </Col>
                </Row>
            </Container>
        </Row>
    );
};

export default PageHead;
