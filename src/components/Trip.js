import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../Assets/wallpaperflare.com_wallpaper (1).jpg";
import Trip2 from "../Assets/md-sameul-9UqzeQYkCgg-unsplash.jpg";
import Trip3 from "../Assets/35e31bae7ecf2c.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google maps</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Sundarban"
          price="10000"
          text="Sundarbans is a mangrove area in the delta formed by 
        the confluence of the Ganges, Brahmaputra and Meghna Rivers 
        in the Bay of Bengal. Sundarban Reserve Forest of Bangladesh 
        is the largest mangrove forest in the world."
        />
        <TripData
          image={Trip2}
          heading="Trip in Jaflong"
          price="15000"
          text="Jaflong is a hill station and tourist destination in the Division 
        of Sylhet, Bangladesh. It is located in Gowainghat Upazila of Sylhet District 
        and situated at the border between Bangladesh and the Indian state of Meghalaya, 
        overshadowed by subtropical mountains and rainforests."
        />
        <TripData
          image={Trip3}
          heading="Trip in Saint Martin Island"
          price="17000"
          text="Saint Martin Island is a small island in the northeastern part of the Bay of Bengal,
         about 9 km south of the tip of the Cox's Bazar-Teknaf peninsula, and forming the southernmost 
         part of Bangladesh. There is a small adjoining island that is separated at high tide, 
         called Chera Dwip."
        />
      </div>
    </div>
  );
}

export default Trip;
