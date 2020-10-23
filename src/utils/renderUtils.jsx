import React from 'react'
import Modal from '@material-ui/core/Modal'
import {
  Button, Dialog, DialogActions
  , DialogContent, DialogContentText, DialogTitle
} from '@material-ui/core'

export const componentToModal = (ComposedComponent) => {
  const ModalComponent = (props) => {
    const { onClose, open, className, ...nestedProps } = props
    const handleClose = () => {
      onClose && typeof onClose === 'function' && onClose()
    }
    return (<Modal
      open={open}
      onClose={handleClose}
      className={className}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      <ComposedComponent {...nestedProps}/>
    </Modal>)
  }
  return ModalComponent
}

export const componentToDialog = (ComposedComponent) => {
  const DialogComponent = (props) => {
    const { onOpen, onClose, text = {}, onConfirm
      , className, customActions, customButton
      , hasTitle, hasConfirmButton, dialogOptions = {}
      , ...nestedProps
    } = props
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
      onOpen && typeof onOpen === 'function' ? onOpen(() => {
        setOpen(true)
      }) : setOpen(true)
    }

    const handleClose = () => {
      onClose && typeof onClose === 'function' ? onClose(() => {
        setOpen(false)
      }) : setOpen(false)
    }

    const handleConfirm = () => {
      onConfirm && typeof onConfirm === 'function' ? onConfirm(() => {
        setOpen(false)
      }) : setOpen(false)
    }

    return (
      <div>
        { customButton ||
          <Button variant='outlined' color='primary' onClick={handleClickOpen}>
            {text?.open || 'Open dialog'}
          </Button>
        }
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
          className={className}
          {...dialogOptions}
        >
          {hasTitle && <DialogTitle id='alert-dialog-title'>{text?.title || 'Unknow Title'}</DialogTitle>}
          <DialogContent>
            <ComposedComponent {...nestedProps}/>
          </DialogContent>
          { customActions ||
            <DialogActions>
              <Button onClick={handleClose} color='secondary'>
                {text?.cancel || 'cancel'}
              </Button>
              {hasConfirmButton && <Button onClick={handleConfirm} color='secondary' autoFocus>
                {text?.confirm || 'confirm'}
              </Button>}
            </DialogActions>
          }
        </Dialog>
      </div>
    )
  }
  return DialogComponent
}