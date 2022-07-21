# week3

## Learning objective:

Get familar with javascript native array functions

## Goal

Be able to identify the right function to use and know the differences. You are expected to use
map, sum, sort, find, reduce, split, join, spread opeator ( ... ) or more in this practice

## Turn in

Code

## Instruction

You are asked to work in a nestjs project under directory practice1

1. Create a copy of practice1 with your own name like 'practice1_jimmy'
2. Work in the src/service directory to finish the service and test
3. You do not need to run the app, just make sure code is implemented and tests all pass with `npm run test`
4. Do not use C++ mindset, this is pure javascript/typescript practice
5. Once you are done, check in your code and we will discuss them in our weekly meeting

# Angular Learning epsoide

116, 117, 118, 19, 120, 121, 122

few notes: 
1. the speaker uses `slService` for `shoppingListService`. I think this is a very very bad practice. Always try to creat varable with a full and meaningful name. 
2. When talking to your customer, `avoid using acronym` unless you are 200% sure they all understand the acronym. 
3. Prefer camal case (aB) than snake (a_b) case. 
4. inline-css: try everything you can to avoid this. try everything you can to put css rules within the scope of component, unless you are absolutely sure it's going to be shared or used globally. 


questions:
How do you inject a service to a component and it's sub components? 
How do you emit and subscribe something through service, what is the benefit over component binding. 
Why in class primitive is defined as private, why return a copy of it and how? 
What happened if you change the primitive value (add, remove, update), will it work still, why and why not. What are some ways to make it work? 
What is a spread operator, how does it work. 
How do you use one service in another service. 

Now try again to describe how to pass data from child A to parent B using service.

      grandparent
        /      \
    parent A   parent B
      /
child A
