// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("require ./chunks/_rollupPluginBabelHelpers ./config ./kernel ./core/Error ./core/has ./core/lang ./core/maybe ./core/promiseUtils ./core/urlUtils ./support/apiKeyUtils ./support/requestUtils".split(" "),function(P,v,B,n,C,z,W,X,y,l,Y,Z){function q(a,b){return D.apply(this,arguments)}function D(){D=v._asyncToGenerator(function*(a,b){var c,d=l.isDataProtocol(a);const e=l.isBlobProtocol(a);e||d||(a=l.normalize(a));const f={url:a,requestOptions:{...X.unwrap(b)}};let h=l.getInterceptor(a);if(h){a=
yield aa(h,f);if(null!=a)return{data:a,getHeader:E,requestOptions:f.requestOptions,url:f.url};h.after||h.error||(h=null)}a=f.url;b=f.requestOptions;if("image"===b.responseType){if(z("host-webworker")||z("host-node"))throw p("request:invalid-parameters",Error("responseType 'image' is not supported in Web Workers or Node environment"),f);}else if(d)throw p("request:invalid-parameters",Error("Data URLs are not supported for responseType \x3d "+b.responseType),f);if("head"===b.method){if(b.body)throw p("request:invalid-parameters",
Error("body parameter cannot be set when method is 'head'"),f);if(d||e)throw p("request:invalid-parameters",Error("data and blob URLs are not supported for method 'head'"),f);}yield ba();if(A)return A.execute(a,b);const k=new AbortController;y.onAbort(b,()=>k.abort());d=yield ca({controller:k,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:h,params:f,redoRequest:!1,useIdentity:t.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1});null==(c=h)?void 0:null==c.after?
void 0:c.after(d);return d});return D.apply(this,arguments)}function da(a){(a=l.getOrigin(a))&&!q._corsServers.includes(a)&&q._corsServers.push(a)}function Q(a){a=l.getOrigin(a);return!a||a.endsWith(".arcgis.com")||q._corsServers.includes(a)||l.isTrustedServer(a)}function p(a,b,c,d){let e="Error";const f={url:c.url,requestOptions:c.requestOptions,getHeader:E,ssl:!1};if(b instanceof C)return b.details?(b.details=W.clone(b.details),b.details.url=c.url,b.details.requestOptions=c.requestOptions):b.details=
f,b;if(b){c=d&&(g=>d.headers.get(g));const h=d&&d.status,k=b.message;k&&(e=k);c&&(f.getHeader=c);f.httpStatus=(null!=b.httpCode?b.httpCode:b.code)||h||0;f.subCode=b.subcode;f.messageCode=b.messageCode;f.messages="string"===typeof b.details?[b.details]:b.details;f.raw=F in b?b[F]:b}return y.isAbortError(b)?y.createAbortError():new C(a,e,f)}function ba(){return G.apply(this,arguments)}function G(){G=v._asyncToGenerator(function*(){z("host-webworker")?A||(A=yield new Promise((a,b)=>P(["./core/workers/request"],
a,b))):q._abortableFetch||(q._abortableFetch=globalThis.fetch.bind(globalThis))});return G.apply(this,arguments)}function H(){return I.apply(this,arguments)}function I(){I=v._asyncToGenerator(function*(){n.id||(yield new Promise((a,b)=>P(["./identity/IdentityManager"],c=>a(Object.freeze({__proto__:null,default:c})),b)))});return I.apply(this,arguments)}function ea(a){return J.apply(this,arguments)}function J(){J=v._asyncToGenerator(function*(a){const b=a.params.url,c=a.params.requestOptions,d=a.controller.signal,
e=c.body;let f=null,h=null,k=null;R&&"HTMLFormElement"in globalThis&&(e instanceof FormData?f=e:e instanceof HTMLFormElement&&(h=e,f=new FormData(h)));"string"===typeof e&&(k=e);a.fetchOptions={cache:c.cacheBust&&!q._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:c.headers||{},method:"head"===c.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:d};if(f||k)a.fetchOptions.body=f||k;"anonymous"===c.authMode&&(a.useIdentity=!1);a.hasToken=!!(/token=/i.test(b)||c.query&&
c.query.token||f&&f.get&&f.get("token")||h&&h.elements.token);!a.hasToken&&B.apiKey&&Y.supportsApiKey(b)&&(c.query||(c.query={}),c.query.token=B.apiKey,a.hasToken=!0);if(a.useIdentity&&!a.hasToken&&!a.credentialToken&&!S(b)&&!y.isAborted(d)){let g;"immediate"===c.authMode?(yield H(),g=yield n.id.getCredential(b,{signal:d}),a.credential=g):"no-prompt"===c.authMode?(yield H(),g=yield n.id.getCredential(b,{prompt:!1,signal:d}).catch(()=>{}),a.credential=g):n.id&&(g=n.id.findCredential(b));g&&(a.credentialToken=
g.token,a.useSSL=!!g.ssl)}});return J.apply(this,arguments)}function S(a){return fa.some(b=>b.test(a))}function ha(a){return K.apply(this,arguments)}function K(){K=v._asyncToGenerator(function*(a){let b=a.params.url;const c=a.params.requestOptions,d=a.fetchOptions,e=l.isBlobProtocol(b)||l.isDataProtocol(b),f=c.responseType||"json",h=e?0:null!=c.timeout?c.timeout:t.timeout;var k=!1;if(!e){a.useSSL&&(b=l.toHTTPS(b));c.cacheBust&&"default"===d.cache&&(b=l.addQueryParameter(b,"request.preventCache",Date.now()));
var g={...c.query};a.credentialToken&&(g.token=a.credentialToken);k=l.objectToQuery(g);z("esri-url-encodes-apostrophe")&&(k=k.replace(/'/g,"%27"));const u=b.length+1+k.length;k="delete"===c.method||"post"===c.method||"put"===c.method||!!c.body||u>t.maxUrlLength;const w=c.useProxy||!!l.getProxyRule(b);if(w){const L=l.getProxyUrl(b);var x=L.path;!k&&x.length+1+u>t.maxUrlLength&&(k=!0);L.query&&(g={...L.query,...g})}if("HEAD"===d.method&&(k||w)){if(k){if(u>t.maxUrlLength)throw p("request:invalid-parameters",
Error("URL exceeds maximum length"),a.params);throw p("request:invalid-parameters",Error("cannot use POST request when method is 'head'"),a.params);}if(w)throw p("request:invalid-parameters",Error("cannot use proxy when method is 'head'"),a.params);}k?(d.method="delete"===c.method?"DELETE":"put"===c.method?"PUT":"POST",c.body?b=l.addQueryParameters(b,g):(d.body=l.objectToQuery(g),d.headers["Content-Type"]="application/x-www-form-urlencoded")):b=l.addQueryParameters(b,g);w&&(a.useProxy=!0,b=`${x}?${b}`);
g.token&&R&&d.body instanceof FormData&&(x=d.body,x.set?x.set("token",g.token):x.append("token",g.token));c.hasOwnProperty("withCredentials")?a.withCredentials=c.withCredentials:l.hasSameOrigin(b,l.appUrl)||(l.isTrustedServer(b)?a.withCredentials=!0:n.id&&(g=n.id.findServerInfo(b))&&g.webTierAuth&&(a.withCredentials=!0));a.withCredentials&&(d.credentials="include")}g=0;let T=!1;0<h&&(g=setTimeout(()=>{T=!0;a.controller.abort()},h));let r,m;try{if("native-request-init"===c.responseType)m=d,m.url=b;
else if("image"!==c.responseType||"default"!==d.cache||"GET"!==d.method||k||ia(c.headers)||!e&&!a.useProxy&&t.proxyUrl&&!Q(b))if(r=yield q._abortableFetch(b,d),a.useProxy||da(b),"native"===c.responseType)m=r;else{if("HEAD"!==d.method)if(r.ok){switch(f){case "array-buffer":m=yield r.arrayBuffer();break;case "blob":case "image":m=yield r.blob();break;default:m=yield r.text()}g&&(clearTimeout(g),g=0);if("json"===f||"xml"===f||"document"===f)if(m)switch(f){case "json":m=JSON.parse(m);break;case "xml":m=
U(m,"application/xml");break;case "document":m=U(m,"text/html")}else m=null;if(m){if("array-buffer"===f||"blob"===f){const u=r.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(u)&&750>=m["blob"===f?"size":"byteLength"])try{const w=yield(new Response(m)).json();w.error&&(m=w)}catch{}}"image"===f&&m instanceof Blob&&(m=yield V(URL.createObjectURL(m),a,!0))}}else m=yield r.text()}else m=yield V(b,a)}catch(u){if("AbortError"===u.name){if(T)throw Error("Timeout exceeded");throw y.createAbortError("Request canceled");
}if(!r&&u instanceof TypeError&&t.proxyUrl&&!c.body&&"delete"!==c.method&&"head"!==c.method&&"post"!==c.method&&"put"!==c.method&&!a.useProxy&&!Q(b))a.redoRequest=!0,l.addProxyRule({proxyUrl:t.proxyUrl,urlPrefix:l.getOrigin(b)});else throw u;}finally{g&&clearTimeout(g)}return[r,m]});return K.apply(this,arguments)}function aa(a,b){return M.apply(this,arguments)}function M(){M=v._asyncToGenerator(function*(a,b){if(null!=a.responseData)return a.responseData;a.headers&&(b.requestOptions.headers={...b.requestOptions.headers,
...a.headers});a.query&&(b.requestOptions.query={...b.requestOptions.query,...a.query});if(a.before){let c,d;try{d=yield a.before(b)}catch(e){c=p("request:interceptor",e,b)}if(d instanceof Error||d instanceof C)c=p("request:interceptor",d,b);if(c)throw a.error&&a.error(c),c;return d}});return M.apply(this,arguments)}function ia(a){if(a)for(const b of Object.getOwnPropertyNames(a))if(a[b])return!0;return!1}function U(a,b){let c;try{c=(new DOMParser).parseFromString(a,b)}catch{}if(!c||c.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");
return c}function ca(a){return N.apply(this,arguments)}function N(){N=v._asyncToGenerator(function*(a){var b,c;yield ea(a);let d;try{do[d,e]=yield ha(a);while(!(yield ja(a,d,e)))}catch(h){var e=p("request:server",h,a.params,d);e.details.ssl=a.useSSL;a.interceptor&&a.interceptor.error&&a.interceptor.error(e);throw e;}const f=a.params.url;!/\/sharing\/rest\/(accounts|portals)\/self/i.test(f)||a.hasToken||a.credentialToken||null==(b=e)||null==(c=b.user)||!c.username||l.isTrustedServer(f)||(b=l.getOrigin(f,
!0))&&t.trustedServers.push(b);(b=a.credential)&&n.id&&(c=(c=n.id.findServerInfo(b.server))&&c.owningSystemUrl)&&(c=c.replace(/\/?$/,"/sharing"),(b=n.id.findCredential(c,b.userId))&&-1===n.id._getIdenticalSvcIdx(c,b)&&b.resources.unshift(c));return{data:e,getHeader:d?h=>d.headers.get(h):E,requestOptions:a.params.requestOptions,ssl:a.useSSL,url:a.params.url}});return N.apply(this,arguments)}function ja(a,b,c){return O.apply(this,arguments)}function O(){O=v._asyncToGenerator(function*(a,b,c){if(a.redoRequest)return a.redoRequest=
!1;const d=a.params.requestOptions;if(!b||"native"===d.responseType||"native-request-init"===d.responseType)return!0;let e;if(!b.ok)throw e=Error(`Unable to load ${b.url} status: ${b.status}`),e[F]=c,e;null!=c&&c.error&&(e=c.error);let f,h,k;e&&(f=Number(e.code),h=e.hasOwnProperty("subcode")?Number(e.subcode):null,k=(k=e.messageCode)&&k.toUpperCase());b=d.authMode;if(403===f&&(4===h||e.message&&-1<e.message.toLowerCase().indexOf("ssl")&&-1===e.message.toLowerCase().indexOf("permission"))){if(!a.useSSL)return a.useSSL=
!0,!1}else if(!a.hasToken&&a.useIdentity&&("no-prompt"!==b||498===f)&&-1!==ka.indexOf(f)&&!S(a.params.url)&&(403!==f||-1===la.indexOf(k)&&(null==h||2===h&&a.credentialToken))){yield H();try{const g=yield n.id.getCredential(a.params.url,{error:p("request:server",e,a.params),prompt:"no-prompt"!==b,signal:a.controller.signal,token:a.credentialToken});a.credential=g;a.credentialToken=g.token;a.useSSL=a.useSSL||g.ssl;return!1}catch(g){if("no-prompt"===b)return a.credential=null,a.credentialToken=null,
!1;e=g}}if(e)throw e;return!0});return O.apply(this,arguments)}function V(a,b,c=!1){const d=b.controller.signal,e=new Image;e.crossOrigin=b.withCredentials?"use-credentials":"anonymous";e.alt="";e.src=a;return Z.loadImageAsync(e,a,c,d)}let A;const t=B.request,R="FormData"in globalThis,ka=[499,498,403,401],la=["COM_0056","COM_0057","SB_0008"],fa=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],E=()=>null,F=Symbol();q._abortableFetch=null;q._corsServers=["https://server.arcgisonline.com",
"https://services.arcgisonline.com"];return q});