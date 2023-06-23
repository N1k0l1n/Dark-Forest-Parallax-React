import layerBaseImage from "./assets/layer-base.png";
import layerMiddleImage from "./assets/layer-middle.png";
import layerFrontImage from "./assets/layer-front.png";
import dungeonImage from "./assets/dungeon.jpg";
import React, { useEffect } from 'react'

function App() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`);
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="content">
          <header className="header-main">
            <div className="layers">
              <div className="layer-head">
                <div className="caption">Welcome to Parallax Web</div>
                <div className="title">Dark Forest</div>
              </div>
              <div
                className="img-layer layer-base"
                style={{ backgroundImage: `url(${layerBaseImage})` }}
              ></div>
              <div
                className="img-layer layer-mid"
                style={{ backgroundImage: `url(${layerMiddleImage})` }}
              ></div>
              <div
                className="img-layer layer-front"
                style={{ backgroundImage: `url(${layerFrontImage})` }}
              ></div>
            </div>
          </header>
          <article
            className="article-main"
            style={{ backgroundImage: `url(${dungeonImage})` }}
          >
            <div className="m-article-content">
              <h2 className="m-header">Story to Be Continued</h2>
              <p className="m-paragraph">
                Deep within the heart of the dark forest, a hushed stillness
                hangs in the air, broken only by the occasional rustle of leaves
                and the distant calls of nocturnal creatures. It is a place
                where shadows dance and secrets linger. Towering trees reach
                toward the heavens, their branches intertwined like the fingers
                of ancient giants, telling tales of countless seasons and the
                passage of time. The forest floor is carpeted with a tapestry of
                moss and fallen leaves, creating a cushioned path that muffles
                each step. It is a quiet world, where nature speaks in whispers
                and subtle gestures. As daylight fades, a symphony of nocturnal
                life awakens. The haunting melodies of owls and the soft
                scurrying of small creatures add to the ethereal atmosphere,
                stirring the imagination.
              </p>
            </div>
            <div className="copy">
            &copy; 2023
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default App;
