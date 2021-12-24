import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CreateUserForm from "./UserList/CreateUserForm";
import SearchBar from "./UserList/SearchBar";
import Users from "./UserList/Users";

function UserList({ booladmin, userlist, handleRegister }) {
  const navigate = useNavigate();

  useEffect(() => {
    booladmin ? "n" : navigate("/");
  }, []);

  return (
    <Container>
      <ContentContainer>
        <h1>Henlo! This is from UserList.jsx!</h1>
        <Users userlist={userlist} />
      </ContentContainer>

      <SearchBar />
      <CreateUserForm handleRegister={handleRegister} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: ;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
`;

export default UserList;
