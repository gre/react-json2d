import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import JSON2D from "json2d";

export default class Json2d extends PureComponent {
  static propTypes = {
    children: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    ratio: PropTypes.number,
    resolveImage: PropTypes.func,
    renderVisitor: PropTypes.func
  };
  static defaultProps = {
    ratio: window.devicePixelRatio
  };
  componentDidMount() {
    this.ctx = this._ref.getContext("2d");
    this.json2d = JSON2D(this.ctx, this.props.resolveImage);
    this.draw(this.props);
  }
  componentDidUpdate() {
    this.draw(this.props);
  }
  draw({ children, renderVisitor }) {
    return this.json2d.render(children, renderVisitor);
  }
  onRef = ref => {
    this._ref = ref;
  };
  render() {
    const { width, height, ratio } = this.props;
    return (
      <canvas
        ref={this.onRef}
        style={{ width, height }}
        width={width * ratio}
        height={height * ratio}
      />
    );
  }
}
