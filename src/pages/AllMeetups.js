import MeetupList from "../components/meetup/MeetupList";
import {useState} from "react";

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 9, 12345 Salvador City',
      description:
        'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

function AllMeetupsPage(){

    const [isLoading,setIsLoading]= useState(true);
    const [loadedMeetups,setIsLoadedMeetups]= useState([]);

    fetch('https://react-app-f0652-default-rtdb.firebaseio.com/meetups.json'
    ).then(response  => {
        return  response.json();
    }).then((data) => {
        setIsLoading(false);  
        setIsLoadedMeetups(Object.values(data));      
    });

    if(isLoading){
        return (
        <section>
            <p>Loading...</p>
        </section>);
    }


    return (
        <section><h1>All Meetups Page</h1>
        <MeetupList meetups={loadedMeetups}/>
    </section> );                           

}

export default AllMeetupsPage;