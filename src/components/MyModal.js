import React, { useEffect } from 'react';
import { Modal } from 'bootstrap';

function MyModal(props) {
    // useEffect(() => {
    //     const modalElement = document.getElementById(props.id);
    //     const modalInstance = new Modal(modalElement);

    //     // Event listener to clean up backdrops when modal is hidden
    //     const handleModalHide = () => {
    //         // Remove any lingering backdrops
    //         document.querySelectorAll('.modal-backdrop').forEach((backdrop) => {
    //             backdrop.remove();
    //         });
    //     };

    //     // Attach event listener
    //     modalElement.addEventListener('hidden.bs.modal', handleModalHide);

    //     // Cleanup on component unmount
    //     return () => {
    //         modalElement.removeEventListener('hidden.bs.modal', handleModalHide);
    //         modalInstance.dispose(); // Dispose the modal instance to avoid memory leaks
    //     };
    // }, [props.id]);

    return <>
        <div className={`modal fade ${props.show ? 'show' : ''}`} tabIndex="-1" id={props.id}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                        <button id={props.id + '_btnClose'} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default MyModal;


//     return (
//         <div
//             className="modal fade"
//             id={props.id}
//             tabIndex="-1"
//             aria-labelledby={`${props.id}_label`}
//             aria-hidden="true"
//         >
//             <div className={`modal-dialog ${props.size || ''}`}>
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title" id={`${props.id}_label`}>
//                             {props.title}
//                         </h5>
//                         <button
//                             type="button"
//                             id={props.id + '_btnClose'}
//                             className="btn-close"
//                             data-bs-dismiss="modal"
//                             aria-label="Close"
//                         ></button>
//                     </div>
//                     <div className="modal-body">{props.children}</div>
//                 </div>
//             </div>
//         </div>
//     );
// }