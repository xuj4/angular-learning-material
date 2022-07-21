You are asked by your manager to create a course publishing system.

This app should

1. ask user to log in

- hard code the login credential in the app

2. view unpublish courses in backlog

3. view published courses

4. allow user to create new course

- form but try to add validation
- id has to be unique, usually this is handled by database, let's implement a simple function to handle this.

5. allow user to edit existing course

- reuse the same component from #4

6. allow user to publish a course

- simply use alert to notify result

7. allow user to unpublish a course

8. allow user to delete from backlog

9. All list of courses will only show course for mat {subject} {number}

10. all course entries should be clickable to route to a view that displays the detail of the course including schedule, instructor and prerequisite.

- prereq has to be a valid published course. add validation for this
- a go back button should be avalible

a simple design of data structure of the app

```
Course: {
    id: number,
    instructors: Instructor [],
    schedule: Schedule [],
    subject: string,
    number: number,
    name: string,
    description: string,
    prerequisite!: Course,
}
enum Day {
  Mon = 'Monday',
  Tue = 'Tuesday',
  Wed = 'Wednesday',
  Thu = 'Thursday',
  Fri = 'Friday',
}
enum Shift {
    morningFirst = '8am - 9am',
    morningSecond = '11am - 12pm',
    afterFirst = '1pm - 2pm',
    afterSecond = '3pm - 4pm',
}
Schedule {
    day: Day,
    shift: Shift,
}
Instructor {
    id: number,
    firstName: string,
    department: string,
    lastName: string,
}
CourseList: Course[]

```

- Add any fancy functionalies you like to explore such as picture, animation, firebase api, ngrx, make it live on an aws ec2 instance, create a CI/CD pipeline, add linters, or anything you would want to show at your interviews. I can help on this outside of our work scope.

- Suggest anything can be added or modified for future students.
