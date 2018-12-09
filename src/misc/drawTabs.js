import React, {Component} from 'react';
//Tabs drawing function that takes each block from tabs folder and then draw it with tab name

/**
 * drawTabs - returns array of DOM blocks so that site can be drawn with module-based approach
 *
 * @param  {React.Component} that React Component that has 'req' object that consists of functions that draws DOM block (so that you can make as much functions that returns blocks in folder and they will all be drawn)
 * @return {array of DOM blocks}
 */
function drawTabs(blocksList) {
  var content = [];
  var head = [];
  blocksList.forEach((elem) => {
    content.push(<section id={elem.params.blockID} key={'section-'+elem.params.blockID}>
      {elem.default()}
    </section>);
    head.push(<li key={'li-'+elem.params.blockID}>
      <div className="wrapper">
        <span className="square individual">
          <a href={elem.params.blockID} className="before after"><i className={elem.params.icon}></i>{elem.params.displayName}</a>
        </span>
      </div>
    </li>);
  });

  return ([
    <nav>
      <ul>
        {head}
      </ul>
    </nav>,
    <div className="content">
      {content}
    </div>

  ]);
}

export default drawTabs;
