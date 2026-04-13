import React from "react";
import ReactModal from "react-modal";

function ConfirmOrder(){
const { displayConfirmOrder } = useSelector((state) => state.Order);


return(
<ReactModal isOpen={displayConfirmOrder} onRequestClose={closeConfirmOrder}>

</ReactModal>

    )

}

export default ConfirmOrder;