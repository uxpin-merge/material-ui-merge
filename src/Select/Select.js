import React from "react";
import PropTypes from "prop-types";
import SelectM from "@material-ui/core/Select";
import Input from "../Input/Input";

export default class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({selected: e.target.value});
  }

  render() {
    return (
    <SelectM {...this.props} input={!this.props.input ? <Input /> : this.props.input} onChange={(e) => this.handleChange(e)} value={this.state.selected}>
      {this.props.children}
    </SelectM>);
  }
}

Select.propTypes = {
  /**
   * If true, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: PropTypes.bool,

  /**
   * @uxpinignoreprop
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   */
  children: PropTypes.node,

  /**
   * @uxpinignoreprop
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * If `true`, the selected item is displayed even if its value is empty.
   * You can only use it when the `native` property is `false` (default).
   */
  displayEmpty: PropTypes.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: PropTypes.node,

  /**
   * @uxpinignoreprop
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: PropTypes.node,

  /**
   * @uxpinignoreprop
   * Attributes applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: PropTypes.object,

  /** @uxpinignoreprop */
  MenuProps: PropTypes.object,

  /**
   * If true, `value` must be an array and the menu will support multiple selections.
   */
  multiple: PropTypes.bool,

  /**
   * If `true`, the component will be using a native `select` element.
   */
  native: PropTypes.bool,

  /**
   * Callback function fired when a menu item is selected.
   */
  onChange: PropTypes.func,

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   */
  onClose: PropTypes.func,

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   */
  onOpen: PropTypes.func,

  /**
   * Control `select` open state.
   * You can only use it when the `native` property is `false` (default).
   */
  open: PropTypes.bool,

  /**
   * @uxpinignoreprop
   * Render the selected value.
   * You can only use it when the `native` property is `false` (default).
   */
  renderValue: PropTypes.func,

  /**
   * @uxpinignoreprop
   * Properties applied to the clickable div element.
   */
  SelectDisplayProps: PropTypes.object,

  /**
   * The input value.
   * This property is required when the `native` property is `false` (default).
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object]))]),
};

SelectM.defaultProps = {
  input: <Input />
}