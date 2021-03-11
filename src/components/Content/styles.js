import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  padding-left: 25.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
  gap: 1.5rem;
  flex: 1;
`

export const Video = styled.div`
  > img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
    margin-bottom: .5rem;
    background: green;
  }

  > div {
    display: flex;

    > img {
      height: 3.8rem;
      width: 3.8rem;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 1rem;
    }

    > div {
      > p {
        font-size: 1.45rem;
        font-weight: 500;
        color: #222;
        margin-bottom: .55rem;
        max-width: 70%;
      }

      > span {
        color: #555;
        font-size: 1.5rem;
      }
    }
  }
`