import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 city",
    description: "This is a First Meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 city",
    description: "This is a Second Meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://saifmohammad:mongo1234@cluster0.9nfvk.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupscollection = db.collection("meetups");
  const meetups = await meetupscollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map(meetup=>({
        title: meetup.title,
        image: meetup.image,
        address:meetup.address,
        id:meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
