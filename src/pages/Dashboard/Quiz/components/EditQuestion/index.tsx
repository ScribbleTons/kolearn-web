import { FC, useEffect, useState } from 'react';
import { Form, Modal, Input, Select } from 'antd';
import QuizOption from './QuizOption';

interface EditQuestionProps {
  editQuestion: {
    visible: boolean;
    payload: {
      question: string;
      options: string[];
      correctOption: number;
    };
  };
  onCancel: () => void;
}
const { TextArea } = Input;

const EditQuestion: FC<EditQuestionProps> = ({ editQuestion, onCancel }) => {
  const [options, setOptions] = useState<string[]>([]);
  const [form] = Form.useForm();

  const onFinish = () => {
    const formValues = form.getFieldsValue(true);

    // TODO: Add API call
    console.log({ ...formValues, options });
    onCancel();
  };

  useEffect(() => {
    form.setFieldsValue({
      question: editQuestion.payload.question,
      correctOption: editQuestion.payload.correctOption.toString(),
    });
    setOptions(editQuestion.payload.options);
  }, []);
  return (
    <Modal
      title='Edit Question'
      visible={editQuestion.visible}
      onCancel={onCancel}
      okButtonProps={{
        form: 'edit-question',
        htmlType: 'submit',
      }}
      okText='Update'
    >
      <Form
        form={form}
        layout='vertical'
        id='edit-question'
        onFinish={ onFinish }
        size="large"
      >
        <Form.Item name='question' label='Question'>
          <TextArea rows={5} />
        </Form.Item>
        <Form.Item label='Options'>
          {options.map((option, index) => (
            <QuizOption
              key={index}
              index={index}
              text={option}
              updateOptions={setOptions}
            />
          ))}
        </Form.Item>

        <Form.Item name='correctOption' label='Select Correct Option'>
          <Select>
            {options.map((option, index) => (
              <Select.Option key={index} value={`${index}`}>
                {option}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditQuestion;
