import { Link } from "react-router-dom";
import "./EventListItem.scss";

const EventListItem = ({
  id,
  posterUrl,
  date,
  name,
  location,
  startingPrice,
  ticketSafety,
  purchaseLink,
}) => {
  return (
    <div className="event">
      <Link className="event__link event__block-link" to={`/events/${id}`}>
        <div className="event__container">
          <img className="event__poster" src={posterUrl} alt="event-poster" />
          <div className="event__data">
            <div className="event__date-container">
              <p className="event__date-month">{date[0]}</p>
              <p className="event__date-day">{date[1]}</p>
            </div>
            <div className="event__info">
              <h3 className="event__title">{name}</h3>
              <p className="event__location">{location}</p>
              <p className="event__start-price">
                Tickets starting at:
                <span className="event__price-value">
                  {" " + startingPrice}
                </span>
              </p>
              <p className="event__website-safety">
                Website Safety:
                <span
                  className={
                    ticketSafety
                      ? "event__website-safety--safe"
                      : "event__website-safety--unknown"
                  }
                >
                  {ticketSafety ? "  SAFE" : " UNKNOWN"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div className="event__button-container">
        <a className="event__link" href={purchaseLink}>
          <button className="event__purchase-button event__button">
            purchase
          </button>
        </a>
      </div>
    </div>
  );
};

export default EventListItem;
