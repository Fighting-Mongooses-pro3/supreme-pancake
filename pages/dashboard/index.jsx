import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { Page, ProjectCards } from "../../components";
import Image from "next/image";

const Dashboard = (props) => {
  const { user } = useUser();

  console.log(user);

  return (
    <Page currentPage="Dashboard">
      {user ? (
        <div className="w-full min-h-screen flex-wrap flex border border-black">
          <aside className="border border-black h-full w-1/12">
            <section className="mt-5 text-center w-full">{user.name}</section>
          </aside>

          <section className="h-full w-1/12 flex spacer"></section>

          <section className="border-black border w-9/12 flex flex-wrap">
            
            <ProjectCards title="Project 1" />

            <ProjectCards title="Project 1" />

            <ProjectCards title="Project 1" />
          </section>
        </div>
      ) : null}
    </Page>
  );
};

export default Dashboard;
