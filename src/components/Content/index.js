import React from 'react';

import { Container, Grid, Video } from './styles';

import data from '../../database/data.json';

function Content() {
  console.log(data);
  return (
    <Container>
      <Grid>
        {
          data.videos.map((video, index) => (
            <Video key={index}>
              <img src={video.thumbnail} alt="Thumbail" />
              <div>
                <img src={video.channelImage} alt="Channel" />
                <div>
                  <p>{video.title}</p>
                  <span>{video.channelName}</span>
                </div>
              </div>
            </Video>
          ))
        }
      </Grid>
    </Container>
  );
}

export default Content;