import React, {Component} from 'react';
import '../main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import drawBlocks from '../../../misc/drawBlocks'

/**
 * This is react class for our index page
 * @class
 */
class IndexPage extends Component {

  //we fetch every single block from parts folder and then make a great thing drawing it
  constructor() {
    super();

    //we save each block that we have in that folder to later draw it with drawBlocks();
    let blocks = require.context("./parts", false, /^\.\/.*\.js/)

    this.indexBlocks = [];

    blocks.keys().forEach((key) => {
      this.indexBlocks.push(blocks(key));
    });

  }

  resort = () => {
    this.forceUpdate();
  }

  //after we rendered our page, we add JS stuff
  componentDidMount() {

    //if there are function that require to be executed after DOM is loaded, here we execute them
    this.indexBlocks.forEach((elem) => {
      if (elem.later)
        elem.later();
      }
    );
  }

  render() {

    return (<div>
      {drawBlocks(this.indexBlocks)}
    </div>);
  }
}

export default IndexPage;
