import NewMeetupForm from "../components/meetup/NewMeetupForm";
import {useHistory} from    "react-router-dom";

function NewMeetupPage(){
    const history = useHistory();
    function addMeetupHandler(meetUpData){

        fetch('https://react-app-f0652-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetUpData),
            headers:{
                'Content-Type':'application/json'
            }
        }).then( () => {
            history.replace('/');
        });

    }

    return (
        <section>
        <h1>New Meetup Page</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );                           

}

export default NewMeetupPage;