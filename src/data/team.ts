export type TeamMember = {
  id: string;
  name: string;
  roleKey: string;
  bioKey: string;
};

export const team: TeamMember[] = [
  {
    id: "zoya",
    name: "Зоя Маскина",
    roleKey: "team.members.zoya.role",
    bioKey: "team.members.zoya.bio",
  },
  {
    id: "visualizer",
    name: "Визуализатор",
    roleKey: "team.members.visualizer.role",
    bioKey: "team.members.visualizer.bio",
  },
  {
    id: "manager",
    name: "Менеджер",
    roleKey: "team.members.manager.role",
    bioKey: "team.members.manager.bio",
  },
];
