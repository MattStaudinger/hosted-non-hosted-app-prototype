import { MeetupList } from "shared";
import { useRouter } from "next/router";
import { navigate } from "../utils/utils";
import { DUMMY_MEETUPS } from "../utils/constants";

function HomePage({ meetups }) {
  const router = useRouter();
  return (
    <MeetupList
      meetups={meetups}
      isHostedApp={true}
      navigate={(url) => {
        navigate({ router, url });
      }}
    />
  );
}

export async function getStaticProps() {
  return {
    props: { meetups: DUMMY_MEETUPS },
    // revalidate: 10
  };
}

// export async function getServerSideProps({ req, res }) {
//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

export default HomePage;
