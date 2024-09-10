import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";
import Head from "next/head";

function HomePage(props) {
  return <Fragment>
    <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active react meetups!" />
    </Head>
    <MeetupList meetups={props.meetups} />
  </Fragment>
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
