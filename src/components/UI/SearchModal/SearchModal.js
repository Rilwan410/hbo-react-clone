import React from "react";

const loopComp = (comp, digit) => {
  let thumbnails = [];
  for (let i = 0; i < digit; i++) {
    thumbnails.push(comp);
  }

  return thumbnails;
};

function SearchModal(props) {
  return (
    <div className="search-modal">
      <div className="search-modal__input-group">
        <input
          className="search-modal__input"
          placeholder="search for a title"
          value=""
        />
        <div className="search-modal__close-btn">
          <i className="fas fa-times" />
        </div>
      </div>

      <h3 className="search-modal__title">Popular Searches</h3>

      <div className="search-modal__thumbnails">
        {loopComp(
          <div className="search-modal__thumbnail">
            <img src="https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg" />
            <div className="search-modal__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
}

export default SearchModal;
