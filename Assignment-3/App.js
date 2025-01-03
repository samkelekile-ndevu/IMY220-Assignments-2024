/*
  @author: Samkelekile Ndevu
  @date: 2024-11-21
*/

const events = [
  {
    name: "A Walk in the Park",
    date: "2021-09-19",
    description: "Let's go walking and feed the ducks. #ducks #walk #park #Sunday",
  },
  {
    name: "Beach Day!",
    date: "2019-12-28",
    description: "Let's have a fun day on the beach right before #xmas !! #beachday #summertime"
  },
  {
    name: "Pokemon Go Meetup",
    date: "2016-06-11",
    description: "I wanna meet up with #PokemonGo fans to #catchEmAll #pokemon #meetup"
  },
  {
    name: "Crochet Date!",
    date: "2024-07-09",
    description: "Let's meetup to go crochet in the park. I'll bring the wool!! #park #crochet #meetup"
  },
  {
    name: "Yoga in the Morning",
    date: "2022-07-15",
    description: "Join us for a refreshing morning #yoga session #wellness #morning"
  },
  {
    name: "Hackathon",
    date: "2023-03-10",
    description: "Compete in this year's #hackathon to win amazing prizes and meet feelow #coders #coding"
  },
  {
    name: "Summer Braai",
    date: "2021-08-05",
    description: "Come and enjoy a delicious braai with friends and family #braai #summertime #summer #fun"
  },
  {
    name: "Art Exhibition",
    date: "2018-05-20",
    description: "Explore modern art at the Joburg #art #exhibition from talented artists around the world #creativity"
  },
  {
    name: "Star Wars Under the Stars",
    date: "2023-05-04",
    description: "Watch your favorite #StarWars movies under the open sky! #movienight #outdoor #maythe4thbewithyou"
  },
  {
    name: "Live Concert: Rock the Night",
    date: "2023-06-25",
    description: "Enjoy an electrifying night of live music from your favourite #rock artists #concert #rockmusic #livemusic"
  },
  {
    name: "Farmers Market",
    date: "2024-04-01",
    description: "Fresh produce, homemade goods, and more at the local farmers market this week #farmersmarket #organic"
  },
  {
    name: "Comicon Anyone?",
    date: "2024-09-26",
    description: "Who's going to #comicon this year? Let's #meetup - I'll be Spiderman!"
  }
];

// Event Component
class Event extends React.Component {
  constructor(props){
    super(props);
  } 
  render(){
    const {name, date, description} = this.props.event;
    return (
      <div className="eventContainer">
        <h2>{name}</h2>
        <p>{date}</p>
        <p>{description}</p>
      </div>
    );
  }
}

// EventFeed Component
class EventFeed extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const events = this.props.events;

    return events.sort((evt1, evt2)=>{  // Sort in reverse chronological order (most recent first)
      return new Date(evt2.date) - new Date(evt1.date);
    }).map((event, index)=>{  // Display all items in events array
      return ( 
        <div className="events" key={index}>
          <Event event={event}/>
        </div>
      );
    });
  }
}

// Search Component
class Search extends React.Component {
  constructor(props){
    super(props);

    this.searchInput = React.createRef(); // Reference to the search input

    // Binding event handlers
    //this.handle = this.handle.bind(this); //uncomment to allow auto-comment
    this.submit = this.submit.bind(this);
  }

  submit(e){
    e.preventDefault(); // Prevent form from auto-submitting
    const searchValue = this.searchInput.current.value; // Get value from input field
    
    this.props.handleSearch(searchValue); // Pass value to parent component for filtering
  }

  
  //uncomment to allow auto-search
  /*
  handle(e){
    const searchValue = e.target.value;  // Get value from input field
    this.props.handleSearch(searchValue); // Pass value to parent component for filtering
    
    
    //Add the following line to your search input to allow auto search:
    // onChange={this.handle}
    
  }
  */

  render(){
    return(
      <div className="searchContainer">
        <form onSubmit={this.submit}>
          <label>Search</label>
          <input type="search" placeholder="Search something..." ref={this.searchInput}></input>
          <input type="submit" value="Search"/>
        </form>
      </div>
    );
  }
}

// App Component
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      events: events, // Initial events list
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  // Handle the search input and filter events
  handleSearch(searchValue){
    // Filter events based on name or description (case-insensitive)
    const filteredEvents = events.filter(event => {
      if(event.name.trim().toLowerCase().includes(searchValue.trim().toLowerCase())){
        return true;
      } 
      else if(searchValue[0] === '#'){  //starts with #tag
        //check the descriptions that contain this #tag
        searchValue = searchValue.slice(1);  //exclude the '#'
        if(event.description.trim().toLowerCase().includes(searchValue.trim().toLowerCase())){
          return true;
        }
      } 
    });
    
    // Update the state with the filtered events
    this.setState({ events: filteredEvents });
  }

  render(){
    return (
      <div className="appContainer">
        <Search handleSearch={this.handleSearch} />
        <EventFeed events={this.state.events} />
      </div>
    );
  }
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
