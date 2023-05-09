import CanvasWrapper from "../components/canvas/CanvasWrapper.jsx";
import Gui from "../components/gui/Gui.jsx";
import Hud from "../components/hud/Hud.jsx";

const Home = () => {
    return(
        <>
            <Hud/>
            <Gui/>
            <CanvasWrapper/>
        </>
    )
}

export default Home