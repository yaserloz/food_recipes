import axios from "axios";
import React, { useContext } from "react";
import AppContext from "../components/AppContext";
import Nav from "../components/Nav";

export const getServerSideProps = async (context) => {
  const response =  await axios(`/recipes/1`)
  const recipe = response.data;
  return {props:{recipe}};
};

export default function recipe({recipe}) {
  console.log(recipe)
    return (
    <>
      <Nav />
      <div>hello</div>
    </>
  );
}
