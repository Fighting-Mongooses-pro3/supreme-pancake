import React, { useState, useEffect } from "react";
import { Aside, Container, Header, Page } from "../../../components";
import { useRouter } from "next/router";
import axios from "axios";

const DndClass = () => {
  const router = useRouter();
  let thisPage = router.query;
  let pageId = thisPage.class;
  const [dndClass, setDndClass] = useState();
<<<<<<< HEAD
  const [isLoaded, setLoaded] = useState(false);
=======

>>>>>>> 8bc1517b9f89d5839c12a3bf2c68ff6521b4f3f3
  console.log(pageId);

  useEffect(() => {
    axios.get(`https://www.dnd5eapi.co/api/classes/${pageId}`).then((res) => {
      console.info("RESPONSE.DATA", res.data);
      setDndClass(res.data);
    });
    setLoaded(true);
  }, []);

<<<<<<< HEAD
  console.log("STATE", dndClass);
  return (
    <Page currentPage={`${pageId}`}>
      {isLoaded ? (
        <Container>
          <Header title={`${pageId}`} customCss="text-6xl" />
          <Aside side="" />
          <section>
            <p>
              {/* Hit Die: 1d{dndClass.hit_die}. Your character has a pool of hit dice */}
              in an amount equal to their level that they can utilize to heal
              during a short rest. Your class allows you to select beginning
              skill proficiencies from a given set of options.{" "}
              {dndClass.proficiency_choices.desc}
              Along with skills, your character class comes with proficiencies
              in weapons, armor, saving throws, and possibly some extras. The
              proficiencies for {dndClass.index} are listed below:
              {dndClass.proficiencies}
              Each class comes with a set of standard starting equipment,
              including sections where you're asked to select from a couple
              options. Below you'll find the starting equipment list for the{" "}
              {dndClass.index}. We recommend speaking with your DM to see if
              there are any additions or exclusions to go with this list for
              your starting character.
              {dndClass.starting_equipment}
              {dndClass.starting_equipment_options}
              As you level up your {dndClass.index}, your character may be
              granted new abilities and features. Below you'll find a guide for
              understanding what your {dndClass.index} is given at each level.
              {dndClass.class_levels}
              If your character is starting over level 1, there is a chance that
              you might want to multi-class into {dndClass.index}. Below you'll
              find a guide to what prerequisite your character needs to have in
              order to be able to multi-class into {dndClass.index}, as well as
              a list of proficiencies that are added to your character if they
              do not already have them. We recommend consulting with your DM
              before multi-classing.
              {dndClass.multi_classing}
              Depending on your starting level and class, your character might
              be given the option of taking a subclass already. Below you'll
              find an example of a subclass for the {dndClass.index}.
              {dndClass.subclasses}
            </p>
          </section>
        </Container>
      ) : null}
=======
  // useEffect(() => {
  //   const url = `https://www.dnd5eapi.co/api/classes/${pageId}`;
  //   const options = {
  //     method: "GET",
  //   };
  //   fetch(url)
  //     .then((res) => console.log(res.json()))
  //     .then((data) => {
  //       setDndClass(data);
  //       console.log("DATA", data);
  //     });
  //   console.log("STATE", dndClass);
  // }, );

  return (
    <Page currentPage={`${pageId}`}>
      <Container>
        <Header title={`${pageId}`} customCss="text-6xl" />

        <section className="text-white text-6xl"></section>
      </Container>
>>>>>>> 8bc1517b9f89d5839c12a3bf2c68ff6521b4f3f3
    </Page>
  );
};

export default DndClass;
