exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("oranges").insert({
    name: "kanpei",
    taste: "very seet, very sour",
    origin: "Ehime",
    season: "February",
  });

  //return knex("oranges")
  //.del()
  //.then(function () {
  //// Inserts seed entries
  //return knex("oranges").insert([
  //{
  //name: "kanpei",
  //taste: "very seet, very sour",
  //origin: "Ehime",
  //season: "February",
  //},
  ////{id: 1, colName: 'rowValue1'},
  ////{id: 2, colName: 'rowValue2'},
  ////{id: 3, colName: 'rowValue3'}
  //]);
  //});
};
