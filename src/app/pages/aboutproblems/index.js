import React, {Component} from 'react';
import $ from 'jquery';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AboutProblems extends Component {

  componentDidMount() {
    // ass soon as component fully mounted an loaded everything, we hide everything
    $('.collapsable').hide();

    //and now on lick we reveal it
    $('.collapser').click(function() {
      //$(this.getAttribute('href')).slideToggle('slow');
      $(this).toggleClass('opened');

      //if everything is hidden now, then we go back to centered design (buttons are in the middle ofthe screen)
      if ($('.opened').length===0) {
        $(this.getAttribute('href')).slideToggle('slow',()=>{$('.aboutproblems').addClass('centered');});

        //if we opened some info, then we first move buttons to the top and then show info
      } else   {
        $('.aboutproblems').removeClass(() => {setTimeout(()=>{$(this.getAttribute('href')).slideToggle('slow');},400); return 'centered';});
      }
    });

  }

  render() {

    return (<div className="container mt-md-3 aboutproblems centered">

      <center><a href="#prgeozad" className="collapser btn btn-info">Прямая геодезическая задача</a></center>
      <div className="collapsable" id="prgeozad">
        <p> <b>Прямая геодезическая задача</b> заключается в том, что по известным координатам одной точки (например точка А), вычисляют координаты другой точки (например точка В), для чего необходимо знать горизонтальное проложение (длину) линии между этими точками (<img src="http://sitegeodesy.com/prgeozadacha1.gif"/>) и дирекционный угол этой линии <img src="http://sitegeodesy.com/prgeozadacha2.gif"/></p>

        <img className="centerimg" title="Прямая геодезическая задача" src="http://sitegeodesy.com/prgeozadacharisunok.gif" alt="Прямая геодезическая задача"/>

        <p>Решение <b>прямой геодезической задачи</b> выполняется по формулам:</p>

        <center><img className="centerimg" title="Формулы решения прямой геодезической задачи" src="http://sitegeodesy.com/prgeozadacha3.gif" alt="Формулы решения прямой геодезической задачи"/></center>

        <p>где
          <img src="http://sitegeodesy.com/prgeozadacha4.gif"/>
          называются приращениями координат и определяются из решения прямоугольного треугольника</p>
        <center><img src="http://sitegeodesy.com/prgeozadacha5.gif"/>:
          <img className="centerimg" src="http://sitegeodesy.com/prgeozadacha6.gif"/></center>
      </div>

      <br/>
    <center><a href="#obrgeozad" className="collapser btn btn-info">Обратная геодезическая задача</a></center>
      <div className="collapsable" id="obrgeozad">
        <p> <b>Обратная геодезическая задача</b> заключается в том, что по известным координатам двух точек (например точек А и В) вычисляют горизонтальное проложение (длину) линии между этими точками (<img src="http://sitegeodesy.com/obrgeozadacha1.gif"/>) и дирекционный угол этой линии <img src="http://sitegeodesy.com/obrgeozadacha2.gif"/>.</p>

        <img className="centerimg" title="Обратная геодезическая задача" src="http://sitegeodesy.com/prgeozadacharisunok.gif" alt="Обратная геодезическая задача"/>

        Решение <b>обратной геодезической задачи</b> выполняется в следующем порядке:
        <ol>
          <li>вычисляют приращения координат

            <img className="centerimg" src="http://sitegeodesy.com/obrgeozadacha3.gif"/></li>

          <li>из решения прямоугольного треугольника
            <img src="http://sitegeodesy.com/obrgeozadacha4.gif"/>
            определяют румб линии
            <img src="http://sitegeodesy.com/obrgeozadacha5.gif"/>:
            <img className="centerimg" src="http://sitegeodesy.com/obrgeozadacha6.gif"/>
            откуда
            <img className="centerimg" src="http://sitegeodesy.com/obrgeozadacha7.gif"/></li>

          <li>по знакам приращений координат (<img src="http://sitegeodesy.com/obrgeozadacha8.gif"/>) с помощью таблицы определяют в какой четверти находится заданное направление и по известному румбу линии (<img src="http://sitegeodesy.com/obrgeozadacha5.gif"/>) определяют дирекционный угол линии
            <img src="http://sitegeodesy.com/obrgeozadacha2.gif"/>

            <img className="centerimg" title="Связь румбов и дирекционных углов" src="http://sitegeodesy.com/prgeozadachatablicarumbov.gif" alt="Связь румбов и дирекционных углов"/></li>

          <li>определяют горизонтальное проложение (длину линии)
            <img src="http://sitegeodesy.com/obrgeozadacha9.gif"/></li>
        </ol>>
      </div>

      <br/>
    <center><a href="#obrodna" className="collapser btn btn-info">Обратная однократная засечка</a></center>
      <div className="collapsable" id="obrodna">
        <p className="western" lang="ru-RU" align="JUSTIFY"> <i> <b>Обратной угловой засечкой</b> </i> называется определение положения пункта путем измерения углов или направлений <i>на определяемом</i> пункте <i> <b>не менее чем на </b> </i> <i>три</i> <i> <b> пункта</b> </i>, координаты которых известны.</p>
        <p className="western" lang="ru-RU" align="JUSTIFY"> В том случае, когда исходных пунктов всего лишь <i> <b>три</b> </i>, обратная угловая засечка называется <i> <b>однократной</b> </i>. В том случае, когда исходных пунктов <i> <b>более трех</b> </i> – обратная угловая засечка называется <i> <b>многократной</b> </i>.</p>
        <p className="western" lang="ru-RU" align="JUSTIFY">Задача определения положения точки на плоскости по трем данным точкам обратной засечкой известна под названием <i>задачи Потенота</i> (Л.Потенот – французский математик; годы жизни 1660-1732 гг; в 1692 году предложил наиболее удачное аналитическое решение определения координат точки по трем известным точкам). Существует очень большое количество решений (более ста) этой задачи.</p>
       <p className="western" lang="ru-RU" align="JUSTIFY">Из всех существующих способов решения рассмотрим решение по формулам Деламбра.</p>
        <p className="western" lang="ru-RU" align="JUSTIFY">(Деламбр (Delambre) Жан Батист Жозеф (19.09.1749, Амьен, — 19.08.1822, Париж), французский астроном, геодезист и метролог. С 1792 член и с 1803 секретарь отделения математических наук Парижской АН. Совместно с П. Мешеном принимал (1792—97) участие в градусном измерении дуги меридиана от Дюнкерка до Барселоны, послужившем основанием для установления метрической системы мер. Д. вычислил таблицы видимых движений Солнца, больших планет и спутников Юпитера. Усовершенствовал методы астрономических вычислений. Написал 6-томную историю астрономии)</p>
        <p className="western" lang="ru-RU" align="JUSTIFY"> При решении засечки по формулам Деламбра нумерация исходных пунктов, а также углов должна производиться по часовой стрелке, при этом для нумерации углов должно быть выбрано начальное направление.</p>
        <p className="western" lang="ru-RU" align="JUSTIFY">На рис. 5.1 показана схема обратной однократной засечки применительно к формулам Деламбра. В качестве исходных здесь используются три пункта триангуляции
          <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_4d87495e.gif" width="26" height="21" name="Object1" align="ABSMIDDLE"/>,
          <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_97187892.gif" width="26" height="21" name="Object2" align="ABSMIDDLE"/>
          и
          <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_fa31fe7a.gif" width="26" height="21" name="Object3" align="ABSMIDDLE"/>. Пункт
          <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_895bcfb0.gif" width="21" height="18" name="Object4" align="ABSMIDDLE"/>
          – определяемый. Направление
          <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_bbd3c76a.gif" width="37" height="21" name="Object5" align="ABSMIDDLE"/>
          выбрано за начальное и от этого направления на пункте
          <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_895bcfb0.gif" width="21" height="18" name="Object6" align="ABSMIDDLE"/>
          измерены углы
          <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_f853fb8e.gif" width="25" height="21" name="Object7" align="ABSMIDDLE"/>
          и
          <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_d6db8aa9.gif" width="26" height="21" name="Object8" align="ABSMIDDLE"/>
          до направлений на пункты
          <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_97187892.gif" width="26" height="21" name="Object9" align="ABSMIDDLE"/>
          и
          <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_fa31fe7a.gif" width="26" height="21" name="Object10" align="ABSMIDDLE"/>.</p>

        <table width="638" cellspacing="0" cellpadding="7">
          <colgroup><col width="624"/></colgroup>
          <tbody>
            <tr>
              <td valign="TOP" width="624">
                <p className="western" lang="ru-RU" align="CENTER"><img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_f97549ab.jpg" width="267" height="279" name="graphics1" align="BOTTOM" border="0"/></p>
              </td>
            </tr>
            <tr>
              <td valign="TOP" width="624">
                <p className="western" lang="ru-RU" align="CENTER">Рисунок 5.1 – Схема обратной однократной угловой засечки</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="western" lang="ru-RU" align="JUSTIFY">Для решения задачи первоначально по формуле Деламбра (формула дается без вывода) определяют дирекционный угол начального направления <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_bbd3c76a.gif" width="37" height="21" name="Object11" align="ABSMIDDLE"/>, принятого за начальное:</p>
        <p className="western" lang="ru-RU" align="JUSTIFY"><img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_6578ce5.gif" width="378" height="45" name="Object12" align="ABSMIDDLE"/> (5.1)</p>
        <p className="western" lang="ru-RU" align="JUSTIFY">После определения дирекционного угла направления <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_bbd3c76a.gif" width="37" height="21" name="Object13" align="ABSMIDDLE"/> вычисляют дирекционные углы направлений <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_554f10ea.gif" width="37" height="21" name="Object14" align="ABSMIDDLE"/> и <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_a8746df4.gif" width="37" height="21" name="Object15" align="ABSMIDDLE"/> по формулам:</p>
        <p className="western" lang="ru-RU" align="JUSTIFY"><img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_4ce98948.gif" width="83" height="21" name="Object16" align="ABSMIDDLE"/>(5.2)</p>
        <p className="western" lang="ru-RU" align="JUSTIFY"><img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_3e14a5f6.gif" width="83" height="21" name="Object17" align="ABSMIDDLE"/>(5.3)</p>
        <p className="western" lang="ru-RU" align="JUSTIFY">В итоге получим прямую угловую засечку с известными дирекционными углами направлений с определяемого пункта <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_895bcfb0.gif" width="21" height="18" name="Object18" align="ABSMIDDLE"/> на исходные. В этом случае для определения координат <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_c713e2cd.gif" width="26" height="21" name="Object19" align="ABSMIDDLE"/>, <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_efbfb40d.gif" width="27" height="21" name="Object20" align="ABSMIDDLE"/> <i></i>пункта <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_895bcfb0.gif" width="21" height="18" name="Object21" align="ABSMIDDLE"/> достаточно использовать формулы Гаусса, выраженные через приращения координат исходных пунктов, а именно:</p>
        <p className="western" lang="ru-RU" align="JUSTIFY"><img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_6d54558d.gif" width="252" height="45" name="Object22" align="ABSMIDDLE"/>(5.4)</p>
        <p className="western" lang="ru-RU" align="JUSTIFY"><img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_892a72de.gif" width="252" height="45" name="Object23" align="ABSMIDDLE"/>(5.5)</p>
        <p className="western" lang="ru-RU" align="JUSTIFY"><img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_c65fd537.gif" width="318" height="21" name="Object24" align="ABSMIDDLE"/> <sub>(5.6)</sub> </p>
        <p className="western" lang="ru-RU" align="JUSTIFY"><img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_c65fd537.gif" width="318" height="21" name="Object25" align="ABSMIDDLE"/> (5.7)</p>
        <p className="western" lang="ru-RU" align="JUSTIFY">Координаты определяемого пункта <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_895bcfb0.gif" width="21" height="18" name="Object26" align="ABSMIDDLE"/> вычисляют дважды, что позволяет контролировать процесс вычисления. Кроме того, повторно вычисляют дирекционный угол <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_9af4219e.gif" width="24" height="21" name="Object27" align="ABSMIDDLE"/> по формуле:</p>
        <p className="western" lang="ru-RU" align="JUSTIFY"><img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_eb9752c5.gif" width="97" height="45" name="Object28" align="ABSMIDDLE"/>(5.8)</p>
        <p className="western" lang="ru-RU" align="JUSTIFY">Следует иметь в виду, что вычисленное по формуле (5.8) значение <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_9af4219e.gif" width="24" height="21" name="Object29" align="ABSMIDDLE"/> может отличаться от значения угла <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_9af4219e.gif" width="24" height="21" name="Object30" align="ABSMIDDLE"/>, вычисленного по формуле (5.2), на <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_f1c50437.gif" width="42" height="18" name="Object31" align="ABSMIDDLE"/>, так как знаки числителя и знаменателя в формуле (5.1) не определяют знаки приращений координат <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_c7f75646.gif" width="28" height="18" name="Object32" align="ABSMIDDLE"/> и <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_c7f75646.gif" width="28" height="18" name="Object33" align="ABSMIDDLE"/>. Для контроля вычисленного значения <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_9af4219e.gif" width="24" height="21" name="Object34" align="ABSMIDDLE"/> следует определить знаки и четверти по карте, на которой составлен проект вставки пунктов обратными засечками.</p>
        <p classname="western" lang="ru-ru" align="justify">следует также иметь в виду, что обратная угловая засечка по трем исходным пунктам не имеет решения, если определяемый пункт располагается на одной с исходными пунктами окружности, которую в этом случае называют «опасной» (рис.5.2). доказано, что удаление определяемого пункта от «опасной» окружности на <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_eb07a222.gif" width="48" height="18" name="object35" align="absmiddle"/>, обеспечивает надежное определение планового положения искомого пункта, где <img src="http://greleon.ru/geod/geod43/i_e87aa4a7031ef2a3_html_62f2fd40.gif" width="20" height="18" name="object36" align="absmiddle"/> <i></i>– радиус окружности.</p>
        <p className="western" lang="ru-RU" align="JUSTIFY">При составлении на карте или плане схемы обратной засечки вставляемого пункта, очевидно, что если определяемый пункт находится внутри треугольника, в вершинах которого расположены исходные пункты, речи об «опасной» окружности быть не может.</p>
        <p className="western" lang="ru-RU" align="JUSTIFY">В остальных случаях следует на карте или плане по правилам геометрии построить окружность, проходящую через три пункта, принимаемых за исходные. Тогда легко визуально определить область попадания определяемого пункта в «опасную» полосу.</p>
      </div>

      <br/>
    <center><a href="#pruglod" className="collapser btn btn-info">Прямая угловая засечка</a></center>
      <div className="collapsable" id="pruglod">
        <p ></p>
        <p >Для того, чтобы научиться выполнять элементарные геодезические работы, требуется освоить основные способы разбивки на местности.</p>
        <p>Там, где разбивка точек невозможна из-за их недоступности, а также значительном расстоянии от исходных пунктов, применяется
          <u>прямая угловая засечка<strong></strong>
          </u>(также существует обратная и линейная засечки). Что представляет собой этот способ, узнаем ниже.</p>
        <p ></p>
        <p ></p>
        <p >
          <img className="alignnone" title="clip_image002" src="http://bezuglyy.com/wp-content/uploads/2016/05/clip_image002_thumb.jpg" alt="clip_image002" width="172" height="226" border="0"/>
        </p>
        <p >Рисунок 1.</p>
        <p >На рис.1 представлена схема прямой однократной засечки (бывают многократные). Здесь
          <strong>
            <em>А
            </em>
          </strong>и<strong>
            <em>
              В</em>
          </strong>
          – исходные, с прямой видимостью, а точка
          <b>
            <i>Р
            </i>
          </b>– определяемая. Внутренние углы полученного треугольника
          <strong>
            <em>А
            </em>
          </strong>и
          <strong>
            <em>В</em>
          </strong>
          измерены. Исходные координаты обозначаем, как
          <b>
            <i>Ха, Уа, Хв, Ув</i>
          </b>, определяемая точка
          <b>
            <i>Р</i>
          </b>, соответственно,
          <b>
            <i>Хр, Ур</i>
          </b>.</p>

        Координаты искомой точки можно определить по формулам Юнга:

        <img src="http://kadastrua.ru/images/17/image020.gif" alt="формула Юнга" width="284" height="120" border="0"/>
        (14) Если мы используем внутренние углы β1, β2, βІ. В случае использования при вычислении дирекционных углов направлений с исходных пунктов на искомую точку применяются формулы Гаусса (формулы тангенсов): (15)
        <img src="http://kadastrua.ru/images/17/image021.gif" alt="формула гауса" width="400" height="100" border="0"/>

        Если α близко к 90° и 270° применяются формулы котангенсов:

        <img src="http://kadastrua.ru/images/17/image022.gif" alt="формула котангенсов" width="419" height="100" border="0"/>
        (16) СКП планового положения определяемой точки рассчитывается по формуле:

        <img src="http://kadastrua.ru/images/17/image023.gif" width="205" height="86" border="0"/>
        (17), где γ – угол засечки
      </div>

      <br/>
    <center><a href="#obruglzas" className="collapser btn btn-info">Обратная угловая засечка</a></center>
      <div className="collapsable" id="obruglzas">
        <p align="justify">Обратная угловая засечка – это задача по определению координат четвертого пункта (Р<sub>2</sub>) по координатам трех исходных пунктов (ст.1, ст.2 и ст.3) и двум горизонтальным углам, измеренным при определяемом пункте (<img src="https://studfiles.net/html/2706/91/html_BDP5zpUWYn.mLTt/img-FpNVfQ.png" width="22" height="21" name="Object280" align="absmiddle"/>и<img src="https://studfiles.net/html/2706/91/html_BDP5zpUWYn.mLTt/img-_dIblh.png" width="23" height="21" name="Object281" align="absmiddle"/>) (рис. 2.3).</p>
        <img src="https://studfiles.net/html/2706/91/html_BDP5zpUWYn.mLTt/img-ThSn3E.png" width="455" height="348" name="Image5" align="bottom" border="0"/>
        <p align="justify">Линейная засечка – это задача по определению координат пикета (Скважина) по координатам двух исходных пунктов (ст.1, Р<sub>2</sub>) и двум расстояниям от определяемого пункта до исходного (<img src="https://studfiles.net/html/2706/91/html_BDP5zpUWYn.mLTt/img-mnXHx2.png" width="24" height="21" name="Object387" align="absmiddle"/>и<img src="https://studfiles.net/html/2706/91/html_BDP5zpUWYn.mLTt/img-aJOY10.png" width="24" height="21" name="Object388" align="absmiddle"/>) (рис. 2.4). Для контроля определения пикета Скважина, от третьего исходного пункта (ст.2) было измерено расстояние<img src="https://studfiles.net/html/2706/91/html_BDP5zpUWYn.mLTt/img-owDUjo.png" width="24" height="21" name="Object389" align="absmiddle"/>.</p>
        <img src="https://studfiles.net/html/2706/91/html_BDP5zpUWYn.mLTt/img-tp3Fx0.png" width="451" height="523" name="Image6" align="bottom" border="0"/>
      </div>

    </div>);
  };

}
