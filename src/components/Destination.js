import Mountain1 from "../Assets/shomitro-kumar-ghosh-fUrrQ4y-ENI-unsplash.jpg";
import Mountain2 from "../Assets/35e31bae7ecf2c.jpg";
import Mountain3 from "../Assets/hemendra-ahuja-WWDXwam1jG4-unsplash.jpg";
import Mountain4 from "../Assets/amit-ranjan-mhJODzwzCtg-unsplash.jpg";
import Mountain5 from "../Assets/rahat-khandaker-GBOqXldivtI-unsplash.jpg";
import Mountain6 from "../Assets/2019-09-11.jpg";
import Mountain7 from "../Assets/unkknown-traveller-l2-gRPhph60-unsplash.jpg";
import Mountain8 from "../Assets/wallpaperflare.com_wallpaper (1).jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination In Bangladesh</h1>
      <p>Tour give you the oppourtunity to see a lot, within a time frame</p>

      <DestinationData
        className="first-des"
        heading="Cox's Bazar, Chittagong"
        text="Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
        known for its very long, sandy beachfront, stretching from Sea Beach
        in the north to Kolatoli Beach in the south. Aggameda Khyang
        monastery is home to bronze statues and centuries-old Buddhist
        manuscripts. South of town, the tropical rainforest of Himchari
        National Park has waterfalls and many birds. North, sea turtles
        breed on nearby Sonadia Island."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Sreemangal, Sylhet"
        text="Srimangal is a small hill town located in the Sylhet 
        Division of Bangladesh, known for its picturesque tea gardens
         and natural beauty. The town is situated in the midst of the 
         beautiful tea gardens of the Sylhet Valley and is surrounded 
         by lush green hills and forests."
        img1={Mountain3}
        img2={Mountain4}
      />
      <DestinationData
        className="first-dess"
        heading="Sajek Vally, Rangamati"
        text="Sajek Valley is one of the most popular tourist spots in 
        Bangladesh situated among the hills of the Kasalong range of 
        mountains in Sajek union, Baghaichhari Upazila in Rangamati 
        District. The valley is 2,000 feet above sea level. Sajek Valley 
        is known as the Queen of Hills & Roof of Rangamati."
        img1={Mountain5}
        img2={Mountain6}
      />
      <DestinationData
        className="first-dess-reverse"
        heading="Sundarban, Mongla"
        text="Sundarbans is a mangrove area in the delta formed by 
        the confluence of the Ganges, Brahmaputra and Meghna Rivers 
        in the Bay of Bengal. Sundarban Reserve Forest of Bangladesh 
        is the largest mangrove forest in the world."
        img1={Mountain7}
        img2={Mountain8}
      />
    </div>
  );
};

export default Destination;
