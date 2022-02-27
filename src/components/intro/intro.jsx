import "./intro.css";
import Me from "../../img/me.png";

const Intro=()=>{
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Snigdh Kulshreshtha</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Problem Solver</div>
                            <div className="i-title-item">Blockchain Developer</div>
                            <div className="i-title-item">Competitive Programmer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                    Lorem ipsum dolor sit amet. Ut delectus voluptatem aut dolor accusantium in illum nisi. Non fugit necessitatibus et soluta voluptatem non sapiente Quis aut atque porro ut totam sequi et quam voluptates!
                    </p>
                </div>
                
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro