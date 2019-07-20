import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import React, {Component} from 'react';
import 'rc-banner-anim/assets/index.css';
import '../style/move1.css';
import {Button} from "antd";

const BgElement = Element.BgElement;
export default class BannerDemo extends Component {


    toNext=()=>{
        this.props.history.push('/banner2');
    }

    render(){
        return (
            <div>

            <BannerAnim prefixCls="banner-user">
                <Element
                    prefixCls="banner-user-elem"
                    key="0"
                >
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                            background: '#364D79',
                        }}
                    />
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        Ant Motion Banner
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                              animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    >
                        The Fast Way Use Animation In React
                    </TweenOne>
                </Element>
                <Element
                    prefixCls="banner-user-elem"
                    key="1"
                >
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                            background: '#64CBCC',
                        }}
                    />
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        Ant Motion Banner
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                              animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    >
                        The Fast Way Use Animation In React
                    </TweenOne>
                </Element>
            </BannerAnim>
                <div className="move1-body">
                <Button type="primary" onClick={this.toNext}>下一个动画</Button>

                </div>

            </div>
        );
    }
}
