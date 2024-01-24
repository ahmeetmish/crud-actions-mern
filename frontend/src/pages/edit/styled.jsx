import styled from 'styled-components'

export const Edit = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 12px;
  }

  .action {
    gap: 8px;
    display: flex;
    flex-direction: column;

    button {
      width: 72px;
      height: 32px;
    }
  }

  .action > div {
    gap: 8px;
    display: flex;
    align-items: center;

    input {
      color: #DDD;
      background: none;
      padding-left: 4px;
      border: 1px solid gray;
    }
  }
`