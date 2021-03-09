import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Navbar = styled.div`
  background: var(--white);
  height: 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Left = styled.div`
  display: flex;
  align-items: center;

  > div.menu-toggle {
    margin-left: 2rem;
    margin-right: 2rem;
    cursor: pointer;

    > div {
      height: 2px;
      width: 20px;
      margin: 4px;
      background: var(--gray);
    }
  }

  > img {
    width: 100%;
    max-width: 8rem;
    height: auto;
  }
`

export const Middle = styled.div`
  display: flex;
  align-items: center;
  
  > div.inputGroup {
    display: flex;

    > input {
      height: 3rem;
      width: 50rem;
      border: none;
      border: 1px solid #ccc;
      background: none;
      outline: none;
      padding: 0 1.5rem;
      font-size: 1.5rem;
    }

    > button {
      padding: 0 1.85rem;
      border: none;
      outline: none;
      border: 1px solid #ccc;
      border-left: 0;
      cursor: pointer;
    }
  }
`


export const Right = styled.div`
  display: flex;
  align-items: center;

  > div.profile {
    height: 3.5rem;
    width: 3.5rem;
    background: #007fff;
    border-radius: 50%;
    margin: 0 2rem 0 1rem;
  }
`
