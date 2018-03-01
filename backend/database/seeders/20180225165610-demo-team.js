'use strict';

module.exports = {
  up: (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      'Teams',
      [
        {
          id: '62d58905-8470-4215-97bc-fbaefea7f987',
          name: 'Team1'
        },
        {
          id: '71e9e5bc-dc44-4598-a210-7ed4b2f7acc0',
          name: 'Team2'
        }
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Teams', null, {});
  }
};
