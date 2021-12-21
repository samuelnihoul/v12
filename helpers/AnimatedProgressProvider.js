import React from "react";
import { Animate } from "react-move";
/* interface props {
  repeat: boolean,
  duration: number,
  valueStart: number,
  valueEnd: number,
  easingFunction: Function

} */
class AnimatedProgressProvider extends React.Component {
  interval = undefined;
  /* repeat=undefined;
  duration=undefined;
  valueStart=undefined;
  valueEnd=undefined;
  easingFunction:Function
   constructor({repeat,duration,valueEnd,valueStart, easingFunction,...props}:props){super(props);
   repeat;
   duration;
   valueEnd;
   valueStart;
   easingFunction;
   } */
  state = {
    isAnimated: false,
  };

  static defaultProps = {
    valueStart: 0,
  };

  componentDidMount() {
    if (this.props.repeat) {
      this.interval = window.setInterval(() => {
        this.setState({
          isAnimated: !this.state.isAnimated,
        });
      }, this.props.duration * 1000);
    } else {
      this.setState({
        isAnimated: !this.state.isAnimated,
      });
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <Animate
        start={() => ({
          value: this.props.valueStart,
        })}
        update={() => ({
          value: [
            this.state.isAnimated ? this.props.valueEnd : this.props.valueStart,
          ],
          timing: {
            duration: this.props.duration * 1000,
            ease: this.props.easingFunction,
          },
        })}
      >
        {({ value }) => this.props.children(value)}
      </Animate>
    );
  }
}

export default AnimatedProgressProvider;
