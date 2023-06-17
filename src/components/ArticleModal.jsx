import { Modal, Button } from 'antd';
import NiceModal, { useModal } from '@ebay/nice-modal-react';

import ReactEmbedGist from 'react-embed-gist';

export const ArticleModal= NiceModal.create(({ id, setShowModal }) => {
  const modal = useModal();
  return (
    <>
    <Modal
      className="max-h-[70%] min-w-[60%] overflow-y-scroll rounded-[10px]"
      open={modal.visible}
      onOk={modal.hide}
      onCancel={modal.hide}
      afterClose={() => {
        setShowModal(false);
        modal.remove();
      }}
      footer={[
        <Button onClick={modal.hide}>
          Close
        </Button>,
        <Button
          className="text-white bg-[#24292F]"
          onClick={() => window.open("https://gist.github.com/" + id, "_blank")}
        >
          View on Github
        </Button>,
      ]}
      >
        <ReactEmbedGist
          gist={id}
          wrapperClass="max-h-200"
        />
    </Modal>
    </>
  );
});

export default ArticleModal;
