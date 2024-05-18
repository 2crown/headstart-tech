// This file contains placeholder data that you'll be replacing with real data in the Data:


const staffs = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'Staff1',
      email: 'staff1@nextmail.com',
      mobile_phone: "07038032454",
      password: 'staff123',
      status: 'active',
      isAdmin: true
    },

    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'staff2',
      email: 'staff2@nextmail.com',
      mobile_phone:"09045950212",
      status: 'inactive',
      isAdmin: false,
      password: 'staff123',
     
    },
  
]


const parents = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'parent1',
    email: 'parent1@nextmail.com',
    password: 'parent123',
  },

  {
    id: '234544b2-4001-8771-9855-fec4b6a6552a',
    name: 'parent2',
    email: 'parent2@nextmail.com',
    password: 'parents123',
  },
];

const learners = [
  {
    id: '410544y2-4901-4971-9855-bic4b6a6442a',
    name:'Learner1',
    age: 9,
    image:'',
    parent_id: parents[0].id,
    password: 'learner123',

  },

  {
    id: '410544y2-4901-4971-9855-bic4b6a6442a',
    name:'Learner2',
    age: 12,
    image: '',
    parent_id: parents[1].id,
    password: 'learner123',

  }
]

const courses = [
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Junior Web App Developement',
    code: '001',

  },

  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Junior Mobile App Development',
    code: '002',

  },

  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Junior Game Developement',
    code: '003',

  }
]

const courseGrades = [
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    course_id: courses[0].id,
    learner_id: learners[0].id,
    first_assessment: 2,
    second_assessment: 2,
    project: 4,
  },

  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    course_id: courses[1].id,
    learner_id: learners[1].id,
    first_assessment: 5,
    second_assessment: 5,
    project: 8,
  }
]


const seasons = [
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Shor Vacation',
    code: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
  },

  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Medium Vacation',
    code: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
  },

  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Long Vacation',
    code: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
  }
]


module.exports = {
  staffs,
  parents,
  learners,
  courses,
  courseGrades,
  seasons,
};
