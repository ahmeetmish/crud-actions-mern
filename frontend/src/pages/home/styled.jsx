import styled from 'styled-components'

export const Home = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;
`

export const Content = styled.div`
  .books {
    gap: 16px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .book {
      gap: 4px;
      display: flex;
      position: relative;
      flex-direction: column;

      padding: 24px 12px 8px 12px;
      border-radius: 2px;
      border: 1px solid gray;

      span {
        gap: 8px;
        display: flex;
        font-size: 18px;
        align-items: center;
      }

      .number {
        top: 2px;
        right: 8px;
        color: gray;
        font-size: 14px;
        position: absolute;
      }

      .actions {
        gap: 8px;
        display: flex;
        margin-top: 4px;
        align-items: center;
        justify-content: center;

        a {
          color: gray;
          transition: color 0.2s ease;

          &:hover {
            color: #FFF;
          }
        }
      }
    }
  }
`