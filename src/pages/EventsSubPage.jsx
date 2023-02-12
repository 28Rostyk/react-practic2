import useFetchEvents from 'hooks/useFetchEvent';

const EventsSubPage = () => {
  const event = useFetchEvents();
  return (
    <>
      {event && (
        <div>
          <p>{event.name}</p>
          <img width="200" src={event.images[0].url} alt={event.name} />
        </div>
      )}
    </>
  );
};
export default EventsSubPage;
