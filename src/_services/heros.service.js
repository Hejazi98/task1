
export const heroService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

let heros = [
  { id: 1, name: "Saker Alwasabi", powers: "Team Leader", rate: 4 },
  { id: 2, name: "Abdularhim hejazi", powers: "Devloper", rate: 1 },
  { id: 3, name: "Ahmad Hejazi", powers: "techneical writer", rate: 2 },
];

function getAll() {
  const response = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(heros.sort((a,b)=> a.name>b.name?1:-1));
    }, 300);
  });
  return response;
}

function getById(id) {
  const response = new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = heros.find((hero) => hero.id == id);
      resolve(hero);
    }, 300);
  });
  return response;
}

function create(params) {
  const response = new Promise((resolve, reject) => {
    setTimeout(() => {
      const max = Math.max(...heros.map((o) => o.id));
      params.id = max + 1;
      heros.push(params);
      resolve({ status: "success" });
    }, 300);
  });
  return response;
}

function update(id, params) {
  const response = new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = heros.find((hero) => hero.id == id);
      hero.name = params.name;
      hero.powers = params.powers;
      hero.rate = params.rate;
      resolve({ status: "success" });
    }, 300);
  });

  return response;
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
  const response = new Promise((resolve, reject) => {
    setTimeout(() => {
      heros = heros.filter((hero) => hero.id != id);
      resolve({ status: "success" });
    }, 300);
  });

  return response;
}
