import React, { useState } from "react";
import { Button, Modal, Form, Input, ConfigProvider } from "antd";
import { useDispatch } from "react-redux";
import { addData } from "../../features/Slice";
import style from "./DataModal.module.css";

const DataModal: React.FC = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // modalu aç
  const showModal = () => {
    setIsModalOpen(true);
  };
  // modalu aç
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    dispatch(addData(values));
  };

  return (
    <>
      {/* kustom color için provider*/}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#744bfc",
          },
        }}
      >
        <Button
          type='primary'
          style={{ background: "#744bfc" }}
          onClick={showModal}
          className={style.btn}
        >
          + Yeni Hesap Ekle
        </Button>
      </ConfigProvider>
      <Modal
        okText='Kaydet'
        cancelText='Vazgeç'
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <Form onFinish={onFinish} layout='vertical'>
          <Form.Item
            label='Sosyal Medya Linki'
            name='link'
            rules={[
              {
                required: true,
                message: "Please input your social media link!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Sosyal Medya Adı'
            name='name'
            rules={[
              {
                required: true,
                message: "Please input your social media name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Açıklama'
            name='description'
            rules={[
              { required: true, message: "Please input your description!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              Kaydet
            </Button>
          </Form.Item>
        </Form>
        <Button
          onClick={handleCancel}
          style={{ position: "absolute", bottom: "45px", right: "107px" }}
        >
          Vazgeç
        </Button>
      </Modal>
    </>
  );
};

export default DataModal;
