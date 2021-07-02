import "./PageHead.css";

const PageHead = () => {
    return (
        <div className="pageHead">
            <div className="pageHead_left">
                <div className="title">
                    <h1 className="title--name">Emily Kay Kline</h1>
                    <h4 className="title--subtext">Voice-Over Artist</h4>
                </div>
                <div className="title--socials">
                    <h5>
                        <a>Facebook</a> / <a>Twitter</a> / <a>Voice123</a>
                    </h5>
                </div>
            </div>
            <div className="pageHead_right">
                <img className="title--image" src="#" alt="Picture of Emily" />
            </div>
        </div>
    );
};

export default PageHead;
