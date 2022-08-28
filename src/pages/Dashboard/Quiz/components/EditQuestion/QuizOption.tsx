import { Dispatch, SetStateAction, useState } from 'react';
import { Typography } from 'antd';

const { Paragraph, Text } = Typography;

const QuizOption = ({
  index,
  text,
  updateOptions,
}: {
  index: number;
  text: string;
  updateOptions: Dispatch<SetStateAction<string[]>>;
}) => {
  const [value, setValue] = useState('');

  const onChange = (text: string) => {
    setValue(text);
    updateOptions((prevState) => {
      prevState[index] = text;
      return [...prevState];
    });
  };

  return (
    <Text className='quiz-option'>
      {index + 1}
      <Paragraph
        editable={{
          onChange,
        }}
      >
        {value || text}
      </Paragraph>
    </Text>
  );
};

export default QuizOption;
