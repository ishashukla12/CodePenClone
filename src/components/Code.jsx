import React from "react";
import Editor from "./Editor";
import { createContext, useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 50vh;
`;
export default function Code() {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <Container>
      <Editor
        heading="HTML"
        icon="/"
        color="#FF3C41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        heading="CSS"
        icon="*"
        color="#0EBEFF"
        value={css}
        onChange={setCss}
      />
      <Editor
        heading="Javascript"
        icon="{}"
        color="#FCD000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
}
