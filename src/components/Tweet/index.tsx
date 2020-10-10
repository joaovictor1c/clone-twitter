import React from 'react';

import { 
  Container,
  Retweeted,
  RockeatseatIcon,
  Body, 
  Avatar, 
  Content, 
  Header,
  Dot, 
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
 } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RockeatseatIcon/>
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar/>
        <Content>
          <Header>
            <strong>Rockeatseat</strong>
            <span>@rockeatseat</span>
            <Dot/>
            <time>27 de jun</time>
          </Header>

          <Description>
            Foguete nao tem volta
          </Description>

          <ImageContent/>

          <Icons>
            <Status>
              <CommentIcon/>
              18
            </Status>

            <Status>
              <RetweetIcon/>
              18
            </Status>

            <Status>
              <LikeIcon/>
              999
            </Status>
          </Icons>  

        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
