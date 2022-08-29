import React, { useState, useEffect } from "react";
import { Card, Page } from "../../components";
import axios from "axios";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/classes").then((res) => {
      console.info("RESPONSE.DATA", res.data);
      console.info("RESPONSE.DATA.RESULTS", res.data.results);
      setClasses(res.data.results);
      console.log(classes);
    });
  }, []);

  const renderCards = () => {
    return classes.map((classes) => {
      return <Card index={classes.index} name={classes.name} />;
    });
  };

  return (
    <Page currentPage="Classes">
      <section>{renderCards()}</section>
    </Page>
  );
};

export default Classes;
