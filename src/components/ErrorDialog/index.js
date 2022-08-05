import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';

import "./style.css";

const ErrorDialog = ({ isOpen, handleClose, message}) => {

    return <Dialog
            open = {isOpen}
            onClose = { handleClose }
           >
        <DialogTitle id="id-error-dialog">Error!</DialogTitle>
        <DialogContent className="id-error-dialog-content" >
            <DialogContentText>
                { message }
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick= {handleClose} color="primary">
                Close
            </Button>
        </DialogActions>
    </Dialog>
};

export default React.memo(ErrorDialog);