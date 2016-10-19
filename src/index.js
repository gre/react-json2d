import React, {
  Component,
  PropTypes,
} from "react";
import JSON2D from "json2d";

export default class Json2d extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    ratio: PropTypes.number,
    resolveImage: PropTypes.func,
    renderVisitor: PropTypes.func,
  };
  static defaultProps = {
    ratio: window.devicePixelRatio,
  };
  shouldComponentUpdate ({ width, height, ratio }) {
    const { props } = this;
    return props.width !== width ||
      props.height !== height ||
      props.ratio !== ratio;
  }
  componentDidMount () {
    this.ctx = this._ref.getContext("2d");
    this.json2d = JSON2D(this.ctx, this.props.resolveImage);
    this.draw(this.props);
  }
  componentDidUpdate (props) {
    this.draw(props);
  }
  draw ({ children, renderVisitor }) {
    if (this._currentDrawn === children) return;
    this._currentDrawn = children;
    this.json2d.render(children, renderVisitor);
  }
  render () {
    const { width, height, ratio } = this.props;
    return (
      <canvas
        ref={ref => { this._ref = ref; }}
        style={{ width: width+"px", height: height+"px" }}
        width={width * ratio}
        height={height * ratio}
      />
    );
  }
}
