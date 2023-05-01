import "./intro.scss"

const Intro = () => {
    return(
        <div className="intro">
            <video
                className="intro--video"
                autoPlay muted loop playsInline
            >
                <source src="/videos/rainforest.mp4" type="video/mp4" />
{/*                <source src="https://api.goldbird.de/videos/hero_mobile_new.webm" type="video/webm" />*/}
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
export default Intro