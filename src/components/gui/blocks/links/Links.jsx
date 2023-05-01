import "./links.scss"

const Links = () => {
    return (
        <div>
            <p>This project is developed by Benjamin König</p>
            <a href="https://github.com/BenKoenig/visualizer">Contribute on GitHub (currently private)</a>
            <div className="links">
                <div className="links__item">
                    <a className="links__item__a" href="https://www.linkedin.com/in/benjamin-k%C3%B6nig-65644b237">
                        <span className="sr-only">LinkedIn Profile</span>
                    </a>
                    <svg className="links__item--svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512"><path d="M256 0c141.29 0 256 114.71 256 256 0 141.29-114.71 256-256 256C114.71 512 0 397.29 0 256 0 114.71 114.71 0 256 0Zm-80.037 399.871V199.95h-66.464v199.921h66.464Zm239.62 0V285.225c0-61.409-32.787-89.976-76.509-89.976-35.255 0-51.047 19.389-59.889 33.007V199.95h-66.447c.881 18.757 0 199.921 0 199.921h66.446v-111.65c0-5.976.43-11.95 2.191-16.221 4.795-11.935 15.737-24.299 34.095-24.299 24.034 0 33.663 18.34 33.663 45.204v106.966h66.45ZM143.18 103.55c-22.74 0-37.597 14.95-37.597 34.545 0 19.182 14.405 34.544 36.717 34.544h.429c23.175 0 37.6-15.362 37.6-34.544-.43-19.595-14.424-34.545-37.149-34.545Z"></path></svg>
                </div>

                <div className="links__item">
                    <a className="links__item__a" href="https://github.com/BenKoenig">
                        <span className="sr-only">GitHub Profile</span>
                    </a>
                    <svg className="links__item--svg" xml:space="preserve" viewBox="32 32 448 447.98"><path d="M256 32C132.3 32 32 134.8 32 261.7c0 101.5 64.2 187.5 153.2 217.9 11.2 2.1 15.3-5 15.3-11.1 0-5.5-.2-19.9-.3-39.1-62.3 13.9-75.5-30.8-75.5-30.8-10.2-26.5-24.9-33.6-24.9-33.6-20.3-14.3 1.5-14 1.5-14 22.5 1.6 34.3 23.7 34.3 23.7 20 35.1 52.4 25 65.2 19.1 2-14.8 7.8-25 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 18.8-6.2 61.6 23.5 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 42.8-29.7 61.5-23.5 61.5-23.5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 6.1 4 13.3 15.4 11C415.9 449.1 480 363.1 480 261.7 480 134.8 379.7 32 256 32z"></path></svg>
                </div>
            </div>
        </div>
    )
}
export default Links