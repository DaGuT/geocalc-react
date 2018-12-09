import React, {Component} from 'react';
import $ from 'jquery';
import Checkbox from '../../../../../misc/components/checkbox/checkbox.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './uglovaya-assets/ugl.css';
import templ from "./uglovaya-assets/template.txt"

let params = {
  'displayName': 'Угловая',
  'blockID': 'uglovaya-zadacha',
  'icon': ''
};

/**
 * task - this is tab with ...
 *
 * @return {React.DOM}  returns tab block with...
 */
function task() {
  return (<form action="#" encType="multipart/form-data" id={'form' + params.blockID} key={'form-' + params.blockID} method="post">
    <div className="row d-flex">
      <div className="col-xl-2">
        <h1>Шаг 1.
        </h1>
      </div>
      <div className="col-xl-10">
        <h1 className="text-left">Выбор метода формирования СЛАУ</h1>
        <p className="tip">На данном шаге Вам необходимо выбрать метод, по которому система построит СЛАУ на основе загруженнных в шаге 2 угловых измерений. Шаг 2 будет доступен сразу после выбора метода формирования СЛАУ.</p>
        <div className="offset-1 mb-3">
          <Checkbox name="variant" value="1" className={params.blockID}>1-ый метод</Checkbox>
          <Checkbox name="variant" value="2" className={params.blockID}>2-ой метод</Checkbox>
        </div>
        <h5>Внимание! На данный момент решение СЛАУ проводится с использованием алгориитма сингулярного разложения (SVD-алгоритм). Другие алгоритмы решения находятся в разработке.</h5>
      </div>
    </div>
    <div id={'loader-' + params.blockID} style={{
        display: 'none'
      }}>
      <div className="row mt-5 d-flex">
        <div className="col-xl-2">
          <h1>Шаг 2.</h1>
        </div>
        <div className="col-xl-10">
          <h1>Выберите файл:</h1>
          <p className="tip">На шаге 2 вам нужно выбрать файл с данными в определенной структуре и загрузить его на сайт. Подробнее о структуре файла можно прочитать нажав на кнопку "Требования к файлу". Также вы можете скачать шаблон с сайта и наполнить его своими данными.</p>
          <div className="input-group mb-3">
            <div className="custom-file">
              <input name="file1" type="file" className="custom-file-input" id={params.blockID + "inputGroupFile01"}/>
              <label className="custom-file-label" htmlFor={params.blockID + "inputGroupFile01"}>Выберите файл</label>
            </div>
          </div>
          <div className="row col-lg-12 d-flex justify-content-center">
            <a href={templ} target="_blank" className="btn btn-outline-primary mr-1 mb-1" download="template.txt">Скачать шаблон файла</a>
            <button type="button" className="btn btn-outline-primary mr-1 mb-1">Требования к файлу</button>
          </div>
        </div>
      </div>
    </div>
    <div id={'step3-' + params.blockID} style={{
        display: 'none'
      }}>
      <div className="row mt-5 d-flex">
        <div className="col-xl-2">
          <h1>Шаг 3.</h1>
        </div>
        <div className="col-lg-10 ">
          <h1>Решение</h1>
          <p className="tip">После нажатия на кнопку "Решить" ответ появится ниже. Можете его скопировать :)</p>
          <div className="col-lg-10 text-center">
            <button type="submit" className="btn btn-primary" id={'submit-' + params.blockID}>Решить</button>
          </div>
        </div>
      </div>
    </div>
    <div id={'result-' + params.blockID} style={{
        display: 'none'
      }} className="mt-5 row">
      <div className="col-xl-2">
        <h1 className="">Ответ.</h1>
      </div>
      <div className="col-lg-10">
        <div id={'answer-' + params.blockID} name={'answer-name-' + params.blockID} className='answer'></div>
      </div>
    </div>
  </form>);
}/** * later - this function will be executed after task() is rendered * * @return {type}
      applies toggable effect for file loader and helper */
function later() {
  //this part is used to show next step after method is selected
  var name = 'variant'; //selector for chekboxes to listen to for click event
  $('[name="' + name + '"]').click(function() { //this is adding even listener for click event
    var toggableBlock = $('#loader-' + params.blockID); //just to make it more readable
    if ($('.' + params.blockID + '[name=' + name + ']:checked').length) { //if we have any chechbox(radiobutton) selected then we display block
      toggableBlock.show(400);
      if (document.querySelector("#" + params.blockID + "inputGroupFile01").value!="")
        $('#step3-' + params.blockID).show(400);
      }
    else { //otherwise we hide it
      toggableBlock.hide(400);
      $('#step3-' + params.blockID).hide(400);
      $('#result-' + params.blockID).hide(400);
    }
  });
  document.querySelector("#" + params.blockID + "inputGroupFile01").addEventListener("change", function(event) {
    $('[for="' + params.blockID + "inputGroupFile01" + '"]').html(this.value);
    $('#step3-' + params.blockID).show(400);
  });

  $('#form' + params.blockID).submit(function(e) {
    e.preventDefault();

    if (!$('.' + params.blockID + '[name=' + name + ']:checked').length) {
      alert('Выберите метод!');
      return 0;
    }

    $.ajax({
      url: './php/uglovaya.php',
      type: 'POST',
      data: new FormData(this),
      processData: false,
      contentType: false,
      success: function(result) {
        $('#answer-' + params.blockID).html(result);
        $('#result-' + params.blockID).show(400);
      }
    });
  });
}

export {
  params,
  later
}
export default task;
