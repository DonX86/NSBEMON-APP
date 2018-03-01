'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'Comments',
      [
        {
          id: 'e4daa6c4-2f21-43fa-8394-6bd83a178b69',
          text: 'That was great!',
          trainingId: '72413dc7-09b2-4540-b5c2-595cbd6f4b00',
          memberId: 'e7a4a082-509a-42a1-b931-1bfc9f068b2a'
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
