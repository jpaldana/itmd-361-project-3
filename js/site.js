/* eslint-disable */
/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-flexboxlegacy-setclasses !*/
!function(e,n,t){function r(e){var n=w.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?w.className.baseVal=n:w.className=n)}function o(e,n){return typeof e===n}function s(){var e,n,t,r,s,i,l;for(var a in x)if(x.hasOwnProperty(a)){if(e=[],n=x[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?Modernizr[l[0]]=r:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=r),C.push((r?"":"no-")+l.join("-"))}}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return!!~(""+e).indexOf(n)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?f(r,t||n):r);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function p(){var e=n.body;return e||(e=i(_?"svg":"body"),e.fake=!0),e}function m(e,t,r,o){var s,l,a,f,u="modernizr",c=i("div"),d=p();if(parseInt(r,10))for(;r--;)a=i("div"),a.id=o?o[r]:u+(r+1),c.appendChild(a);return s=i("style"),s.type="text/css",s.id="s"+u,(d.fake?d:c).appendChild(s),d.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",f=w.style.overflow,w.style.overflow="hidden",w.appendChild(d)),l=t(c,e),d.fake?(d.parentNode.removeChild(d),w.style.overflow=f,w.offsetHeight):c.parentNode.removeChild(c),!!l}function y(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+c(n[o])+":"+r+")");return s=s.join(" or "),m("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return t}function v(e,n,r,s){function f(){c&&(delete N.style,delete N.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var u=y(e,r);if(!o(u,"undefined"))return u}for(var c,d,p,m,v,g=["modernizr","tspan","samp"];!N.style&&g.length;)c=!0,N.modElem=i(g.shift()),N.style=N.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],v=N.style[m],l(m,"-")&&(m=a(m)),N.style[m]!==t){if(s||o(r,"undefined"))return f(),"pfx"==n?m:!0;try{N.style[m]=r}catch(h){}if(N.style[m]!=v)return f(),"pfx"==n?m:!0}return f(),!1}function g(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+P.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?v(l,n,r,s):(l=(e+" "+z.join(i+" ")+i).split(" "),u(l,n,t))}function h(e,n,r){return g(e,t,t,n,r)}var C=[],x=[],S={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){x.push({name:e,fn:n,options:t})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var w=n.documentElement,_="svg"===w.nodeName.toLowerCase(),b="Moz O ms Webkit",P=S._config.usePrefixes?b.split(" "):[];S._cssomPrefixes=P;var z=S._config.usePrefixes?b.toLowerCase().split(" "):[];S._domPrefixes=z;var E={elem:i("modernizr")};Modernizr._q.push(function(){delete E.elem});var N={style:E.elem.style};Modernizr._q.unshift(function(){delete N.style}),S.testAllProps=g,S.testAllProps=h,Modernizr.addTest("flexbox",h("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",h("boxDirection","reverse",!0)),s(),r(C),delete S.addTest,delete S.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);
/* eslint-enable */

$.noConflict();

(function($) {

  $(document).ready(function() {
    /* add dynamic scroll-to-top button on the bottom right of the page */
    var button = $('<button>')
      .attr('id', 'btn-scrolltop')
      .addClass('el-hidden');

    $(button).on('click', function() {
      $('html, body').animate({
        scrollTop: 0
      }, 750);
    });

    $(window).on('scroll', function() {
      var distance = $(this).scrollTop();
      if (distance >= 700) {
        $(button).removeClass('el-hidden');
      }
      else {
        $(button).addClass('el-hidden')
      }
    });

    /* add click event handlers for images */
    var modal = $('<aside>')
      .attr('id', 'modal-image')
      .addClass('el-hidden');
    modal.append("<figure><img src='#' alt='Placeholder' /><figcaption></figcaption></figure>");
    
    $(modal).on('click', function() {
      $(this).addClass('el-hidden');
    });

    $('img').on('click', function() {
      var src = $(this).attr('data-src');
      var caption = $(this).parent().children('figcaption').text();
      modalImage(src, caption);
    });

    function modalImage(src, caption) {
      $('#modal-image img').attr('src', src)
        .attr('alt', 'Modal image of ' + src);
      $('#modal-image figcaption').text(caption);
      $(modal).removeClass('el-hidden');
    }

    $('body').append(button)
      .append(modal);
  });

})(jQuery);
