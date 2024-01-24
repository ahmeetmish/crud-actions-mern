import styled from 'styled-components'
import { Link } from "react-router-dom"

import { BiArrowBack } from "react-icons/bi"

const StyledPreviousPageButton = styled.div`
  top: 12px;
  left: 12px;
  position: absolute;

  svg {
    font-size: 32px;
    transition: color 0.2s ease;

    &:hover {
      color: #ebc2c2;
    }
  }
`

export default function PreviousPageButton({ destination = '/' }) {
  return (
    <StyledPreviousPageButton>
      <Link to={destination}>
        <BiArrowBack />
      </Link>
    </StyledPreviousPageButton>
  )
}