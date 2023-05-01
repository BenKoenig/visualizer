import "./intro.scss"

const Intro = () => {
    return(
        <div className="intro">
            <div className={"intro__overlay"}>
                <h1>Amazon Deforestation Visualizer</h1>
            </div>
            <video
                className="intro--video"
                autoPlay muted loop playsInline
            >
                <source src="/videos/rainforest.mp4" type="video/mp4" />
                <source src="/videos/rainforest.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
export default Intro