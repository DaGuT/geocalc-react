import React, {Component} from 'react';
import $ from 'jquery';
import './calc.css'
import Slideout from "slideout";
import 'bootstrap/dist/css/bootstrap.min.css';
import drawTabs from '../../../../misc/drawTabs'

let params = {
  'displayName': 'Calculator',
  'blockID': 'main-calc'
};

/**
 * calc - calculator
 *
 * @return {DOM block}  calculator that consists of tabs that are in calculator-tabs folder and are automatically loaded
 */
function calc() {

  let blocks = require.context("./calculator-tabs", true, /^\.\/.*\.js/);

  let indexBlocks = [];

  blocks.keys().forEach((key) => {
    indexBlocks.push(blocks(key));
  });

  return (<div  id={params.blockID} key={params.blockID} className="container just-launched">
    <div>
      <p className="choose-metrics">Для решения задачи нахождения координат определяемой точки выберите тип имеющихся у Вас измерений</p>
    </div>
    <div id="tabs" className="">
      {drawTabs(indexBlocks)}
    </div>
  </div>);
}

/**
 * later - executed after DOM is loaded
 *
 */
function later() {
  let animspeed= 400; //Animation time in ms

  /**
   * cbpFWTabs.js v1.0.0
   * http://www.codrops.com
   *
   * Licensed under the MIT license.
   * http://www.opensource.org/licenses/mit-license.php
   *
   * Copyright 2014, Codrops
   * http://www.codrops.com
   */
  (function(window) {

    'use strict';

    function extend(a, b) {
      for (var key in b) {
        if (b.hasOwnProperty(key)) {
          a[key] = b[key];
        }
      }
      return a;
    }

    function CBPFWTabs(el, options) {
      this.el = el;
      this.options = extend({}, this.options);
      extend(this.options, options);
      this._init();
    }

    CBPFWTabs.prototype.options = {
      start: -1
    };

    CBPFWTabs.prototype._init = function() {
      // tabs elemes
      this.tabs = [].slice.call(this.el.querySelectorAll('nav > ul > li'));
      // content items
      this.items = [].slice.call(this.el.querySelectorAll('.content > section'));
      // current index
      this.current = -1;
      // show current content item
      this._show();
      // init events
      this._initEvents();
    };

    CBPFWTabs.prototype._initEvents = function() {
      var self = this;
      this.tabs.forEach(function(tab, idx) {
        tab.addEventListener('click', function(ev) {
          ev.preventDefault();
          self._show(idx);
        });
      });
    };

    CBPFWTabs.prototype._show = function(idx) {
      if (this.current >= 0) {
        this.tabs[this.current].className = '';
        this.items[this.current].className = '';
      }
      // change current

      if (idx!=undefined) {
        this.current=idx;
        this.tabs[this.current].className = 'tab-current';
        this.items[this.current].className = 'content-current';
      } else if (this.options.start>=0) {
        this.current=this.options.start;
        this.tabs[this.current].className = 'tab-current';
        this.items[this.current].className = 'content-current';
      }
/*      this.current = idx != undefined
        ? idx
        : this.options.start >= 0 && this.options.start < this.items.length
          ? this.options.start
          : 0;
*/

    };

    // add to global namespace
    window.CBPFWTabs = CBPFWTabs;

  })(window);

  new window.CBPFWTabs(document.getElementById('tabs'));


//we do this here and not in later because they are all similar, so we dont add same listeners more than once

// the selector will match all input controls of type :checkbox
// and attach a click event handler
$("input:checkbox").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});

//just to execute later functino of each module
var blocks = require.context("./calculator-tabs", true, /^\.\/.*\.js/);
var indexBlocks = [];

blocks.keys().forEach((key) => {
  indexBlocks.push(blocks(key));
});
indexBlocks.forEach((elem) => {
  if (elem.later)
    elem.later();
  }
);

//animation for the first tabs choise
let haha=$('.just-launched #tabs nav ul li'); //it's saves so that we can later delete onlick event
haha.click(()=>{
  $('.just-launched').addClass('launched').delay(animspeed).removeClass('just-launched');
  $('.choose-metrics').fadeOut(animspeed);
  $('#tabs').delay(animspeed).addClass('tabs');
  $('.content-current').hide().delay(animspeed).slideDown(animspeed);
  haha.off('click');
});

}

export {
  params
}
export default calc;
export {
  later
};
