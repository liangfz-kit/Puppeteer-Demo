import * as React from 'react';
// tslint:disable-next-line:no-submodule-imports
import { Button, Table } from 'antd';
// tslint:disable-next-line:no-submodule-imports
import classnames from 'classnames';
// import { TaskDesign } from 'ngiq-api-types';
import { FormattedMessage, injectIntl } from 'react-intl';
export class IntlTaskList extends React.Component {
    constructor() {
        super(...arguments);
        this.addTaskList = () => {
            this.props.addTaskList();
        };
        this.deleteClick = (index) => {
            this.props.deleteTaskList(index);
        };
        this.editClick = (index) => {
            this.props.editTaskList(index);
        };
        this.getColumns = () => {
            const { intl } = this.props;
            const conditionTitle = intl.formatMessage({ id: 'subject.job.task.condition' });
            const startTitle = intl.formatMessage({ id: 'subject.job.task.startTime' });
            const durationTitle = intl.formatMessage({ id: 'subject.job.task.durationTime' });
            return [
                {
                    title: conditionTitle,
                    dataIndex: 'condition',
                    width: '30%',
                    align: 'center',
                },
                {
                    title: startTitle,
                    dataIndex: 'start',
                    width: '30%',
                    align: 'center',
                },
                {
                    title: durationTitle,
                    dataIndex: 'duration',
                    width: '30%',
                    align: 'center',
                },
            ];
        };
    }
    render() {
        return React.createElement("div", { className: classnames('box_color', 'padding_10', this.props.className) },
            !this.props.idEdit &&
                React.createElement("div", { className: classnames('flex_end') },
                    React.createElement(Button, { ghost: true, type: "primary", onClick: this.addTaskList, icon: "plus-circle" },
                        React.createElement("span", { className: 'margin_left_5' },
                            React.createElement(FormattedMessage, { id: 'subject.job.task.addTask' })))),
            React.createElement("div", { className: 'margin_top_10' }, this.props.taskList.map((task, index) => {
                const deleteTaskList = () => this.deleteClick(index);
                const editClick = () => this.editClick(index);
                return React.createElement("div", { className: 'margin_top_20', key: index },
                    React.createElement("div", { className: classnames('flex_between') },
                        React.createElement("div", { className: classnames('font_title') }, task.name),
                        !this.props.idEdit &&
                            React.createElement("span", { className: 'row' },
                                React.createElement("img", { onClick: deleteTaskList, className: classnames('icon_size', 'pointer', 'margin_right_10'), alt: "delete", src: "/task_delete.png" }),
                                React.createElement("img", { onClick: editClick, className: classnames('icon_size', 'pointer'), alt: "edit", src: "/task_edit.png" }))),
                    React.createElement("div", { className: 'word_wrap' }, task.description),
                    React.createElement(Table, { className: 'margin_top_10', pagination: false, columns: this.getColumns(), dataSource: task.stimuInfos }));
            })));
    }
}
export const TaskList = injectIntl(IntlTaskList);
//# sourceMappingURL=taskList.js.map