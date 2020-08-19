const skills = [
  { id: 12345, skill: "CSS", experience: 3 },
  { id: 12346, skill: "HTML", experience: 3 },
  { id: 12347, skill: "JavaScript", experience: 2 },
  { id: 12348, skill: "Node.JS", experience: 1 },
  { id: 123452, skill: "Photoshop", experience: 2 },
  { id: 123453, skill: "Photography", experience: 6 },
  { id: 12349, skill: "Skateboarding", experience: 19 },
  { id: 123451, skill: "Snowboarding", experience: 6 },
  { id: 123454, skill: "Handy-Man", experience: 8}
];

const getAll = () => skills;

const getOne = (id) => skills.find((skill) => skill.id === parseInt(id));

module.exports = {
  getAll,
  getOne,
};
