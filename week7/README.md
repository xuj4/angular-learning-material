# week7

## Learning Objective

API design

For this week, we will learn the best practice on api design. As we have learned the http protocal and functions, we will need to learn how to make the url path meaningful. The reading should not take more than 15 mins.

https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design

Please be prepared to share the knowledge using your own words to the questions below:

1. explain `Platform independence` and `Service evolution`
2. what does `resources` refer to in this docs
3. what is difference between URL and URI.
4. (we have discussed this) What is uniform interface/http operation/http function.
5. what is stateless request model? then what is stateful.Give a couple reason why stateless. What happen if Jonny and Jimmy make a post request to the same object at excatelly same time?
6. Should we create api just to mirror the database object, why
7. Assume we have a goal to design a course information api with the objects and relationship below

- a course has multiple offerings (spring, summer, fall)
- a course offering has multiple days (Monday, Wednesday and Friday)
- a schedule has multiple schedules (students meet twice a day 8am -9am and 1pm-2pm)

Can you design an uri to get schedules given courseid and dayid

8. when returning data, should you return all or just what the client needs?
9. what is MIME type
10. for pagination, what is offset, limit?
11. Create a sample response json from the question #7. Including all the child parent relationships.

# Angular Learning epsoide

155-167

## questions

We will actually do a hands on practice this time. Please

1. create a new angular project
2. create three component:
   breakfast, lunch and drink, create router
3. make them accessible through
   localhost:9000/breakfast
   localhost:9000/lunch
4. create localhost:9000/breakfast/:id and print the id on load
5. make localhost:9000/breakfast/drink avaible
6. make sure it runs and works and check in to the week 7 folder
