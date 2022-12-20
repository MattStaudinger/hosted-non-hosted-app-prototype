import MeetUpDetail from "shared/src/meetups/MeetupDetail";

export default function MeetUpDetails({ meetupData }) {
  return (
    <MeetUpDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
      isHostedApp={true}
    />
  );
}

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        title: "A First meetup",
        address: "Some address",
        description: "The meetup description",
      },
    },
  };
}
