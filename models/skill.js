const skills = [
  { id: 12345, skill: "CSS", experience: 3 },
  { id: 12346, skill: "HTML", experience: 3 },
  { id: 12347, skill: "JavaScript", experience: 2 },
  { id: 12348, skill: "Node.JS", experience: 1 },
];


const getAll = () => skills;

const getOne = (id) => skills.find((skill) => skill.id === parseInt(id));

module.exports = {
  getAll,
  getOne,
};
