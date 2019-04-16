import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import { clearErrors } from '../actions/errorAction';
import PropTypes from 'prop-types';

class ItemModal extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.onSubmit = this.onSubmit.bind(this);
  //   }
  state = {
    modal: false,
    name: '',
    msg: null
  };

  static propTypes = {
    error: PropTypes.object.isRequired,
    addItem: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      //check for register error
      if (error.id === 'ADD_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    if (this.state.added && this.props.modal) {
      console.log('123');
      if (!error.msg.hasOwnProperty('msg')) this.toggle();
    }
  }
  toggle = () => {
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    const newItem = {
      name: this.state.name
    };
    //Add item via addItem action
    this.props.addItem(newItem);
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add Item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add shopping item"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  error: state.error
});

export default connect(
  mapStateToProps,
  { addItem, clearErrors }
)(ItemModal);
