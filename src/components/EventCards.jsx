import { useState } from "react";
import EventPopup from "./EventPopup";

export default function EventCards() {

  const [popup, setPopup] = useState(null);

  const events = [
    {
      title: "AI Challenge",
      description:
        "Build innovative AI solutions and compete with the brightest minds."
    },

    {
      title: "Robotics Arena",
      description:
        "Battle autonomous robots and showcase engineering skills."
    },

    {
      title: "Gaming Tournament",
      description:
        "Compete in futuristic esports competitions."
    }
  ];

  return (
    <>
      <div className="event-container">

        {events.map((event) => (
          <div
            key={event.title}
            className="event-card"
            onClick={() => setPopup(event)}
          >
            <h2>{event.title}</h2>

            <p>Click to view details</p>
          </div>
        ))}

      </div>

      {popup && (
        <EventPopup
          title={popup.title}
          description={popup.description}
          onClose={() => setPopup(null)}
        />
      )}
    </>
  );
}