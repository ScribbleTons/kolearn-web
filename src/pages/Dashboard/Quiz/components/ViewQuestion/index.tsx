import { useState, useId } from 'react';
import { Button, Input } from 'antd';
import { BsFilter } from 'react-icons/bs';
import PreviewCard from '../PreviewCard';
import QuestionCard from '../QuestionCard';
import { Link } from '@tanstack/react-location';

const { Search } = Input;

const ViewQuestion = () => {
  const [selectedItem, setSelectedItem] = useState({});

  return (
    <div>
      <section className='search-bar'>
        <Search placeholder='Search for ViewQuestion question' size='large' />
        <Button icon={<BsFilter />} size='large' />
      </section>

      <section className='container'>
        <div className='quiz-content'>
          <div className='questions'>
            {Array(20)
              .fill(null)
              .map(() => ({ id: useId() }))
              .map((_, i) => (
                <QuestionCard
                  key={i}
                  selected={_.id === selectedItem?.id}
                  onSelect={() => setSelectedItem(_)}
                />
              ))}
          </div>
          <div className='question-preview'>
            <Link to='/d/quiz/create'>
              <Button type='primary' size='large' className='create-btn'>
                Create Question
              </Button>
            </Link>
            <PreviewCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewQuestion;
