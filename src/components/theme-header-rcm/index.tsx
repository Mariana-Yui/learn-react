import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper } from './style';

const ThemeHeaderRCM = memo(
  (props: { title: string; keywords?: Array<string>; moreLink?: string; keywordClick?: (keyword: string) => void }) => {
    const { title, keywords = [], moreLink, keywordClick } = props;
    return (
      <HeaderWrapper className="sprite_02">
        <div className="left">
          <h3 className="title">{title}</h3>
          {keywords && (
            <div className="keyword">
              {keywords.map((keyword, index) => {
                return (
                  <div className="item" key={keyword}>
                    <span className="link" onClick={(e) => keywordClick && keywordClick(keyword)}>
                      {keyword}
                    </span>
                    <span className="divider">|</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="right">
          {moreLink && (
            <Link to={moreLink}>
              更多
              <i className="icon sprite_02"></i>
            </Link>
          )}
        </div>
      </HeaderWrapper>
    );
  },
);

export default ThemeHeaderRCM;
