exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          title: "Heroes and Villains",
          description:
            "Front end app utilizing the React library, axios library to mak api calls and Material UI for styling.",
          repo: "https://github.com/blackjf85/heroes-and-villains",
          demo: "https://heroes-and-villains.vercel.app/",
          img_url:
            "https://jfb-portfolio-api.herokuapp.com/images/project-1.jpg",
        },
      ]);
    });
};
