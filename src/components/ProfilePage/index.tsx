import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage,EditButton  } from './styles';
import Feed from '../Feed';


const ProfilePage: React.FC = () => {
  return (
    <Container>
      
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        <EditButton outlined >Editar perfil</EditButton>
        <h1>Joao Victor</h1>
        <h2>@joaovictor1c</h2>
        <p>
          Delevoper at <a href="https://rocketseat.com.br">@rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon/>
            Recife, Brasil
          </li>
          <li>
            <CakeIcon/>
            Nascido(a) em 5 de setembro de 1996
          </li>
        </ul>

        <Followage>
          <span>
            seguindo
            <strong>94</strong>
          </span>
          <span>
            <strong>684</strong>
            seguidores
          </span>
          
        </Followage>
      </ProfileData>

      <Feed/>
    </Container>
  );
};

export default ProfilePage;
