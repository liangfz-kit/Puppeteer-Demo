import * as React from 'react';
import { IntlShape } from 'react-intl';
declare type TaskListPropsType = {
    intl: IntlShape;
    className?: string;
    idEdit?: boolean;
    saveButtonState?: boolean;
    taskList: any[];
    deleteTaskList?(index: number): void;
    addTaskList?(): void;
    editTaskList?(index: number): void;
    onSave?(): void;
};
export declare class IntlTaskList extends React.Component<TaskListPropsType> {
    render(): JSX.Element;
    private addTaskList;
    private deleteClick;
    private editClick;
    private getColumns;
}
export declare const TaskList: React.ForwardRefExoticComponent<Pick<TaskListPropsType, "className" | "idEdit" | "saveButtonState" | "taskList" | "deleteTaskList" | "addTaskList" | "editTaskList" | "onSave"> & {
    forwardedRef?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
} & React.RefAttributes<any>> & {
    WrappedComponent: React.ComponentType<TaskListPropsType>;
};
export {};
