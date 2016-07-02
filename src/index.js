import React, {
  Component,
  PropTypes,
} from "react";
import Slide2d from "slide2d";

export default class Slide2D extends Component {
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
    this.slide2d = Slide2d(this.ctx, this.props.resolveImage);
    this.draw(this.props);
  }
  componentWillUpdate (props) {
    this.draw(props);
  }
  draw ({ children, renderVisitor }) {
    if (this._currentDrawn === children) return;
    this._currentDrawn = children;
    this.slide2d.render(children, renderVisitor);
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
