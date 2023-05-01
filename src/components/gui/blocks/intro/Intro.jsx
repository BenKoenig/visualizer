import "./intro.scss"

const Intro = () => {
    return(
        <>
            <div className="videoWrapper">
                <div className={"videoWrapper__overlay"}>
                    <h1>Amazon Deforestation Visualizer</h1>
                </div>
                <video
                    className="videoWrapper--video"
                    autoPlay muted loop playsInline
                >
                    <source src="/videos/rainforest.mp4" type="video/mp4" />
                    <source src="/videos/rainforest.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <h2>Experience the Impact of Amazon Rainforest Deforestation in Real-Time with our WebGL-Powered Web Application</h2>
        </>

    )
}
export default Intro