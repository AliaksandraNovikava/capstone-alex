import styled from "styled-components";
import Link from "next/link";
import Icon from "@mdi/react";
import {
  mdiPlusCircle,
  mdiBullseyeArrow,
  mdiTrophy,
  mdiChartBox,
} from "@mdi/js";

export const NavBar = styled.nav`
  display: flex;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  ${(props) =>
    props.$navbar === "true"
      ? "box-shadow: 0px -1px 0px rgba(58, 72, 80, 0.07), 0px -2px 11px -1px rgba(176, 189, 197, 0.12); padding: 13px 0; bottom: 0; justify-content: space-evenly;"
      : "box-shadow: 0px 3px 11px rgba(58, 72, 80, 0.07), 0px -2px 11px -1px rgba(176, 189, 197, 0.12); padding: 8px 25px; top: 0; justify-content: space-between;"}
  align-items: center;
  z-index: 20;
`;

const StyledIconBox = styled(Link)`
  transition: all 0.1s ease-in-out;
  font-size: 0.7rem;
  line-height: 12px;
  color: #0f0f0f;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  :active {
    transform: scale(0.95);
  }
`;

export default function Navigation() {
  return (
    <>
      <NavBar $navbar="true">
        <StyledIconBox href="/" aria-label="add new goal">
          <Icon path={mdiPlusCircle} size={1.3} color="#a662c3" />
          Add
        </StyledIconBox>
        <StyledIconBox href="/my-goals" aria-label="view all my goals">
          <Icon path={mdiBullseyeArrow} size={1.3} color="#000" />
          My Goals
        </StyledIconBox>
        <StyledIconBox href="/achievements" aria-label="view all my goals">
          <Icon path={mdiTrophy} size={1.3} color="#000" />
          Achievements
        </StyledIconBox>
        <StyledIconBox href="/statistics" aria-label="view statistics">
          <Icon path={mdiChartBox} size={1.3} color="#000" />
          Statistics
        </StyledIconBox>
      </NavBar>
    </>
  );
}
