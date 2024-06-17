import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "semantic-ui-react";

function MultiModal({ pHeader, pContent, pModalOpen, setModalOpen, pRedirect }) {
  const navigate = useNavigate();
  
  const handleDoneClick = () => {
    setModalOpen(false) ;
    navigate(pRedirect);
  };
  return (
<Modal
      open={pModalOpen}
      header={pHeader}
      content={pContent}
      actions={[{ key: 'done', content: 'OK', positive: true}]}
      onActionClick={handleDoneClick}
    />
  );
}

export default MultiModal;
