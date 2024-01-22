import React from 'react'

export type LoginRequest = {
  email: string;
  password: string;
};
export type SignUpRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: 'ADMIN' | 'USER';
};

export type AuthResponse = {
  access_token: string;
  refresh_token: string;
};

export type Task = {
  id?: number | string;
  title: string;
  description: string;
  dateTime: string;
  done: boolean;
  duration: number;
  pictureContent: string;
};

export type TaskChild = Task & {
  childID: number | string | undefined;
  completed: boolean;
};

export type User = {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?:string;
  children?: User[];
};

export type ChildUser = User & {
  listOfTasks: TaskChild[];
  listOfGuardians: Guardian[];
};

export type Guardian = User & {
  listOfChildren: ChildUser[];
};

export type TaskCardElement = {
  task: Task;
  children: ChildUser[];
};

export type TaskGuardianView = {
  listOfAllTasks: {
    task: Task;
    taskCardElement: React.ElementType | JSX.Element; // Adjust this based on your actual TaskCardElement type
  }[];
  dropdownChildren: ChildUser[];
  assignTaskToChild: (guardian: Guardian, child: ChildUser, task: Task) => void;
  guardian: Guardian;
};

export type UserTask = {
  id: number,
  task: Task,
  user: User
}

export type AddUserTask = {
  task: Task,
}

export type ContentProp_ = {
  image?: string | null,
  title: string | null,
  description: string | null,
  dateTime: string | null,
  duration: number | null,
}
