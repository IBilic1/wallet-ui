import {ChildUser, Guardian, Task, TaskChild} from "../../types/auth/types";

class DummyDataService {
    private static generateRandomId(): number {
        // Generate a random id (for simplicity, using Math.random for demonstration)
        return Math.floor(Math.random() * 1000);
    }

    private static getRandomElement<T>(array: T[]): T {
        // Get a random element from an array
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    static generateRandomTasks(count: number): Task[] {
        const randomTasks: Task[] = [];

        for (let i = 0; i < count; i++) {
            const task: Task = {
                id: DummyDataService.generateRandomId(),
                title: `Task ${i + 1}`,
                description: `Description for Task ${i + 1}`,
                timeToComplete: new Date(),
                deadline: new Date(),
                parentApproved: Math.random() < 0.5,
                AI_created: Math.random() < 0.5,
            };

            randomTasks.push(task);
        }

        return randomTasks;
    }

    static generateRandomChildren(count: number): ChildUser[] {
        const randomChildren: ChildUser[] = [];

        for (let i = 0; i < count; i++) {
            const child: ChildUser = {
                id: DummyDataService.generateRandomId(),
                firstName: `Child ${i + 1}`,
                lastName: 'Last Name',
                email: `child${i + 1}@example.com`,
                listOfTasks: [],
                listOfGuardians: [],
            };

            randomChildren.push(child);
        }

        return randomChildren;
    }

    static generateRandomGuardians(count: number, children: ChildUser[]): Guardian[] {
        const randomGuardians: Guardian[] = [];

        for (let i = 0; i < count; i++) {
            const guardian: Guardian = {
                id: DummyDataService.generateRandomId(),
                firstName: `Guardian ${i + 1}`,
                lastName: 'Last Name',
                email: `guardian${i + 1}@example.com`,
                listOfChildren: [],
            };

            // Randomly assign children to the guardian
            const numberOfChildren = Math.floor(Math.random() * children.length) + 1;
            for (let j = 0; j < numberOfChildren; j++) {
                const randomChild = DummyDataService.getRandomElement(children);
                guardian.listOfChildren.push(randomChild);
                randomChild.listOfGuardians.push(guardian);
            }

            randomGuardians.push(guardian);
        }

        return randomGuardians;
    }

    static generateRandomTaskChild(child: ChildUser, tasks: Task[]): TaskChild[] {
        const randomTaskChildren: TaskChild[] = [];

        const numberOfTasks = Math.floor(Math.random() * (tasks.length - 1)) + 1;
        for (let i = 0; i < numberOfTasks; i++) {
            const randomTask = DummyDataService.getRandomElement(tasks);

            // Check if the task is already assigned to the child
            const isTaskAssigned = child.listOfTasks.some((taskChild) => taskChild.id === randomTask.id);

            if (!isTaskAssigned) {
                const taskChild: TaskChild = {
                    childID: child.id,
                    completed: Math.random() < 0.5,
                    ...randomTask,
                };

                child.listOfTasks.push(taskChild);
                randomTaskChildren.push(taskChild);
            }
        }

        return randomTaskChildren;
    }

    static getRandomElements<T>(array: T[], count: number): T[] {
        const shuffledArray = array.slice().sort(() => 0.5 - Math.random());
        return shuffledArray.slice(0, count);
    }

    // // Save data to JSON file
    // static saveDataToJSON(data: any, fileName: string) {
    //     try {
    //         const jsonString = JSON.stringify(data, null, 2);
    //         fs.writeFileSync(fileName, jsonString);
    //         console.log(`Data saved to ${fileName}`);
    //     } catch (error : any) {
    //         console.error('Error saving data:', error.message);
    //     }
    // }
    //
    // // Read data from JSON file
    // static readDataFromJSON(fileName: string): any {
    //     try {
    //         const fileContent = fs.readFileSync(fileName, 'utf-8');
    //         return JSON.parse(fileContent);
    //     } catch (error : any) {
    //         console.error('Error reading data:', error.message);
    //         return null;
    //     }
    // }
}

export default DummyDataService;
