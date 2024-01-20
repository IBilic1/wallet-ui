import React, {useState} from 'react';
import {Button, Card, CardActions, CardContent, Grid, Typography} from '@mui/material';
import {ChildUser, Guardian, Task, TaskGuardianView} from "../../types/auth/types";
import DummyDataService from "../../store/data/DummyDataService";
import {TaskCard} from "../../components/Cards/TaskCard";

export const generateTaskGuardianView = (): TaskGuardianView => {
    // Generate dummy data
    const tasks: Task[] = DummyDataService.generateRandomTasks(20);
    const children: ChildUser[] = DummyDataService.generateRandomChildren(5);
    const guardians: Guardian[] = DummyDataService.generateRandomGuardians(3, children);

    // Assign tasks to children
    children.forEach((child) => {
        const numberOfTasks = Math.floor(Math.random() * (7 - 4 + 1)) + 4; // Random number between 4 and 7
        const selectedTasks = DummyDataService.getRandomElements(tasks, numberOfTasks);
        child.listOfTasks = selectedTasks.map((task : Task) => ({
            childID: child.id,
            completed: false,
            ...task,
        }));
    });

    // Create a list of all tasks with corresponding CardElement
    const listOfAllTasks = tasks.map((task) => ({
        task,
        taskCardElement: (
            <Card key={task.id} sx={{ marginBottom: 2 }}>
                <CardContent>
                    <Typography variant="h6">{`${task.title} - ${task.description}`}</Typography>
                    {/* Add additional task information as needed */}
                </CardContent>
                <CardActions>
                    <Button variant="contained">Assign Task</Button>
                </CardActions>
            </Card>
        ),
    }));

// Create the TaskGuardianView object
    return {
        listOfAllTasks,
        dropdownChildren: children,
        assignTaskToChild: (guardian, child, task) => {
            // Implement the logic to assign a task to a child
            // This should add a new TaskChild to the child's listOfTasks if it doesn't already exist
        },
        guardian: guardians[0],
    };

};

export default function GuardianAssignTaskPage(taskGuardianView: TaskGuardianView)  {
    const [selectedChild, setSelectedChild] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null);

    const handleAssignTask = () => {
        if (selectedChild && selectedTask) {
            const guardian = taskGuardianView.guardian; // Assuming there's only one guardian for simplicity
            taskGuardianView.assignTaskToChild(guardian, selectedChild, selectedTask);
            // TODO: Add logic to show a toast or handle UI refresh
        }
    };

    return (
        <Grid container spacing={2}>
            {/* Left side - List of children and their assigned tasks */}
            <Grid item xs={6}>
                <Typography variant="h4">Children and Their Tasks</Typography>
                {
                taskGuardianView.guardian.listOfChildren.map((child) => (
                    <Card key={child.id} sx={{ marginBottom: 2 }}>
                        <CardContent>
                            <Typography variant="h6">{`${child.firstName} ${child.lastName}`}</Typography>
                            {child.listOfTasks.map((taskChild) => (
                                <div key={taskChild.id}>
                                    <Typography>{`${taskChild.title} - ${taskChild.description}`}</Typography>
                                    <Typography>{`Assigned to: ${child.firstName} ${child.lastName}`}</Typography>
                                    <Typography>{`Completed: ${taskChild.completed}`}</Typography>
                                    {/* Add additional task information as needed */}
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))
                }
            </Grid>

            {/* Right side - List of all tasks with assignment options */}
            <Grid item xs={6}>
                <Typography variant="h4">All Tasks</Typography>
                {taskGuardianView.listOfAllTasks.map((taskCardElement) => (
                    <TaskCard task={taskCardElement.task}/>
                ))}
            </Grid>
        </Grid>
    );
};
