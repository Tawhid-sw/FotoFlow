import React, { useContext, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { ProvideData } from "../global/GlobalContext";
import { VscHistory } from "react-icons/vsc";
import NatureLogo from "../assets/Nature.jpg";
import FoodLogo from "../assets/Food.jpg";
import TravelLogo from "../assets/Travel.jpg";
import SpaceLogo from "../assets/Space.jpg";
import Technologo from "../assets/Technology.jpg";
import Suggestion from "../store/Auto_Suggestion.json";

const SearchBox = ({ search, getValuefromChild }) => {
  const { searchQuery, UpdateSearch, ClearHistory } = useContext(ProvideData);
  {
    /* Search Suggestion Funtion*/
  }
  const suggest = Suggestion.filter((item) =>
    item.toLowerCase().startsWith(search.toLowerCase())
  );
  return (
    <div className="absolute md:h-[32rem] md:max-h-max h-screen left-0 w-full p-4 border-[0.5px] sm:rounded-xl rounded-none sm:shadow-sm bg-bgLight top-14 overflow-y-scroll  SearchBox View pb-4">
      {/* Search Suggestion */}
      <ul
        className={`${
          search.length <= 0 ? "hidden" : "block"
        } text-[1rem] font-medium font-Montserrat Search_Suggestion overflow-hidden`}
      >
        {/* Search Suggestion */}
        {suggest.map((suggest, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                getValuefromChild(suggest);
                UpdateSearch(suggest);
              }}
            >
              {searchQuery.some(
                (previous) => previous.toLowerCase() === suggest.toLowerCase()
              ) && <VscHistory className="-translate-y-[1px]" />}
              {suggest}
            </li>
          );
        })}
      </ul>
      <div
        className={`justify-between mt-1 mb-5 ${
          searchQuery.length == 0 ? "hidden" : "flex"
        } items-center flex-row `}
      >
        <h1 className="text-xl font-semibold text-gray-600">Recent</h1>
        <button
          className="text-sm font-medium tr-drop font-Montserrat hover:text-red-400"
          onClick={(e) => {
            e.preventDefault();
            ClearHistory();
          }}
        >
          Clear
        </button>
      </div>
      <ul className="flex flex-row flex-wrap items-center w-full gap-2 h-max justify-self-auto">
        {searchQuery.map((Historys, i) => {
          return (
            <li
              key={Historys + i}
              onClick={() => {
                getValuefromChild(Historys);
              }}
              className="items-center gap-1 px-3 py-2 text-sm font-medium text-gray-800 rounded-md shadow-sm cursor-pointer bg-gray-50 font-Montserrat fx-row tr-drop hover:bg-gray-100 w-max"
            >
              <BiSearchAlt size={18} /> {Historys}
            </li>
          );
        })}
      </ul>

      {/* Popular Searches */}
      <h1 className="my-4 text-lg font-semibold text-gray-700">
        Popular Topics
      </h1>
      <div className="flex flex-row flex-wrap items-center gap-4 populat-searchs justify-self-auto">
        <section>
          <img
            src={NatureLogo}
            alt="Nature"
            className="object-cover w-8 h-8 bg-center rounded-full min-w-8 min-h-8"
          />
          <h1 className="text-sm font-medium font-RocknRoll">Nature</h1>
        </section>
        <section>
          <img
            src={FoodLogo}
            alt="Food"
            className="object-cover w-8 h-8 bg-center rounded-full min-w-8 min-h-8"
          />
          <h1 className="text-sm font-medium font-RocknRoll">Food</h1>
        </section>
        <section>
          <img
            src={TravelLogo}
            alt="Travel"
            className="object-cover w-8 h-8 bg-center rounded-full min-w-8 min-h-8"
          />
          <h1 className="text-sm font-medium font-RocknRoll">Travel</h1>
        </section>
        <section>
          <img
            src={SpaceLogo}
            alt="Space"
            className="object-cover w-8 h-8 bg-center rounded-full min-w-8 min-h-8"
          />
          <h1 className="text-sm font-medium font-RocknRoll">Space</h1>
        </section>
        <section>
          <img
            src={Technologo}
            alt="Nature"
            className="object-cover w-8 h-8 bg-center rounded-full min-w-8 min-h-8"
          />
          <h1 className="text-sm font-medium font-RocknRoll">Tecnology</h1>
        </section>
      </div>
    </div>
  );
};

export default SearchBox;
