import React from "react";

function ForYouList(props) {
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp);
    }

    return thumbnails;
  };

  return (
    <div className="foryou-list">
      <h3 className="foryou-list__title">For You</h3>
      <div className="foryou-list__thumbnails">
        {/* <div className="foryou-list__thumbnail">
        <img src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4833/4833671_so.jpg'/>
        <div className='foryou-list__top-player'>
            <i className='fas fa-play'/>
        </div>
        </div> */}
        {loopComp(
          <div className="foryou-list__thumbnail">
            <img src="https://hbomax-images.warnermediacdn.com/images/GYGQHnQ66bIW2XgEAAAAy/tileburnedin?size=1280x720&partner=hbomaxcom&v=7394b7d0303ace3898b026cb1eaaa01e&host=art-gallery.api.hbo.com&language=en-us&w=1280" />
            <div className="foryou-list__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
}

export default ForYouList;
