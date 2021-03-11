import styled from 'styled-components';

export const Container = styled.div`
  width: 23.5rem;
  background: var(--white);
  overflow: hidden;
  position: fixed;
  left: 0;
  height: 100%;

  &:hover {
    overflow-y: scroll;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #ccc; 
  }
 
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  > div.wrapper {
    border-bottom: 1px solid #eee;
    padding: 1rem 0;

    > div.wrapper-content {
      display: flex;
      align-items: center;
      padding: 1.05rem 0;
      cursor: pointer;

      &:hover {
        background: #eee;
      }

      > span {
        margin-left: 2.35rem;
        color: #333;
        font-size: 1.4rem;
      }
    }
  }
`;

export const ContainerReduced = styled.div`
  width: 6.2rem;
  background: var(--white);
  position: fixed;
  left: 0;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem 0;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.05rem 0;
    width: 100%;

    &:hover {
      background: #f0f0f5;
      cursor: pointer;
    }

    > p {
      margin-top: .75rem;
      font-size: 1rem;
      color: #333;
    }
  }
` 