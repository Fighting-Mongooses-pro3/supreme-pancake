import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { Page, ProjectCards, Jumbotron } from "../../components";
import axios from "axios";

const Dashboard = (props) => {
  const { user } = useUser();
  const [projects, setProjects] = useState([]);
  console.log(user);

  // useEffect(() => {
  //   axios.get(`/api/project/get/${user.name}`).then((res) => {
  //     setProjects([res.data]);
  //   });
  // }, []);

  const renderCards = () => {
    projects.map((proj, i) => {
      return <ProjectCards key={i} title={proj.title} />;
    });
  };

  return (
    <Page currentPage="Dashboard">
      {user ? (
        <>
          <Jumbotron />
          <div className="w-full min-h-screen flex-wrap flex border border-black">
            <aside className="border border-black h-full w-1/12">
              <section className="mt-5 text-center w-full">{user.name}</section>
            </aside>

            <section className="h-full w-1/12 flex spacer"></section>

            <section className="border-black border w-9/12 flex flex-wrap rounded-3xl bg-slate-700">
              {/* {renderCards} */}

              <ProjectCards title="Project 1" />

              <ProjectCards title="Project 2" />

              <ProjectCards title="Project 3" />
            </section>
          </div>
        </>
      ) : null}
    </Page>
  );
};

export default Dashboard;
