import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';




const points = [
  // Add your points here
  {
    "name": "Mozart St & 55th St",
    "lat": 40.000,  // Example latitude
    "lng": -87.000  // Example longitude
  },
  {
    "name": "Nordica Ave & Medill Ave",
    "lat": 40.001,  // Example latitude
    "lng": -87.001  // Example longitude
  },
  {
    "name": "Pittsburgh Ave & Irving Park Rd",
    "lat": 40.002,  // Example latitude
    "lng": -87.002  // Example longitude
  },
  {
    "name": "California Ave & 41st St",
    "lat": 40.003,  // Example latitude
    "lng": -87.003  // Example longitude
  },
  {
    "name": "Milwaukee Ave & Ainslie St",
    "lat": 40.004,  // Example latitude
    "lng": -87.004  // Example longitude
  },
  { "name": "Long Ave & Diversey Ave", "lat": 41.933, "lng": -87.707 },
  { "name": "Martin Luther King Dr & 87th St", "lat": 41.751, "lng": -87.613 },
  { "name": "Green St & Madison St", "lat": 41.878, "lng": -87.629 },
  { "name": "Buckingham Fountain", "lat": 41.875, "lng": -87.624 },
  { "name": "Michigan Ave & 18th St", "lat": 41.855, "lng": -87.626 },
  { "name": "Kedvale Ave & Peterson Ave", "lat": 41.986, "lng": -87.726 },
  { "name": "Indiana Ave & 26th St", "lat": 41.832, "lng": -87.623 },
  { "name": "Sheridan Rd & Loyola Ave", "lat": 41.997, "lng": -87.656 },
  { "name": "Milwaukee Ave & Cuyler Ave", "lat": 41.930, "lng": -87.734 },
  { "name": "Keeler Ave & Carmen Ave", "lat": 41.937, "lng": -87.726 },
  { "name": "Lockwood Ave & Grand Ave", "lat": 41.913, "lng": -87.756 },
  { "name": "Woodlawn Ave & Lake Park Ave", "lat": 41.803, "lng": -87.591 },
  { "name": "Racine Ave & Garfield Blvd", "lat": 41.804, "lng": -87.655 },
  { "name": "Broadway & Thorndale Ave", "lat": 41.984, "lng": -87.653 },
  { "name": "Lincoln Ave & Roscoe St", "lat": 41.939, "lng": -87.654 },
  { "name": "Oakley Ave & Irving Park Rd", "lat": 41.933, "lng": -87.709 },
  { "name": "Wells St & Institute Pl", "lat": 41.894, "lng": -87.632 },
  { "name": "Western Ave & Lake St", "lat": 41.887, "lng": -87.681 },
  { "name": "Rush St & Cedar St", "lat": 41.906, "lng": -87.630 },
  { "name": "Lincoln Ave & Byron St", "lat": 41.951, "lng": -87.685 },
  { "name": "Bennett Ave & 79th St", "lat": 41.765, "lng": -87.667 },
  { "name": "Shields Ave & 28th Pl", "lat": 41.836, "lng": -87.632 },
  { "name": "Stony Island Ave & 64th St", "lat": 41.777, "lng": -87.591 },
  { "name": "Cottage Grove Ave & 51st St", "lat": 41.801, "lng": -87.609 },
  { "name": "Exchange Ave & 79th St", "lat": 41.764, "lng": -87.639 },
  { "name": "Montrose Harbor", "lat": 41.965, "lng": -87.639 },
  { "name": "Lavergne Ave & Division St", "lat": 41.911, "lng": -87.737 },
  { "name": "Sedgwick St & Schiller St", "lat": 41.911, "lng": -87.638 },
  { "name": "Greenview Ave & Fullerton Ave", "lat": 41.926, "lng": -87.648 },
  { "name": "Karlov Ave & Armitage Ave", "lat": 41.926, "lng": -87.717 },
  { "name": "Hale Ave & 107th St", "lat": 41.712, "lng": -87.639 },
  { "name": "Sheffield Ave & Fullerton Ave", "lat": 41.927, "lng": -87.653 },
  { "name": "Dearborn St & Erie St", "lat": 41.891, "lng": -87.629 },
  { "name": "Loomis St & Jackson Blvd", "lat": 41.875, "lng": -87.669 },
  { "name": "Halsted St & 21st St", "lat": 41.855, "lng": -87.646 },
  { "name": "Loomis Blvd & 84th St", "lat": 41.748, "lng": -87.673 },
  { "name": "Avenue O & 134th St", "lat": 41.688, "lng": -87.543 },
  { "name": "Kedzie Ave & Palmer Ct", "lat": 41.813, "lng": -87.710 },
  { "name": "Wolcott Ave & Polk St", "lat": 41.832, "lng": -87.668 },
  { "name": "New St & Illinois St", "lat": 41.890, "lng": -87.626 },
  { "name": "Pulaski Rd & Lake St", "lat": 41.873, "lng": -87.728 },
  { "name": "Damen Ave & Thomas St (Augusta Blvd)", "lat": 41.887, "lng": -87.654 },
  { "name": "Talman Ave & Addison St", "lat": 41.931, "lng": -87.711 },
  { "name": "Meade Ave & Diversey Ave", "lat": 41.939, "lng": -87.729 },
  { "name": "Wilton Ave & Diversey Pkwy", "lat": 41.937, "lng": -87.658 },
  { "name": "Racine Ave & 18th St", "lat": 41.854, "lng": -87.645 },
  { "name": "Kildare Ave & Archer Ave", "lat": 41.826, "lng": -87.702 },
  { "name": "Wood St & Webster Ave", "lat": 41.927, "lng": -87.664 },
  { "name": "Desplaines St & Randolph St", "lat": 41.884, "lng": -87.639 },
  { "name": "Hoyne Ave & 34th St", "lat": 41.832, "lng": -87.665 },
  { "name": "Ravenswood Ave & Irving Park Rd", "lat": 41.951, "lng": -87.677 },
  { "name": "Knox Ave & Marquette Ave", "lat": 41.861, "lng": -87.735 },
  { "name": "La Villita Park", "lat": 41.823, "lng": -87.709 },
  { "name": "University Ave & 59th St", "lat": 41.787, "lng": -87.624 },
  { "name": "Honore St & Division St", "lat": 41.880, "lng": -87.667 },
  { "name": "Halsted St & 59th St", "lat": 41.787, "lng": -87.644 },
  { "name": "Troy St & Elston Ave", "lat": 41.933, "lng": -87.702 },
  { "name": "Parkside Ave & Armitage Ave", "lat": 41.928, "lng": -87.710 },
  { "name": "Racine Ave & 65th St", "lat": 41.751, "lng": -87.654 },
  { "name": "Hermitage Ave & Polk St", "lat": 41.825, "lng": -87.663 },
  { "name": "Halsted St & 73rd St", "lat": 41.749, "lng": -87.664 },
  { "name": "Grace St & Cicero Ave", "lat": 41.835, "lng": -87.733 },
  { "name": "Prospect Sq & 91st St", "lat": 41.730, "lng": -87.664 },
  { "name": "Wabash Ave & 49th St", "lat": 41.752, "lng": -87.628 },
  { "name": "Ashland Ave & Lake St", "lat": 41.884, "lng": -87.674 },
  { "name": "Laramie Ave & Kinzie St", "lat": 41.898, "lng": -87.715 },
   { "name": "Ashland Ave & Grand Ave", "lat": 41.882, "lng": -87.705 },
   { "name": "Marine Dr & Ainslie St", "lat": 41.9714, "lng": -87.6491 },
{ "name": "Southport Ave & Irving Park Rd", "lat": 41.9538, "lng": -87.6636 },
{ "name": "Spaulding Ave & 63rd", "lat": 41.7797, "lng": -87.7102 },
{ "name": "Hoyne Ave & 47th St", "lat": 41.8089, "lng": -87.6771 },
{ "name": "Clark St & Elmdale Ave", "lat": 41.9901, "lng": -87.6697 },
{ "name": "21st St & Pulaski Rd", "lat": 41.8538, "lng": -87.7255 },
{ "name": "Blackstone Ave & Hyde Park Blvd", "lat": 41.8022, "lng": -87.5916 },
{ "name": "Blue Island Ave & 18th St", "lat": 41.8576, "lng": -87.6615 },
{ "name": "Damen Ave & Cortland St", "lat": 41.9179, "lng": -87.6774 },
{ "name": "State St & Pershing Rd", "lat": 41.8235, "lng": -87.6262 },
{ "name": "Broadway & Waveland Ave", "lat": 41.9493, "lng": -87.6481 },
{ "name": "Stony Island Ave & 82nd St", "lat": 41.7464, "lng": -87.5857 },
{ "name": "Ada St & Washington Blvd", "lat": 41.8837, "lng": -87.6615 },
{ "name": "Western Blvd & 48th Pl", "lat": 41.8058, "lng": -87.6836 },
{ "name": "Racine Ave & 35th St", "lat": 41.8315, "lng": -87.6547 },
{ "name": "Austin Blvd & Madison St", "lat": 41.8791, "lng": -87.7743 },
{ "name": "Smith Park", "lat": 41.8926, "lng": -87.6841 },
{ "name": "Fairfield Ave & 44th St", "lat": 41.8122, "lng": -87.6928 },
{ "name": "Michigan Ave & Madison St", "lat": 41.8821, "lng": -87.6253 },
{ "name": "Damen Ave & Madison St", "lat": 41.8815, "lng": -87.6741 },
{ "name": "MLK Jr Dr & 56th St", "lat": 41.7931, "lng": -87.6165 },
{ "name": "63rd St Beach", "lat": 41.7832, "lng": -87.5755 },
{ "name": "California Ave & Lake St", "lat": 41.8842, "lng": -87.6963 },
{ "name": "Campbell Ave & Fullerton Ave", "lat": 41.9254, "lng": -87.6925 },
{ "name": "MLK Jr Dr & 29th St", "lat": 41.8417, "lng": -87.6176 },
{ "name": "Central Ave & Harrison St", "lat": 41.8732, "lng": -87.7643 },
{ "name": "Malcolm X College", "lat": 41.8789, "lng": -87.6626 },
{ "name": "Leavitt St & Chicago Ave", "lat": 41.8958, "lng": -87.6825 },
{ "name": "Glenwood Ave & Touhy Ave", "lat": 42.0127, "lng": -87.6659 },
{ "name": "Halsted St & 37th St", "lat": 41.8273, "lng": -87.6445 },
{ "name": "Laramie Ave & Madison St", "lat": 41.8807, "lng": -87.7551 },
{ "name": "Wood St & 33rd St", "lat": 41.8345, "lng": -87.6708 },
{ "name": "Wood St & Augusta Blvd", "lat": 41.8992, "lng": -87.6721 },
{ "name": "Jeffery Blvd & 67th St", "lat": 41.7735, "lng": -87.5761 },
{ "name": "Paulina Ave & North Ave", "lat": 41.9105, "lng": -87.6708 },
{ "name": "Hoyne Ave & Balmoral Ave", "lat": 41.9798, "lng": -87.679 },
{ "name": "Hegewisch Metra Station", "lat": 41.655, "lng": -87.5539 },
{ "name": "Monticello Ave & Irving Park Rd", "lat": 41.9535, "lng": -87.7177 },
{ "name": "Drake Ave & Montrose Ave", "lat": 41.9616, "lng": -87.7144 },
{ "name": "Southport Ave & Wellington Ave", "lat": 41.9355, "lng": -87.6634 },
{ "name": "Kilbourn Ave & Roscoe St", "lat": 41.9425, "lng": -87.7427 },
{ "name": "Damen Ave & Walnut (Lake) St", "lat": 41.8869, "lng": -87.6774 },
{ "name": "Aberdeen St & Randolph St", "lat": 41.8846, "lng": -87.6549 },
{ "name": "State St & 95th St", "lat": 41.7216, "lng": -87.6243 },
{ "name": "Wentworth Ave & 63rd St", "lat": 41.7797, "lng": -87.6296 },
{ "name": "Kenton Ave & Madison St", "lat": 41.8809, "lng": -87.7326 },
{ "name": "Public Rack - Michigan Ave & 102nd St", "lat": 41.7832, "lng": -87.6242 },
  { "name": "Public Rack - Central Park Ave & Fulton Blvd", "lat": 41.7825, "lng": -87.6290 },
  { "name": "Public Rack - Mulligan & Northwest Hwy", "lat": 41.7830, "lng": -87.6355 },
  { "name": "Public Rack - Piotrowski Park", "lat": 41.7820, "lng": -87.6440 },
  { "name": "Public Rack - California Ave & Touhy Ave - NW", "lat": 41.7850, "lng": -87.6415 },
  { "name": "Public Rack - Spencer Elementary Technology Academy", "lat": 41.7835, "lng": -87.6360 },
  { "name": "Public Rack - Springfield Ave & Lawrence Ave", "lat": 41.7855, "lng": -87.6405 },
  { "name": "Komensky Ave & 31st St", "lat": 41.7800, "lng": -87.6315 },
  { "name": "Public Rack - Karlov Ave & 26th St", "lat": 41.7795, "lng": -87.6305 },
  { "name": "Public Rack - Milwaukee Ave & Pensacola Ave", "lat": 41.7815, "lng": -87.6295 },
  { "name": "Public Rack - Leoti Ave & Central Ave (north)", "lat": 41.7820, "lng": -87.6280 },
  { "name": "Public Rack - Christiana & Lincoln", "lat": 41.7805, "lng": -87.6325 },
  { "name": "Public Rack - Troy & 111th St", "lat": 41.7860, "lng": -87.6410 },
  { "name": "Public Rack - Avers Ave & Irving Park Rd", "lat": 41.7825, "lng": -87.6385 },
  { "name": "Public Rack - Richmond St & Thorndale Ave", "lat": 41.7840, "lng": -87.6450 },
  { "name": "Washtenaw Ave & Polk St", "lat": 41.7870, "lng": -87.6475 },
  { "name": "Public Rack - Ewing Ave & 102nd St", "lat": 41.7790, "lng": -87.6265 },
  { "name": "Public Rack - Aida Food Market", "lat": 41.7795, "lng": -87.6280 },
  { "name": "Public Rack - Western Blvd & 52nd St", "lat": 41.8115, "lng": -87.6390 },
  { "name": "Public Rack - 63rd & Western Ave S", "lat": 41.7910, "lng": -87.6840 },
  { "name": "Maplewood Ave & 59th St", "lat": 41.7905, "lng": -87.6600 },
  { "name": "Public Rack - Pulaski Rd & 83rd St", "lat": 41.7775, "lng": -87.7050 },
  { "name": "Augusta Blvd & Laramie Ave", "lat": 41.8750, "lng": -87.7110 },
  { "name": "Public Rack - Mont Clare Ave & Higgins Ave", "lat": 41.9310, "lng": -87.7805 },
  { "name": "Public Rack - Osceola Ave & Touhy Ave", "lat": 41.9570, "lng": -87.7220 },
  { "name": "Public Rack - Milwaukee Ave & Addison St", "lat": 41.9440, "lng": -87.6930 },
  { "name": "Public Rack - 10557 S Western Ave", "lat": 41.7595, "lng": -87.6760 },
  { "name": "Public Rack - Western Ave & Devon Ave", "lat": 41.9790, "lng": -87.6910 },
  { "name": "Mozart St & Jackson Blvd", "lat": 41.8835, "lng": -87.6920 },
  { "name": "Public Rack - Linder & Elston", "lat": 41.9475, "lng": -87.7080 },
  { "name": "Public Rack - Karlov Ave & Kamerling Ave", "lat": 41.9295, "lng": -87.7115 },
  { "name": "Public Rack - Pulaski & 84th", "lat": 41.7725, "lng": -87.7110 },
  { "name": "Public Rack - Central & Leland", "lat": 41.9610, "lng": -87.6970 },
  { "name": "Western Ave & Gunnison St", "lat": 41.9750, "lng": -87.6860 },
  { "name": "North Ave & New England Ave", "lat": 41.9080, "lng": -87.7260 },
  { "name": "Public Rack - Pulaski Rd & Polk St", "lat": 41.7730, "lng": -87.6845 },
  { "name": "Public Rack - Kenton & Lawrence", "lat": 41.9460, "lng": -87.7170 },
  { "name": "Public Rack - Irving Park Rd & Menard Ave", "lat": 41.9425, "lng": -87.7335 },
  { "name": "Public Rack - Milwaukee Ave & Kennedy Expy", "lat": 41.9330, "lng": -87.7230 },
  { "name": "Public Rack - Cicero Ave & Wellington Ave", "lat": 41.8785, "lng": -87.7115 },
  { "name": "Public Rack - Wood St & 47th St", "lat": 41.8070, "lng": -87.6840 },
  { "name": "Public Rack - Damen Ave & 84th St", "lat": 41.7655, "lng": -87.6720 },
  { "name": "Public Rack - Western Ave & 105th St", "lat": 41.7435, "lng": -87.6730 },
  { "name": "Public Rack - Hamilton Park", "lat": 41.8260, "lng": -87.6520 },
  { "name": "Public Rack - Prairie Ave & 78th St", "lat": 41.7640, "lng": -87.6460 },
  { "name": "Public Rack - Ewing Ave & 95th St", "lat": 41.7355, "lng": -87.6275 },
  { "name": "Public Rack - Kinzua Ave & Devon Ave", "lat": 41.9795, "lng": -87.7250 },
  { "name": "Rockwell St & 63rd St", "lat": 41.7900, "lng": -87.6795 },
  { "name": "Public Rack - Menard Ave & Grand Ave", "lat": 41.8780, "lng": -87.7095 },
  { "name": "Public Rack - Spaulding Ave & 71st St", "lat": 41.7705, "lng": -87.6825 },
  { "name": "Public Rack - California & 71st", "lat": 41.7680, "lng": -87.6585 },
  { "name": "Public Rack - Kostner Ave & Lake St", "lat": 41.8675, "lng": -87.7090 },
  { "name": "Public Rack - Miami Ave & Milwaukee Ave", "lat": 41.9225, "lng": -87.7085 },
  { "name": "Public Rack - Harding Ave & 47th St", "lat": 41.8045, "lng": -87.6835 },
  { "name": "Public Rack - California Ave & Devon Ave - NE", "lat": 41.9795, "lng": -87.7235 },
  { "name": "Public Rack - Nordica Ave & Higgins Ave", "lat": 41.9460, "lng": -87.7300 },
  { "name": "Public Rack - Lavergne Ave & Belle Plaine Ave", "lat": 41.9340, "lng": -87.7315 },
  { "name": "Public Rack - Pratt Ave & Odell Ave", "lat": 41.9795, "lng": -87.7430 },
  { "name": "Public Rack - Commercial Ave & 89th St", "lat": 41.7240, "lng": -87.6060 },
  { "name": "Public Rack - Central Ave & North Ave", "lat": 41.9130, "lng": -87.7320 },
  { "name": "Hampden Ct & Diversey Ave", "lat": 41.9315, "lng": -87.6445 },
  { "name": "Public Rack - 83rd Pl & Kedzie Ave N", "lat": 41.7525, "lng": -87.6980 },
  { "name": "Public Rack - Marquette Ave & 83rd St", "lat": 41.7435, "lng": -87.6920 },
  { "name": "Public Rack - Pulaski Rd & 85th St", "lat": 41.7480, "lng": -87.6900 },
  { "name": "Francisco Ave & Chicago Ave", "lat": 41.9155, "lng": -87.6940 },
  { "name": "Public Rack - Cicero Ave & Le Moyne St - midblock", "lat": 41.9245, "lng": -87.7305 },
  { "name": "Public Rack - Springfield Ave & 63rd St", "lat": 41.7915, "lng": -87.6805 },
  { "name": "Public Rack - Orville T Bright School", "lat": 41.7900, "lng": -87.6900 },
  { "name": "Public Rack - Indiana Ave & 111th St", "lat": 41.7195, "lng": -87.6250 },
  { "name": "Public Rack - Kedzie Ave & 61st Pl W", "lat": 41.7820, "lng": -87.7025 },
  { "name": "Public Rack - Neva Ave & Grand Ave", "lat": 41.8805, "lng": -87.7105 },
  { "name": "Public Rack - Campbell Ave & Pratt Blvd", "lat": 41.9665, "lng": -87.7225 },
  { "name": "Public Rack - Princeton Ave & 43rd St", "lat": 41.8120, "lng": -87.6360 },
  { "name": "Public Rack - Lawndale & 63rd St", "lat": 41.7910, "lng": -87.6875 },
  { "name": "Public Rack - Justine St & 87th St", "lat": 41.7580, "lng": -87.6710 },
  { "name": "Public Rack - Rockwell Ave & 71st St", "lat": 41.7725, "lng": -87.6795},
  { "name": "Public Rack - Aida Food Market", "lat": 41.7764, "lng": -87.6312 },
    { "name": "Public Rack - Western Blvd & 52nd St", "lat": 41.8118, "lng": -87.6438 },
    { "name": "Public Rack - 63rd & Western Ave S", "lat": 41.7918, "lng": -87.6735 },
    { "name": "Maplewood Ave & 59th St", "lat": 41.7910, "lng": -87.6920 },
    { "name": "Public Rack - Pulaski Rd & 83rd St", "lat": 41.7491, "lng": -87.7117 },
    { "name": "Augusta Blvd & Laramie Ave", "lat": 41.8790, "lng": -87.7150 },
    { "name": "Public Rack - Mont Clare Ave & Higgins Ave", "lat": 41.9445, "lng": -87.7947 },
    { "name": "Public Rack - Osceola Ave & Touhy Ave", "lat": 41.9635, "lng": -87.7125 },
    { "name": "Public Rack - Milwaukee Ave & Addison St", "lat": 41.9346, "lng": -87.7301 },
    { "name": "Public Rack - 10557 S Western Ave", "lat": 41.7435, "lng": -87.6734 },
    { "name": "Public Rack - Western Ave & Devon Ave", "lat": 41.9652, "lng": -87.6650 },
    { "name": "Mozart St & Jackson Blvd", "lat": 41.8725, "lng": -87.6861 },
    { "name": "Public Rack - Linder & Elston", "lat": 41.9380, "lng": -87.7310 },
    { "name": "Public Rack - Karlov Ave & Kamerling Ave", "lat": 41.8540, "lng": -87.7080 },
    { "name": "Public Rack - Pulaski & 84th", "lat": 41.7491, "lng": -87.7117 },
    { "name": "Public Rack - Central & Leland", "lat": 41.9701, "lng": -87.6766 },
    { "name": "Western Ave & Gunnison St", "lat": 41.9835, "lng": -87.6800 },
    { "name": "North Ave & New England Ave", "lat": 41.9082, "lng": -87.7361 },
    { "name": "Public Rack - Pulaski Rd & Polk St", "lat": 41.8520, "lng": -87.7125 },
    { "name": "Public Rack - Kenton & Lawrence", "lat": 41.9346, "lng": -87.7198 },
    { "name": "Public Rack - Irving Park Rd & Menard Ave", "lat": 41.9473, "lng": -87.7362 },
    { "name": "Public Rack - Milwaukee Ave & Kennedy Expy", "lat": 41.9446, "lng": -87.7100 },
    { "name": "Public Rack - Cicero Ave & Wellington Ave", "lat": 41.9045, "lng": -87.7115 },
    { "name": "Public Rack - Wood St & 47th St", "lat": 41.8095, "lng": -87.6625 },
    { "name": "Public Rack - Damen Ave & 84th St", "lat": 41.7435, "lng": -87.6612 },
    { "name": "Public Rack - Western Ave & 105th St", "lat": 41.7106, "lng": -87.6707 },
    { "name": "Public Rack - Hamilton Park", "lat": 41.7885, "lng": -87.6345 },
    { "name": "Public Rack - Prairie Ave & 78th St", "lat": 41.7416, "lng": -87.6278 },
    { "name": "Public Rack - Ewing Ave & 95th St", "lat": 41.7275, "lng": -87.6090 },
    { "name": "Public Rack - Kinzua Ave & Devon Ave", "lat": 41.9744, "lng": -87.7344 },
    { "name": "Rockwell St & 63rd St", "lat": 41.7918, "lng": -87.6812 },
    { "name": "Public Rack - Menard Ave & Grand Ave", "lat": 41.9175, "lng": -87.7332 },
    { "name": "Public Rack - Spaulding Ave & 71st St", "lat": 41.7595, "lng": -87.7015 },
    { "name": "Public Rack - California & 71st", "lat": 41.7590, "lng": -87.6990 },
    { "name": "Public Rack - Kostner Ave & Lake St", "lat": 41.8772, "lng": -87.7147 },
    { "name": "Public Rack - Miami Ave & Milwaukee Ave", "lat": 41.9053, "lng": -87.7064 },
    { "name": "Public Rack - Harding Ave & 47th St", "lat": 41.8096, "lng": -87.6480 },
    { "name": "Public Rack - California Ave & Devon Ave - NE", "lat": 41.9711, "lng": -87.6942 },
    { "name": "Public Rack - Nordica Ave & Higgins Ave", "lat": 41.9737, "lng": -87.7290 },
    { "name": "Public Rack - Lavergne Ave & Belle Plaine Ave", "lat": 41.9525, "lng": -87.7356 },
    { "name": "Public Rack - Pratt Ave & Odell Ave", "lat": 41.9735, "lng": -87.7295 },
    { "name": "Public Rack - Commercial Ave & 89th St", "lat": 41.7153, "lng": -87.6036 },
    { "name": "Public Rack - Central Ave & North Ave", "lat": 41.9160, "lng": -87.7077 },
    { "name": "Hampden Ct & Diversey Ave", "lat": 41.9296, "lng": -87.6437 },
    { "name": "Public Rack - 83rd Pl & Kedzie Ave N", "lat": 41.7406, "lng": -87.6986 },
    { "name": "Public Rack - Marquette Ave & 83rd St", "lat": 41.7399, "lng": -87.7038 },
    { "name": "Public Rack - Pulaski Rd & 85th St", "lat": 41.7402, "lng": -87.7092 },
    { "name": "Francisco Ave & Chicago Ave", "lat": 41.9128, "lng": -87.6840 },
    { "name": "Public Rack - Cicero Ave & Le Moyne St - midblock", "lat": 41.9091, "lng": -87.7117 },
    { "name": "Public Rack - Springfield Ave & 63rd St", "lat": 41.7918, "lng": -87.6747 },
    { "name": "Public Rack - Orville T Bright School", "lat": 41.7515, "lng": -87.6450 },
    { "name": "Public Rack - Indiana Ave & 111th St", "lat": 41.7065, "lng": -87.6260 },
    { "name": "Public Rack - Kedzie Ave & 61st Pl W", "lat": 41.7824, "lng": -87.7015 },
    { "name": "Public Rack - Neva Ave & Grand Ave", "lat": 41.9076, "lng": -87.7326 },
    { "name": "Public Rack - Campbell Ave & Pratt Blvd", "lat": 41.9455, "lng": -87.7285 },
    { "name": "Public Rack - Princeton Ave & 43rd St", "lat": 41.8125, "lng": -87.6357 },
    { "name": "Public Rack - Lawndale & 63rd St", "lat": 41.7918, "lng": -87.7103 },
    { "name": "Public Rack - Justine St & 87th St", "lat": 41.7474, "lng": -87.6887 },
    { "name": "Public Rack - Rockwell Ave & 71st St", "lat": 41.7595, "lng": -87.6985 },
    { "name": "Public Rack - Western Ave & 92nd Pl", "lat": 41.7384, "lng": -87.6456 },
    { "name": "Public Rack - Brighton Park Branch Chicago Library", "lat": 41.8052, "lng": -87.7118 },
    { "name": "Public Rack - Kildare Ave & North Ave", "lat": 41.9123, "lng": -87.7425 },
    { "name": "Public Rack - Ellis Ave & 132nd Pl", "lat": 41.7100, "lng": -87.6295 },
    { "name": "Public Rack - Harlem and W. 59th", "lat": 41.7952, "lng": -87.7025 },
    { "name": "Public Rack - Milwaukee Ave & Sunnyside Ave", "lat": 41.9546, "lng": -87.7051 },
    { "name": "Public Rack - Pulaski & Ardmore", "lat": 41.9704, "lng": -87.7101 },
    { "name": "Public Rack - Normal Blvd & 61st Pl", "lat": 41.7908, "lng": -87.6704 },
    { "name": "Public Rack - Baltimore Ave & 132nd St", "lat": 41.7085, "lng": -87.6280 },
    { "name": "Public Rack - Sayre Ave & 59th St", "lat": 41.7909, "lng": -87.7360 },
    { "name": "Public Rack - Wolcott Ave & 61st St", "lat": 41.7909, "lng": -87.6580 },
    { "name": "Public Rack - California Ave & Devon Ave - NW", "lat": 41.9682, "lng": -87.7073 },
    { "name": "Public Rack - Devon Ave & Minnehaha Ave (east)", "lat": 41.9720, "lng": -87.7085 },
    { "name": "Public Rack - Ashland Ave & 83rd St", "lat": 41.7472, "lng": -87.6701 },
    { "name": "Public Rack - Irving Park Rd & Austin Ave", "lat": 41.9476, "lng": -87.7497 },
    { "name": "Public Rack - Lamon Ave & Erie St", "lat": 41.9235, "lng": -87.7472 },
    { "name": "N Green St & W Lake St", "lat": 41.8915, "lng": -87.6400 },
    { "name": "Public Rack - Vincennes Ave & 77th St", "lat": 41.7495, "lng": -87.6290 },
    { "name": "Public Rack - Central Ave & Pensacola Ave", "lat": 41.9220, "lng": -87.7245 },
    { "name": "Public Rack - Oglesby Ave & 105th St", "lat": 41.7052, "lng": -87.6055 },
    { "name": "Public Rack - East End Ave & 87th St", "lat": 41.7312, "lng": -87.6015 },
    { "name": "Public Rack - Ellis Ave & Doty Ave", "lat": 41.7225, "lng": -87.6215 },
    { "name": "Public Rack - Kostner & Bryn Mawr", "lat": 41.9642, "lng": -87.7145 },
    { "name": "Public Rack - Prairie Ave & Garfield Blvd N", "lat": 41.7945, "lng": -87.6325 },
    { "name": "Public Rack - Octavia Ave & Touhy Ave", "lat": 41.9750, "lng": -87.7205 },
    { "name": "Public Rack - Ashland Ave & 74th St", "lat": 41.7482, "lng": -87.6722 },
    { "name": "Public Rack - William J Onahan Public School", "lat": 41.9925, "lng": -87.7420 },
    { "name": "Public Rack - Avers & Granville", "lat": 41.9892, "lng": -87.7115 },
    { "name": "Public Rack - 82nd st & Kedzie Ave", "lat": 41.7496, "lng": -87.6985 },
    { "name": "Public Rack - Trumbull Ave & 111th St", "lat": 41.7067, "lng": -87.6825 },
    { "name": "Public Rack - Nashotah & Northwest Hwy", "lat": 41.9765, "lng": -87.7490 },
    { "name": "Public Rack - Spaulding Ave & North Ave", "lat": 41.9124, "lng": -87.7095 },
    { "name": "Virginia Ave & Catalpa Ave", "lat": 41.9732, "lng": -87.6808 },
    { "name": "Public Rack - Milwaukee Ave & Leland Ave", "lat": 41.9542, "lng": -87.7058 },
    { "name": "Public Rack - Laramie Ave & Belmont Ave", "lat": 41.9651, "lng": -87.7265 },
    { "name": "Public Rack - Chase Ave & Touhy Ave - NE", "lat": 41.9734, "lng": -87.7100 },
    { "name": "Public Rack - Halsted St & 111th St", "lat": 41.7042, "lng": -87.6380 },
    { "name": "Public Rack - Sawyer Ave & 111th St", "lat": 41.7045, "lng": -87.6370 },
    { "name": "Public Rack - Ada St & 117th St", "lat": 41.7058, "lng": -87.6310 },
    { "name": "Public Rack - Forest Glen & Peterson", "lat": 41.9750, "lng": -87.7445 },
    { "name": "Public Rack - Loomis St & 87th St", "lat": 41.7474, "lng": -87.6655 },
    { "name": "Public Rack - Cottage Grove & 84th St", "lat": 41.7490, "lng": -87.6600 },
    { "name": "Public Rack - Damen Ave & 80th St", "lat": 41.7425, "lng": -87.6642 },
    { "name": "Public Rack - Waller Ave & Chicago Ave", "lat": 41.9148, "lng": -87.7085 },
    { "name": "Public Rack - Oketo Ave & Belmont Ave", "lat": 41.9675, "lng": -87.7285 },
    { "name": "Public Rack - Central & Berteau", "lat": 41.9395, "lng": -87.7032 },
    { "name": "Public Rack - Pulaski Rd & 40th St", "lat": 41.8275, "lng": -87.7150 },
    { "name": "Public Rack - Mt Greenwood Library N", "lat": 41.7170, "lng": -87.7125 },
    { "name": "Public Rack - Stony Island & 87th St", "lat": 41.7325, "lng": -87.6000 },
    { "name": "Public Rack - Wilbur Wright College North", "lat": 41.9360, "lng": -87.7280 },
    { "name": "Public Rack - Nagel & Higgins", "lat": 41.9752, "lng": -87.7305 },
    { "name": "Public Rack - Nordica Ave & Addison St", "lat": 41.9688, "lng": -87.7300 },
    { "name": "Public Rack - Perry Ave & 108th Pl", "lat": 41.7015, "lng": -87.6320 },
    { "name": "Public Rack - Oglesby Ave & 95th St", "lat": 41.7235, "lng": -87.6095 },
    { "name": "Public Rack - Pullman - Ross Dress for Less", "lat": 41.7102, "lng": -87.6348 },
    { "name": "Public Rack - Leader & Caldwell", "lat": 41.9712, "lng": -87.7535 },
    { "name": "Public Rack - Michigan Ave & 110th St", "lat": 41.7048, "lng": -87.6310 },
    { "name": "Public Rack - Bishop St & 46th St", "lat": 41.8105, "lng": -87.6490 },
    { "name": "Public Rack - Kenneth Ave & 63rd St W", "lat": 41.8510, "lng": -87.6913 },
    { "name": "Public Rack - Melvina Ave & Montrose Ave", "lat": 41.9541, "lng": -87.7283 },
    { "name": "Public Rack - Austin Ave & Wrightwood Ave", "lat": 41.9336, "lng": -87.7474 },
    { "name": "Public Rack - Racine Ave & 109th Pl", "lat": 41.7128, "lng": -87.6437 },
    { "name": "Public Rack - Parnell Ave & 98th St", "lat": 41.7242, "lng": -87.6372 },
    { "name": "Public Rack - Yale Ave & 119th St", "lat": 41.6932, "lng": -87.6395 },
    { "name": "Public Rack - Central Ave & Parker Ave", "lat": 41.7481, "lng": -87.6825 },
    { "name": "Public Rack - Lafayette Ave & 95th St", "lat": 41.7154, "lng": -87.6258 },
    { "name": "Public Rack - Western Ave & 47th Pl", "lat": 41.8055, "lng": -87.6844 },
    { "name": "Public Rack - Oak Park & Wellington", "lat": 41.9355, "lng": -87.6890 },
    { "name": "Public Rack - Christiana Ave & 55th St", "lat": 41.8031, "lng": -87.7026 },
    { "name": "Public Rack - Ashburn Metra", "lat": 41.7573, "lng": -87.7111 },
    { "name": "Public Rack - Pulaski Rd & 60th St", "lat": 41.7983, "lng": -87.6935 },
    { "name": "Kedzie Ave & 38th St", "lat": 41.8328, "lng": -87.7055 },
  { "name": "May St & Cullerton St", "lat": 41.8377, "lng": -87.6613 },
  { "name": "Burley Ave & 91st St", "lat": 41.7434, "lng": -87.7025 },
  { "name": "Harlem Ave & Bloomingdale Ave", "lat": 41.8971, "lng": -87.7351 },
  { "name": "Racine Ave & 13th St", "lat": 41.8631, "lng": -87.6625 },
  { "name": "Lincoln Ave & Fullerton Ave", "lat": 41.9334, "lng": -87.6541 },
  { "name": "Columbus Ave & 79th St", "lat": 41.7573, "lng": -87.6240 },
  { "name": "Franklin St & Chicago Ave", "lat": 41.9046, "lng": -87.6312 },
  { "name": "Oconto Ave & Belmont Ave", "lat": 41.8719, "lng": -87.7491 },
  { "name": "California Ave & Francis Pl", "lat": 41.8578, "lng": -87.6919 },
  { "name": "State St & 33rd St", "lat": 41.8324, "lng": -87.6257 },
  { "name": "Wood St & 35th St", "lat": 41.8336, "lng": -87.6660 },
  { "name": "Houston Ave & 92nd St", "lat": 41.7428, "lng": -87.6299 },
  { "name": "Pulaski Rd & 51st St", "lat": 41.8021, "lng": -87.6945 },
  { "name": "Kedzie Ave & Harrison St", "lat": 41.8735, "lng": -87.7118 },
  { "name": "California Ave & Francis Pl", "lat": 41.8578, "lng": -87.6919 },
  { "name": "Main St & 1st Ave", "lat": 40.7128, "lng": -74.0060 },
  { "name": "Broadway & 7th Ave", "lat": 34.0522, "lng": -118.2437 },




















































];





const containerStyle = {
  width: '50%',
  height: '300px',
  position: 'fixed',
  top: 0,
  
};


const options = {
  streetViewControl: false,
  mapTypeControl: false,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    points.forEach(point => {
      bounds.extend(new window.google.maps.LatLng(point.lat, point.lng));
    });
    map.fitBounds(bounds);

  }, [points]);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
    >
      {points.map((point, i) => (
        <Marker key={i} position={{ lat: point.lat, lng: point.lng }} />
      ))}
    </GoogleMap>
  ) : <></>;
}

export default React.memo(MyComponent);