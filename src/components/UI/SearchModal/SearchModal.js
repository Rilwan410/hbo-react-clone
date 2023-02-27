import React from "react";
import { useStateContext } from "@/components/HBOProvider";

// const loopComp = (comp, digit) => {
//   let thumbnails = [];
//   for (let i = 0; i < digit; i++) {
//     thumbnails.push(comp);
//   }

//   return thumbnails;
// };

function SearchModal(props) {
  const globalState = useStateContext();
  return (
    <div className={`search-modal ${globalState.searchOpen ? 'search-modal__active' : '' }`}>
      <div className="search-modal__input-group">
        <input
          className="search-modal__input"
          placeholder="search for a title"
          // value=""
        />
        <div className="search-modal__close-btn" onClick = { () => globalState.setSearchOpen(false)}>
          <i className="fas fa-times" />
        </div>
      </div>

      <h3 className="search-modal__title">Popular Searches</h3>

      <div className="search-modal__thumbnails">
      <div className="search-modal__thumbnail">
            <img src="https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg" />
            <div className="search-modal__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>
      </div>
    </div>
  );
}

export default SearchModal;
