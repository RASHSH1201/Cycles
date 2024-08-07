CYCLES RENTAL CHICAGO


Video Demo: <(https://www.youtube.com/watch?v=KCOp2ZcLmTw&t=11s)>


Description:
The reason I designed this project was to learn about APIs while combining my knowledge of HTML, CSS, and other technologies from CS50. The purpose was to integrate these components to create a fully functional site similar to booking platforms for cars, bikes, plane tickets, etc., but focused on bike rentals. Although we couldn’t implement the feature of actually booking a specific vehicle, we achieved much more than I initially thought possible.

My project involves using the DIVY bike API. For those who don't know, Divy Bikes is a bike, e-scooter, and e-bike rental company primarily serving Chicago, but also other locations in the Midwest. My project is primarily aimed at Chicago residents but includes a few other states as well.

API:

DIVY CYCLE APP API:

The Divy bike API was extremely helpful and resourceful, and I learned a lot about APIs through this project. I implemented tables on the backend to calculate various factors. For example, for bikes, I needed data on the number of bikes available at each station, the maximum number, and the station ID (which is in the backend). Additionally, there was another table that listed only the stations by name. I wanted to combine the information from these two tables, so recalling our previous use of SQL, I remembered the JOIN function. I implemented something similar on the backend, and with the help of YouTube tutorials and learning JSX, I was able to connect the two to display the information I needed.

GOOGLE MAPS API:

The Google Maps API was also interesting, though it was relatively basic compared to the Divy bike API. I followed a YouTube tutorial to integrate a map into each of the three categories: bikes, e-bikes, and e-scooters. Implementing the maps presented one challenge (besides some CSS issues): displaying every station location on the map. To address this, I used another YouTube tutorial, which showed that creating multiple pins on the map requires an array with the longitude and latitude of each station. This process was tedious as I had nearly 1,000 stations and had to convert them into their respective longitude and latitude points. With the help of ChatGPT, converting the points at a rate of about 50 per request, I was able to complete this task.

Homepage:

The homepage starts with a moving globe imported from Lottie and a title that fades into the page upon opening. As you scroll down, I created a few homecards by following a YouTube tutorial. These cards, made using a combination of CSS elements, display three categories: bike, e-bike, and e-scooter. Each card directs you to a page where you can view the category of your choice.

BIKE/EBIKE/ESCOOTER PAGES:

These pages were interesting and enjoyable to create. They all look similar but function differently for each type of vehicle. For all three pages, the layout starts with a fade-in title implemented using JSX and CSS, which is also on the title page. Below the title, there is a map that pins each available station, somewhat mimicking the functionality of actual bike rental apps. Scrolling down reveals a search engine that narrows down the list of stations as you type. Additionally, there is an option to rent a bike via the Divy app, as there is no way to rent a bike through the website itself. The button directs you to a browser where you can download the app to complete your rental.

BIKE/EBIKE/ESCOOTER/HOMEPAGE CSS:

HOMEPAGE CSS:

The CSS for this page was the most challenging to style due to the many components that affected its appearance at different sizes. For instance, the Lottie globe image would often exceed the frame on mobile devices. I had to resize it for all device sizes, from the smallest (iPhone SE) to the largest mobile devices. By using margin-top adjustments, I achieved consistent usage of the globe across all sizes. The title also faced similar issues, which I resolved using margin-top to keep it properly aligned on mobile pages. The easiest part to manage was the homecards, which fit well on each screen due to the use of flex display, allowing them to adjust to various page sizes.

BIKE/EBIKE/ESCOOTER CSS:

The CSS for these pages was relatively manageable. The main title component adjusted well across different devices, from mobile to laptop, due to the use of flex positioning in the map and search engine sections. Additionally, the search results component was easy to navigate, automatically resizing as the number of results changed. The font and font sizes were chosen to look futuristic and clean, contributing to a simple and streamlined layout.
