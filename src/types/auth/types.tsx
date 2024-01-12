export type LoginRequest = {
    email: string;
    password: string;
};
export type SignUpRequest = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: "ADMIN" | "USER";
};

export type AuthResponse = {
    access_token: string;
    refresh_token: string;
};

export type Task = {
    id: number | string;
    title: string;
    description: string;
    timeToComplete: Date;
    deadline: Date;
    parentApproved: boolean;
    AI_created: boolean;
};

export type TaskChild = Task & {
    childID: number | string;
    completed: boolean;
};

export type User = {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
};

export type ChildUser = User & {
    listOfTasks: TaskChild[];
    listOfGuardians: Guardian[];
};

export type Guardian = User & {
    listOfChildren: ChildUser[];
};

export type TaskGuardianView = {
    listOfAllTasks: Task[];
    dropdownChildren: ChildUser[];
    assignTaskToChild: (childUser: ChildUser, taskID: number | string) => void;
};
