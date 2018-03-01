'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'Trainings',
      [
        {
          id: '72413dc7-09b2-4540-b5c2-595cbd6f4b00',
          title: 'Title1',
          description: 'Description1',
          categoryId: '83fa7718-3fbf-43a2-95bb-90e4ef515da5',
          memberId: 'e7a4a082-509a-42a1-b931-1bfc9f068b2a'
        },
        {
          id: 'a69fd997-a78d-48b2-b834-afe5e121ea68',
          title: 'Title2',
          description: 'Description2',
          categoryId: '88a5e10a-731e-4e5e-b779-e83d443bf924',
          memberId: '7834dcc8-c9a9-4285-bfc1-5c6bd6b7f070'
        },
        {
          id: 'd71766f9-3de9-4d15-98cb-541a45e499aa',
          title: 'Title3',
          description: 'Description3',
          memberId: 'f1dffe81-32d4-4d7c-b68a-a633fbaabb43',
          categoryId: '61f6ae42-f0d9-4e66-b9e7-6ec2b6ddf962'
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Trainings', null, {});
  }
};
