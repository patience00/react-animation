import React, {Component} from 'react';
import { render } from "react-dom";
import range from "lodash.range";
import { scaleLinear } from "d3-scale";
import { interpolateInferno } from "d3-scale-chromatic";
import { easeElastic } from "d3-ease";
import { NodeGroup } from "react-move";
const linear = scaleLinear().domain([0, window.innerWidth]);

export default class Snake extends Component{
    constructor(props) {
        super(props);
        this.state = { x: 250, y: 300 };

        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
    }
    componentDidMount() {
        window.addEventListener("mousemove", this.handleMouseMove);
        window.addEventListener("touchmove", this.handleTouchMove);
    }

    handleMouseMove({ pageX: x, pageY: y }) {
        this.setState({ x, y });
    }

    handleTouchMove({ touches }) {
        this.handleMouseMove(touches[0]);
    }

    render() {
        return (
            <NodeGroup
                data={range(6).map(d => {
                    return {
                        key: `key-${d}`,
                        x: this.state.x,
                        y: this.state.y
                    };
                })}
                keyAccessor={d => d.key}
                start={data => {
                    return { x: data.x, y: data.y };
                }}
                update={(data, index) => {
                    return {
                        x: [data.x],
                        y: [data.y],
                        timing: {
                            delay: index * 120,
                            duration: 2500,
                            ease: easeElastic
                        }
                    };
                }}
            >
                {nodes => (
                    <div>
                        {nodes.map(({ key, data, state: { x, y } }, index) => (
                            <div
                                key={key}
                                style={{
                                    backgroundColor: interpolateInferno(linear(x)),
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                    opacity: 0.7,
                                    WebkitTransform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                                    transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                                    zIndex: nodes.length - index + 5000
                                }}
                            />
                        ))}
                    </div>
                )}
            </NodeGroup>
        );
    }
}