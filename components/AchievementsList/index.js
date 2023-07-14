import { StyledList, StyledCard } from "@/components/NewGoalsList/index.js";
import NewGoalPreview from "../NewGoalPreview";

export default function AchievementsList({
  checkedGoals,
  handleToggleChecked,
}) {
  return (
    <StyledList>
      {checkedGoals.map((goal) => (
        <StyledCard key={goal.id}>
          <NewGoalPreview
            image={goal.icon}
            title={goal.name}
            creationDate={goal.creationDate}
            id={goal.id}
            isChecked={goal.isChecked}
            handleToggleChecked={handleToggleChecked}
          />
        </StyledCard>
      ))}
    </StyledList>
  );
}