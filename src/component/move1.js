import React, {Component} from 'react';
import {Button, Card} from 'antd';
import QueueAnim from 'rc-queue-anim';
import '../style/move1.css';

export default class Move1 extends Component {


    toNext = () => {
        this.props.history.push('/number');
    }

    render() {
        return (

            <div className="move1-body">
                <div>
                    <QueueAnim delay={300} className="queue-simple">
                        {/*key是必须要的一个参数*/}
                        {/*<div>Queue Demo</div>*/}
                        {/*<div>Queue Demo</div>*/}
                        {/*<div>Queue Demo</div>*/}
                        {/*<div>Queue Demo</div>*/}
                        <Card title="卡片标题" key="a2"></Card>
                        <Card title="卡片标题" key="b2"></Card>
                        <Card title="卡片标题" key="c2"></Card>
                        <Card title="卡片标题" key="d3"></Card>
                    </QueueAnim>
                </div>
                <Button type="primary" onClick={this.toNext}>下一个动画</Button>
            </div>
        )
    }
}