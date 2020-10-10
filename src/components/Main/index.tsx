import React from 'react';

import { Container, Header, BackIcon, ProfileInfo,ButtonMenu, HomeIcon, SearchIcon, EmailIcon,BellIcon} from './styles';

import ProfilePage from '../ProfilePage'; 

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon/>
        </button>

        <ProfileInfo>
          <strong>Joao Victor</strong>
          <span>621 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage/>

      <ButtonMenu>
        <HomeIcon/>
        <SearchIcon/>
        <BellIcon/>
        <EmailIcon/>
      </ButtonMenu>

    </Container>
  );
};

export default Main;
