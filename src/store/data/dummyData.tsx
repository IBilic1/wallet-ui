import DummyDataService from './DummyDataService';
import {ChildUser, Guardian, Task} from "../../types/auth/types";

// Generate 20 random tasks
const tasks: Task[] = DummyDataService.generateRandomTasks(20);

// Generate 5 random children
const children: ChildUser[] = DummyDataService.generateRandomChildren(5);

// Generate 3 random guardians
const guardians: Guardian[] = DummyDataService.generateRandomGuardians(3, children);

// Assign 3 children to the first guardian and 2 children each to the other two guardians
guardians[0].listOfChildren = children.slice(0, 3);
guardians[1].listOfChildren = children.slice(3, 5);
guardians[2].listOfChildren = children.slice(5, 7);

// Randomly assign 4 to 7 tasks for each child
children.forEach((child) => {
    const numberOfTasks = Math.floor(Math.random() * 4) + 4;
    const tasksForChild = DummyDataService.generateRandomTaskChild(child, tasks.slice());

    // You can limit the number of tasks assigned to each child if needed
    child.listOfTasks = tasksForChild.slice(0, numberOfTasks);
});

// Now, you have the randomly generated data
console.log('Random Tasks:', tasks);
console.log('Random Children:', children);
console.log('Random Guardians:', guardians);

// // Save data to JSON file
// DummyDataService.saveDataToJSON({ tasks, children, guardians }, 'DB.json');
//
// // Read data from JSON file
// const savedData = DummyDataService.readDataFromJSON('DB.json');
// console.log('Data read from JSON file:', savedData);