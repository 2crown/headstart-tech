const { db } = require('@vercel/postgres');
const {
  staffs,
  parents,
  learners,
  courses,
  courseGrades,
  seasons,

} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedStaffs(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "staffs" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS staff (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        mobile_phone VARCHAR(255) NOT NULL,
        status VARCHAR(255) NOT NULL DEFAULT active,
        isAdmin BOOLEAN NOT NULL DEFAULT false
       
      );
    `;

    console.log(`Created "staffs" table`);

    // Insert data into the "staffs" table
    const insertedStaffs = await Promise.all(
      staffs.map(async (staff) => {
        const hashedPassword = await bcrypt.hash(staff.password, 10);
        return client.sql`
        INSERT INTO staff (id, name, email, mobile_phone, isAdmin, password)
        VALUES (${staff.id}, ${staff.name}, ${staff.email}, ${staff.mobile_phone}, ${staff.isAdmin}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedStaffs.length} staff`);

    return {
      createTable,
      staff: insertedStaffs,
    };
  } catch (error) {
    console.error('Error seeding staff:', error);
    throw error;
  }
}


async function seedParents(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "parents" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS parents (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "parents" table`);

    // Insert data into the "parents" table
    const insertedParents = await Promise.all(
      parents.map(async (parent) => {
        const hashedPassword = await bcrypt.hash(parent.password, 10);
        return client.sql`
        INSERT INTO parents (id, name, email, password)
        VALUES (${parent.id}, ${parent.name}, ${parent.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedParents.length} parents`);

    return {
      createTable,
      parents: insertedParents,
    };
  } catch (error) {
    console.error('Error seeding staffs:', error);
    throw error;
  }
}


async function seedLearners(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "learners" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS learners (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        age INT NOT NULL,
        image 'VARCHAR(255)',
        password TEXT NOT NULL,
        parent_id VARCHAR(99) references parents(id)
      );
    `;

    console.log(`Created "learners" table`);

    // Insert data into the "learners" table
    const insertedLearners = await Promise.all(
      learners.map(async (learner) => {
        const hashedPassword = await bcrypt.hash(learner.password, 10);
        return client.sql`
        INSERT INTO parents (id, name, age, image, parent_id, password)
        VALUES (${learner.id}, ${learner.name}, ${learner.age}, ${learner.parent_id}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedLearners.length} learners`);

    return {
      createTable,
      learners: insertedLearners,
    };
  } catch (error) {
    console.error('Error seeding staffs:', error);
    throw error;
  }
}

async function seedCourses(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "courses" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS courses (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        code VARCHAR(99),
      );
    `;

    console.log(`Created "courses" table`);

    // Insert data into the "users" table
    const insertedCourses = await Promise.all(
      courses.map(async (course) => {
        return client.sql`
        INSERT INTO courses (id, name, code)
        VALUES (${course.id}, ${course.name}, ${course.code})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedCourses.length} courses`);

    return {
      createTable,
      courses: insertedCourses,
    };
  } catch (error) {
    console.error('Error seeding staffs:', error);
    throw error;
  }
}


async function seedCourseGrades(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "courseGrades" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS courseGrades (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        course_id VARCHAR(99) references courses(id),
        learner_id VARCHAR(99) references students(id),
        first_assessement INT,
        second_assessement INT,
        project INT
      );
    `;

    console.log(`Created "courses" table`);

    // Insert data into the "courses" table
    const insertedCourseGrades = await Promise.all(
      courseGrades.map(async (courseGrade) => {
        return client.sql`
        INSERT INTO parents (id, course_id, learner_id, first_assessment, second_assessment, project)
        VALUES (${courseGrade.id}, ${courseGrade.course_id}, ${courseGrade.learner_id}, ${courseGrade.first_assessment}, ${courseGrade.second_assessment}, ${courseGrade.project})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedCourseGrades.length} grades`);

    return {
      createTable,
      courseGrades: insertedCourseGrades,
    };
  } catch (error) {
    console.error('Error seeding staffs:', error);
    throw error;
  }
}


async function seedSeasons(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "seasons" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS seasons (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        code VARCHAR(255) NOT NULL,
      );
    `;

    console.log(`Created "seasons" table`);

    // Insert data into the "seasons" table
    const insertedSeasons = await Promise.all(
      seasons.map(async (season) => {
    
        return client.sql`
        INSERT INTO seasons (id, name, code)
        VALUES (${season.id}, ${season.name}, ${season.code})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedSeasons.length} seasons`);

    return {
      createTable,
      seasons: insertedSeasons,
    };
  } catch (error) {
    console.error('Error seeding staffs:', error);
    throw error;
  }
}


async function main() {
  const client = await db.connect();

  await seedStaffs(client);
  await seedParents(client);
  await seedLearners(client);
  await seedCourses(client);
  await seedCourseGrades(client);
  await seedSeasons(client);


  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
