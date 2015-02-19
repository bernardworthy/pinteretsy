function processHash(){var t=location.hash||"#";app.router.run(t.slice(1))}var app={router:Rlite()};app.EtsyApi=function(t){if(!t.apiKey)throw new Error("An API key is required!");var e="https://openapi.etsy.com/"+(t.apiVersion||"v2"),n={listings:function(){var n=e+"/listings/active.js?includes=MainImage&api_key="+t.apiKey+"&callback=?",r=$.Deferred(),o=$.getJSON(n).done(function(t){t.ok?r.resolve(t):r.reject(o,"Unknown error",t)});return r},shopByUserId:function(n){var r=e+"/users/"+n+"/shops.js?includes=MainImage&api_key="+t.apiKey+"&callback=?",o=$.Deferred(),i=$.getJSON(r).done(function(t){t.ok?o.resolve(t):o.reject(i,"Unknown error",t)});return o},listingsByShopId:function(n){var r=e+"/shops/"+n+"/listings/active.js?includes=MainImage&api_key="+t.apiKey+"&callback=?",o=$.Deferred(),i=$.getJSON(r).done(function(t){t.ok?o.resolve(t):o.reject(i,"Unknown error",t)});return o},userDetail:function(n){var r=e+"/users/"+n+"/profile.js?api_key="+t.apiKey+"&callback=?",o=$.Deferred(),i=$.getJSON(r).done(function(t){t.ok?o.resolve(t):o.reject(i,"Unknown error",t)});return o}};return n},function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var a=0,d=r.length;d>a;a++){var l=r.eq(a);if(t.append(l),n&&t.append(n),i(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,a,d,l){var s=!1,c="a table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script, .dotdotdot-keep";return e.contents().detach().each(function(){var f=this,p=t(f);if("undefined"==typeof f||3==f.nodeType&&0==t.trim(f.data).length)return!0;if(p.is(u))e.append(p);else{if(s)return!0;e.append(p),!l||p.is(d.after)||p.find(d.after).length||e[e.is(c)?"after":"append"](l),i(a,d)&&(s=3==f.nodeType?o(p,n,a,d,l):r(p,n,a,d,l),s||(p.detach(),s=!0)),s||l&&l.detach()}}),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var f=s(c),p=-1!==f.indexOf(" ")?" ":"　",h="letter"==o.wrap?"":p,g=f.split(h),v=-1,w=-1,m=0,y=g.length-1;for(o.fallbackToLetter&&0==m&&0==y&&(h="",g=f.split(h),y=g.length-1);y>=m&&(0!=m||0!=y);){var b=Math.floor((m+y)/2);if(b==w)break;w=b,l(c,g.slice(0,w+1).join(h)+o.ellipsis),i(r,o)?(y=w,o.fallbackToLetter&&0==m&&0==y&&(h="",g=g[0].split(h),v=-1,w=-1,m=0,y=g.length-1)):(v=w,m=w)}if(-1==v||1==g.length&&0==g[0].length){var x=e.parent();e.detach();var T=d&&d.closest(x).length?d.length:0;x.contents().length>T?c=u(x.contents().eq(-1-T),n):(c=u(x,n,!0),T||x.detach()),c&&(f=a(s(c),o),l(c,f),T&&d&&t(c).parent().append(d))}else f=a(g.slice(0,v+1).join(h),o),l(c,f);return!0}function i(t,e){return t.innerHeight()>e.maxHeight}function a(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,i=e&&e[0];if(i){if(!r){if(3===i.nodeType)return i;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(i);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function f(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function p(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var i=parseInt(t.css(n[r]),10);isNaN(i)&&(i=0),e-=i}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){e.preventDefault(),e.stopPropagation(),l.maxHeight="number"==typeof l.height?l.height:p(o),l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||d instanceof HTMLElement)&&(d=t("<div />").append(d).contents()),d instanceof t&&(a=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(a.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),i(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,a),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],a),a}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(a).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},100))})}else c=d(o),u=setInterval(function(){if(o.is(":visible")){var t=d(o);(c.width!=t.width||c.height!=t.height)&&(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var a=o.contents(),l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=f(l.after,o),s.isTruncated=!1,s.dotId=h++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(){};var h=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery),!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var a=0,d=r.length;d>a;a++){var l=r.eq(a);if(t.append(l),n&&t.append(n),i(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,a,d,l){var s=!1,c="a table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script, .dotdotdot-keep";return e.contents().detach().each(function(){var f=this,p=t(f);if("undefined"==typeof f||3==f.nodeType&&0==t.trim(f.data).length)return!0;if(p.is(u))e.append(p);else{if(s)return!0;e.append(p),!l||p.is(d.after)||p.find(d.after).length||e[e.is(c)?"after":"append"](l),i(a,d)&&(s=3==f.nodeType?o(p,n,a,d,l):r(p,n,a,d,l),s||(p.detach(),s=!0)),s||l&&l.detach()}}),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var f=s(c),p=-1!==f.indexOf(" ")?" ":"　",h="letter"==o.wrap?"":p,g=f.split(h),v=-1,w=-1,m=0,y=g.length-1;for(o.fallbackToLetter&&0==m&&0==y&&(h="",g=f.split(h),y=g.length-1);y>=m&&(0!=m||0!=y);){var b=Math.floor((m+y)/2);if(b==w)break;w=b,l(c,g.slice(0,w+1).join(h)+o.ellipsis),i(r,o)?(y=w,o.fallbackToLetter&&0==m&&0==y&&(h="",g=g[0].split(h),v=-1,w=-1,m=0,y=g.length-1)):(v=w,m=w)}if(-1==v||1==g.length&&0==g[0].length){var x=e.parent();e.detach();var T=d&&d.closest(x).length?d.length:0;x.contents().length>T?c=u(x.contents().eq(-1-T),n):(c=u(x,n,!0),T||x.detach()),c&&(f=a(s(c),o),l(c,f),T&&d&&t(c).parent().append(d))}else f=a(g.slice(0,v+1).join(h),o),l(c,f);return!0}function i(t,e){return t.innerHeight()>e.maxHeight}function a(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,i=e&&e[0];if(i){if(!r){if(3===i.nodeType)return i;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(i);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function f(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function p(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var i=parseInt(t.css(n[r]),10);isNaN(i)&&(i=0),e-=i}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){e.preventDefault(),e.stopPropagation(),l.maxHeight="number"==typeof l.height?l.height:p(o),l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||d instanceof HTMLElement)&&(d=t("<div />").append(d).contents()),d instanceof t&&(a=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(a.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),i(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,a),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],a),a}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(a).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},100))})}else c=d(o),u=setInterval(function(){if(o.is(":visible")){var t=d(o);(c.width!=t.width||c.height!=t.height)&&(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var a=o.contents(),l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=f(l.after,o),s.isTruncated=!1,s.dotId=h++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(){};var h=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery),app.router.add("",function(){app.api.listings().done(function(t){console.log(t);var e=_.template($("#listings").html(),{variable:"m"});$("#container").html(e({items:t.results}))}).fail(function(t,e,n){console.log(n)}),$(document).ready(function(){$(".text-content").dotdotdot()})}),app.router.add("users/:userid",function(t){app.api.userDetail(t.params.userid).done(function(t){console.log(t.results[0]);var e=_.template($("#profile").html(),{variable:"m"});$("#container").html(e({user:t.results[0]}))}).fail(function(t,e,n){console.log(n)}),app.api.shopByUserId(t.params.userid).done(function(t){console.log(t);var e=t.results[0].shop_id;app.api.listingsByShopId(e).done(function(t){var e=_.template($("#listings").html(),{variable:"m"});$("#profile-listings").html(e({items:t.results}))}).fail(function(t,e,n){console.log(n)})}).fail(function(t,e,n){console.log(n)}),$(document).scrollTop(0)}),app.api=app.EtsyApi({apiKey:"pq046kugg8nrx8f2mu71awb7"}),window.addEventListener("hashchange",processHash),processHash();
//# sourceMappingURL=app.js.map