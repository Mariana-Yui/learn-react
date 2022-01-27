import React, { Component } from 'react';
import './style.css';

interface IProps {
  tabs: Array<string>;
  curIndex: number;
  click: (index: number) => void;
}

class Tabs extends Component<any, IProps> {
  render() {
    const { tabs, curIndex, click } = this.props;
    return (
      <div className="tabs-wrap">
        {tabs.map((tab, index) => {
          return (
            <div
              className={`tab-item  ${index === curIndex ? 'active' : ''}`}
              onClick={(e) => click(index)}
              key={index}>
              <span>{tab}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Tabs;
