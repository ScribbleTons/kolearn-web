import {
  CheckCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Popconfirm, Tooltip } from 'antd';
import { useState } from 'react';
import EditQuestion from '../EditQuestion';
import './index.scss';

const PreviewCard = () => {
  const [editQuestion, setEditQuestion] = useState({
    visible: false,
    payload: {
      question: '',
      options: [''],
      correctOption: 0,
    },
  });

  const onEdit = () => {
    setEditQuestion({
      visible: true,
      payload: {
        question: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus quos et asperiores voluptas impedit cupiditate, facere quia eligendi, nihil explicabo nesciunt? Reiciendis tempore tempora, enim
            in quos odio repudiandae accusantium?`,
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        correctOption: 2,
      },
    });
  };

  const onCancelEdit = () => {
    setEditQuestion({
      visible: false,
      payload: {
        question: '',
        options: [''],
        correctOption: 0,
      },
    });
  };

  const confirmDelete = () => {
    console.log('deleted');
  };

  return (
    <>
      {editQuestion.visible && (
        <EditQuestion editQuestion={editQuestion} onCancel={onCancelEdit} />
      )}

      <div className='preview-card'>
        <div className='action-bar'>
          <Tooltip title='Edit'>
            <EditOutlined onClick={onEdit} />
          </Tooltip>

          <Tooltip title='Delete'>
            <Popconfirm
              title='Are you sure to delete this task?'
              onConfirm={confirmDelete}
              okText='Yes'
              cancelText='No'
            >
              <DeleteOutlined style={{ color: 'red' }} />
            </Popconfirm>
          </Tooltip>
        </div>
        <div className='preview-card-header'>
          <div>
            <span>Subject: Mathematics</span>
            <span>Created By: Emmanuel Ugwuoke</span>
          </div>
          <div>
            <span>Level: 0</span>
            <span>Class: JSS 1</span>
          </div>
        </div>
        <div className='preview-card-body'>
          <p className='question'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            quos et asperiores voluptas impedit cupiditate, facere quia
            eligendi, nihil explicabo nesciunt? Reiciendis tempore tempora, enim
            in quos odio repudiandae accusantium?
          </p>
          <p>Options</p>
          <ol>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
          </ol>
        </div>
        <fieldset className='fieldset'>
          <legend className='legend'>Stats</legend>
          <div className='stats'>
            <p>
              <Tooltip title='Number of students that answered correctly'>
                <CheckCircleOutlined style={{ color: 'green' }} />
              </Tooltip>
              <span>550</span>
            </p>
            <p>
              <Tooltip title='Number of students that failed'>
                <CloseOutlined style={{ color: 'red' }} />
              </Tooltip>
              <span>550</span>
            </p>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default PreviewCard;
