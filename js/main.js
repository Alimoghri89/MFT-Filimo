
import fetchMediasSlider from "../js/MainSlider.js";
import fetchMediasFree from "../js/FreeVip.js";
import fetchMediasAwesome from "../js/Awesom.js";
import fetchMediasNewest from "../js/newest.js";
import fetchMediasHot from "../js/hot.js";
import fetchMediasOnline from "../js/online.js";
import fetchMediasPopular from "../js/popular.js";
import fetchMediasTVShows from "../js/tvShows.js";
import fetchMediasComment from "../js/commentSlider.js";
const dataBase = "https://alimoghri89.github.io/Filimo-API/db.json"

try {
      fetchMediasSlider(dataBase);    
      if (!fetchMediasSlider) {
      throw new Error("fetching Data error in slider");
      }
} 
catch (error) {
      console.error(error.message);
}

try {
      fetchMediasFree(dataBase);    
      if (!fetchMediasFree) {
      throw new Error("fetching Data error in Free VIP");
      }
} 
catch (error) {
      console.error(error.message);
}

try {
      fetchMediasAwesome(dataBase);
      if (!fetchMediasAwesome) {
      throw new Error("fetching Data error in Awesome Movies");
      }
} 
catch (error) {
      console.error(error.message);
}

try {
      fetchMediasNewest(dataBase);
      if (!fetchMediasNewest) {
      throw new Error("fetching Data error in Newst Movies");
      }
} 
catch (error) {
      console.error(error.message);
}

try {
      fetchMediasHot(dataBase);
      if (!fetchMediasHot) {
      throw new Error("fetching Data error in Hot Movies");
      }
} 
catch (error) {
      console.error(error.message);
}

try {
      fetchMediasOnline(dataBase);
      if (!fetchMediasOnline) {
      throw new Error("fetching Data error in Online Movies");
      }
} 
catch (error) {
      console.error(error.message);
}

try {
      fetchMediasPopular(dataBase);
      if (!fetchMediasPopular) {
      throw new Error("fetching Data error in Popular Movies");
      }
} 
catch (error) {
      console.error(error.message);
}

try {
      fetchMediasTVShows(dataBase);
      if (!fetchMediasTVShows) {
      throw new Error("fetching Data error in TV Shows");
      }
} 
catch (error) {
      console.error(error.message);
}

try {
      fetchMediasComment();
      if (!fetchMediasComment) {
      throw new Error("fetching Data error in Comment Slider");
      }
} 
catch (error) {
      console.error(error.message);
}