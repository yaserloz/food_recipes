import axios from "axios";
import React, { useContext } from "react";
import AppContext from "../components/AppContext";
import Nav from "../components/Nav";

export const getServerSideProps = async (context) => {
const value = useContext(AppContext)
  const response =  await axios(`/recipes/${context.query.params[1]}/1`)
  const recipe = response.data;
  return { props:{recipe} };
};

export default function recipe({ recipe }) {
    console.log(recipe)
    return (
    <>
      <Nav />
      <div>hello</div>
    </>
  );
}
