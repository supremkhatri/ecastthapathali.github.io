
import "./css/UpcomingEvents.css";
import Events from "./Events";
import comingsoon from "./EventsImages/comingsoon.png";
import event1 from "./EventsImages/event1.jpg";

const UpcomingEvents = () => {
  const upcomingEvents = [
    {
      id: "article-submission",
      topic: "AI Writing Competition",
      image: event1,
    },
    {
      id: "coming-soon",
      topic: "Coming Soon",
      image: comingsoon,
    },
    {
      id: "coming-soon-2",
      topic: "Coming Soon",
      image: comingsoon,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-black text-white pt-10">
        <p className="text-center font-bold text-xl">OUR UPCOMING EVENTS</p>
        <div className="w-1/2 lg:w-1/4 mx-auto border-t-1 border-b-2 border-red-800 my-4"></div>
      </div>

      <div className="container1">
        <div className="container2">
          {upcomingEvents.map(event => (
            <div className="semi-container1" key={event.id}>
              <Events
                image={event.image}
                topic={event.topic}
                eventId={event.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
