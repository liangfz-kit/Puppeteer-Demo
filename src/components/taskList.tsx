import * as React from 'react';
import { Button, Table } from 'antd';
import classnames from 'classnames';
// import { TaskDesign } from 'ngiq-api-types';
import { FormattedMessage, injectIntl, IntlShape } from 'react-intl';

type TaskListPropsType = {
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

export class IntlTaskList extends React.Component<TaskListPropsType> {
  public render() {
    return <div className={classnames('box_color', 'padding_10', this.props.className)}>
      {
        !this.props.idEdit &&
        <div className={classnames('flex_end')}>
          <Button
            ghost
            type="primary"
            onClick={this.addTaskList}
            icon="plus-circle">
            <span className={'margin_left_5'}><FormattedMessage id={'subject.job.task.addTask'} /></span>
          </Button>
        </div>
      }
      <div className={'margin_top_10'}>
        {
          this.props.taskList.map((task: any, index: number) => {
            const deleteTaskList = () => this.deleteClick(index);
            const editClick = () => this.editClick(index);

            return <div className={'margin_top_20'} key={index}>
              <div className={classnames('flex_between')}>
                <div className={classnames('font_title')}>{task.name}</div>
                {!this.props.idEdit &&
                  <span className={'row'}>
                    <img
                      onClick={deleteTaskList}
                      className={classnames('icon_size', 'pointer', 'margin_right_10')}
                      alt="delete"
                      src="/task_delete.png" />
                    <img
                      onClick={editClick}
                      className={classnames('icon_size', 'pointer')}
                      alt="edit"
                      src="/task_edit.png" />
                  </span>
                }
              </div>
              <div className={'word_wrap'}>{task.description}</div>
              <Table
                className={'margin_top_10'}
                pagination={false}
                columns={this.getColumns()}
                dataSource={task.stimuInfos}
              />
            </div>;
          })
        }
      </div>
    </div>;
  }

  private addTaskList = () => {
    this.props.addTaskList!();
  }

  private deleteClick = (index: number) => {
    this.props.deleteTaskList!(index);
  }

  private editClick = (index: number) => {
    this.props.editTaskList!(index);
  }

  private getColumns = () => {
    const { intl } = this.props;
    const conditionTitle = intl.formatMessage({ id: 'subject.job.task.condition' });
    const startTitle = intl.formatMessage({ id: 'subject.job.task.startTime' });
    const durationTitle = intl.formatMessage({ id: 'subject.job.task.durationTime' });

    return [
      {
        title: conditionTitle,
        dataIndex: 'condition',
        width: '30%',
        align: 'center' as any,
      },
      {
        title: startTitle,
        dataIndex: 'start',
        width: '30%',
        align: 'center' as any,
      },
      {
        title: durationTitle,
        dataIndex: 'duration',
        width: '30%',
        align: 'center' as any,
      },
    ];
  }
}

export const TaskList = injectIntl(IntlTaskList);