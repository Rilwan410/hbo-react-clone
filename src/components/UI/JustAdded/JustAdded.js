import React from "react";

function JustAdded(props) {
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp);
    }

    return thumbnails;
  };

  return (
    <div className="just-added">
      <h3 className="just-added__title">Just Added</h3>
      <div className="just-added__thumbnails">
        {/* <div className="just-added__thumbnail">
        <img src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4833/4833671_so.jpg'/>
        <div className='just-added__top-player'>
            <i className='fas fa-play'/>
        </div>
        </div> */}
        {loopComp(
          <div className="just-added__thumbnail">
            <img src="https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg" />
            <div className="just-added__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
}

export default JustAdded;
