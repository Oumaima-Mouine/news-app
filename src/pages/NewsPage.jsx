const events = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300x150',
      title: 'Conférence débat : "Le marketing sportif"',
      date: 'Today • 2:00 PM',
      location: 'Faculté des sciences juridiques',
      price: 'Free',
      status: 'ended',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x150',
      title: 'Checkmate & Connect: Chess and Networking',
      date: 'Today • 6:00 PM',
      location: 'Commons Zerktouni',
      price: '$23.18',
      status: 'available',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x150',
      title: 'Casablanca Leadership: Emotional Intelligence',
      date: 'Today • 6:00 PM',
      location: 'Casablanca',
      price: '$71.19',
      status: 'available',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/300x150',
      title: 'TALENTS',
      date: 'Fri, Dec 27 • 10:00 AM',
      location: 'EST : École Supérieure',
      price: '€2.00',
      status: 'available',
    },
  ];
function NewsPage(){
    return(
        <div className="container my-4">
            <h2 className="mb-4 text-center">Upcoming Events</h2>
            <div className="row">
              {events.map((event) => (
                <div key={event.id} className="col-md-4 col-sm-6">
                    <EventCard {...event} />
                </div>
              ))}
            </div>
    </div>
        
    )

}
export default NewsPage;