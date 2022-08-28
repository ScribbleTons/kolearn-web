import { Typography } from 'antd';
import { FC } from 'react';

interface QuestionCardProps {
  selected: boolean;
  item?: any;
  onSelect: () => void;
}

const QuestionCard: FC<QuestionCardProps> = ({ selected, onSelect }) => {
  return (
    <div
      className={`question-card ${selected ? 'active-card' : ''}`}
      onClick={onSelect}
    >
      <div className='question-card-header'>
        <h4>Level: 0</h4>
        <h4>Subject: Math</h4>
      </div>
      <div className='question-card-body'>
        <h4>Question:</h4>
        <Typography.Paragraph
          ellipsis={{ rows: 3, expandable: false, symbol: '...more' }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          tempore sint asperiores, odit ex fugit praesentium aliquid, libero
          molestiae, nam saepe explicabo quo omnis. Nihil rem a vero
          necessitatibus at.
        </Typography.Paragraph>
      </div>
    </div>
  );
};

export default QuestionCard;
