import styled from 'styled-components';

export const Container = styled.div`
  width: 23.5rem;
  height: calc(100vh - 4.8rem);
  background: var(--white);
  overflow: hidden;

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