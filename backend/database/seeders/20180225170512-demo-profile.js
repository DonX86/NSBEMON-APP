'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'Profiles',
      [
        {
          id: '242ce959-baa9-45f3-8235-4f462d702c8f',
          firstName: 'User1fn',
          lastName: 'User1ln',
          email: 'user1@gmail.com'
        },
        {
          id: '3c37903c-29f9-46fb-82f2-ecb5334d9f83',
          firstName: 'User2fn',
          lastName: 'User2ln',
          email: 'user2@gmail.com'
        },
        {
          id: 'a0245b5b-54d4-4991-9d3d-5205f5148571',
          firstName: 'User3fn',
          lastName: 'User3ln',
          email: 'user3@gmail.com'
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Profiles', null, {});
  }
};
