import axios from "axios";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../layouts/profile_layouts/Navigation";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";
import { userProfileNavigation } from "../../redux/profileNavigationSlice/profileNavigationSlice";

const About = dynamic(() => import("../../layouts/profile_layouts/About"));
const Account = dynamic(() => import("../../layouts/profile_layouts/Account"));

const Profile = ({ user }) => {
  const { state } = useSelector(userProfileNavigation);
  const [data, setData] = useState({});

  useEffect(() => {
    user && setData(user?.data);
  }, [user]);

  return (
    <div>
      <Head>
        <title>{data?.name} - MobileR </title>
        <meta name="description" content="chat application" />
      </Head>
      <Header />

      <main className="w-full min-h-[60vh]">
        <div className="max-w-[1280px] w-full h-auto m-auto">
          <Navigation />
          {state === "about" && <About user={user?.data} />}
          {state === "account" && <Account />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const cookies = new Cookies(context.req.headers.cookie);
  const token = cookies.get("u").token;

  const userFetch = await axios(process.env.NEXT_PUBLIC_FETCH_USER_DATA, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const user = await userFetch?.data?.user;

  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
};
export default Profile;
