import{j as h,r as T}from"./app-TCiHJzYn.js";const $t=({onChange:t})=>h.jsx("div",{className:" flex mb-5 w-full",children:h.jsxs("label",{className:"input input-bordered flex items-center gap-2 ml-auto",children:[h.jsx("input",{type:"text",className:"grow",placeholder:"Buscar...",onChange:t}),h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"w-4 h-4 opacity-70",children:h.jsx("path",{fillRule:"evenodd",d:"M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",clipRule:"evenodd"})})]})});function w(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function p(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const _=6048e5,Q=864e5;let B={};function W(){return B}function v(t,e){var s,l,f,m;const n=W(),r=(e==null?void 0:e.weekStartsOn)??((l=(s=e==null?void 0:e.locale)==null?void 0:s.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((m=(f=n.locale)==null?void 0:f.options)==null?void 0:m.weekStartsOn)??0,a=w(t),i=a.getDay(),u=(i<r?7:0)+i-r;return a.setDate(a.getDate()-u),a.setHours(0,0,0,0),a}function D(t){return v(t,{weekStartsOn:1})}function H(t){const e=w(t),n=e.getFullYear(),r=p(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=D(r),i=p(t,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const u=D(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}function j(t){const e=w(t);return e.setHours(0,0,0,0),e}function E(t){const e=w(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function X(t,e){const n=j(t),r=j(e),a=+n-E(n),i=+r-E(r);return Math.round((a-i)/Q)}function G(t){const e=H(t),n=p(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),D(n)}function A(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function V(t){if(!A(t)&&typeof t!="number")return!1;const e=w(t);return!isNaN(Number(e))}function I(t){const e=w(t),n=p(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const J={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},$=(t,e,n)=>{let r;const a=J[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Y(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const U={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Z={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},z={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},K={date:Y({formats:U,defaultWidth:"full"}),time:Y({formats:Z,defaultWidth:"full"}),dateTime:Y({formats:z,defaultWidth:"full"})},tt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},et=(t,e,n,r)=>tt[t];function O(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const u=t.defaultFormattingWidth||t.defaultWidth,s=n!=null&&n.width?String(n.width):u;a=t.formattingValues[s]||t.formattingValues[u]}else{const u=t.defaultWidth,s=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[s]||t.values[u]}const i=t.argumentCallback?t.argumentCallback(e):e;return a[i]}}const nt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},rt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},at={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},it={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ot={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},st={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ct=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ut={ordinalNumber:ct,era:O({values:nt,defaultWidth:"wide"}),quarter:O({values:rt,defaultWidth:"wide",argumentCallback:t=>t-1}),month:O({values:at,defaultWidth:"wide"}),day:O({values:it,defaultWidth:"wide"}),dayPeriod:O({values:ot,defaultWidth:"wide",formattingValues:st,defaultFormattingWidth:"wide"})};function k(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;const u=i[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(s)?ht(s,g=>g.test(u)):dt(s,g=>g.test(u));let f;f=t.valueCallback?t.valueCallback(l):l,f=n.valueCallback?n.valueCallback(f):f;const m=e.slice(u.length);return{value:f,rest:m}}}function dt(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function ht(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function lt(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],i=e.match(t.parsePattern);if(!i)return null;let u=t.valueCallback?t.valueCallback(i[0]):i[0];u=n.valueCallback?n.valueCallback(u):u;const s=e.slice(a.length);return{value:u,rest:s}}}const ft=/^(\d+)(th|st|nd|rd)?/i,mt=/\d+/i,gt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},wt={any:[/^b/i,/^(a|c)/i]},yt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},bt={any:[/1/i,/2/i,/3/i,/4/i]},xt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Pt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},pt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Mt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ot={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},kt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},vt={ordinalNumber:lt({matchPattern:ft,parsePattern:mt,valueCallback:t=>parseInt(t,10)}),era:k({matchPatterns:gt,defaultMatchWidth:"wide",parsePatterns:wt,defaultParseWidth:"any"}),quarter:k({matchPatterns:yt,defaultMatchWidth:"wide",parsePatterns:bt,defaultParseWidth:"any",valueCallback:t=>t+1}),month:k({matchPatterns:xt,defaultMatchWidth:"wide",parsePatterns:Pt,defaultParseWidth:"any"}),day:k({matchPatterns:pt,defaultMatchWidth:"wide",parsePatterns:Mt,defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:Ot,defaultMatchWidth:"any",parsePatterns:kt,defaultParseWidth:"any"})},Dt={code:"en-US",formatDistance:$,formatLong:K,formatRelative:et,localize:ut,match:vt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Wt(t){const e=w(t);return X(e,I(e))+1}function St(t){const e=w(t),n=+D(e)-+G(e);return Math.round(n/_)+1}function R(t,e){var m,g,b,x;const n=w(t),r=n.getFullYear(),a=W(),i=(e==null?void 0:e.firstWeekContainsDate)??((g=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((x=(b=a.locale)==null?void 0:b.options)==null?void 0:x.firstWeekContainsDate)??1,u=p(t,0);u.setFullYear(r+1,0,i),u.setHours(0,0,0,0);const s=v(u,e),l=p(t,0);l.setFullYear(r,0,i),l.setHours(0,0,0,0);const f=v(l,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function Tt(t,e){var s,l,f,m;const n=W(),r=(e==null?void 0:e.firstWeekContainsDate)??((l=(s=e==null?void 0:e.locale)==null?void 0:s.options)==null?void 0:l.firstWeekContainsDate)??n.firstWeekContainsDate??((m=(f=n.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,a=R(t,e),i=p(t,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),v(i,e)}function Yt(t,e){const n=w(t),r=+v(n,e)-+Tt(n,e);return Math.round(r/_)+1}function c(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const y={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return c(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):c(n+1,2)},d(t,e){return c(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return c(t.getHours()%12||12,e.length)},H(t,e){return c(t.getHours(),e.length)},m(t,e){return c(t.getMinutes(),e.length)},s(t,e){return c(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return c(a,e.length)}},M={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},C={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return y.y(t,e)},Y:function(t,e,n,r){const a=R(t,r),i=a>0?a:1-a;if(e==="YY"){const u=i%100;return c(u,2)}return e==="Yo"?n.ordinalNumber(i,{unit:"year"}):c(i,e.length)},R:function(t,e){const n=H(t);return c(n,e.length)},u:function(t,e){const n=t.getFullYear();return c(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return c(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return c(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return y.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return c(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=Yt(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):c(a,e.length)},I:function(t,e,n){const r=St(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):c(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):y.d(t,e)},D:function(t,e,n){const r=Wt(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):c(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return c(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return c(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return c(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=M.noon:r===0?a=M.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=M.evening:r>=12?a=M.afternoon:r>=4?a=M.morning:a=M.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return y.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):y.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):y.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):y.s(t,e)},S:function(t,e){return y.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return N(r);case"XXXX":case"XX":return P(r);case"XXXXX":case"XXX":default:return P(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return N(r);case"xxxx":case"xx":return P(r);case"xxxxx":case"xxx":default:return P(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+F(r,":");case"OOOO":default:return"GMT"+P(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+F(r,":");case"zzzz":default:return"GMT"+P(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return c(r,e.length)},T:function(t,e,n){const r=t.getTime();return c(r,e.length)}};function F(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),i=r%60;return i===0?n+String(a):n+String(a)+e+c(i,2)}function N(t,e){return t%60===0?(t>0?"-":"+")+c(Math.abs(t)/60,2):P(t,e)}function P(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=c(Math.trunc(r/60),2),i=c(r%60,2);return n+a+e+i}const q=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},L=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},jt=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return q(t,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",q(r,e)).replace("{{time}}",L(a,e))},Et={p:L,P:jt},Ct=/^D+$/,Ft=/^Y+$/,Nt=["D","DD","YY","YYYY"];function qt(t){return Ct.test(t)}function _t(t){return Ft.test(t)}function Ht(t,e,n){const r=Rt(t,e,n);if(console.warn(r),Nt.includes(t))throw new RangeError(r)}function Rt(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Lt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Qt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Bt=/^'([^]*?)'?$/,Xt=/''/g,Gt=/[a-zA-Z]/;function At(t,e,n){var m,g,b,x;const r=W(),a=r.locale??Dt,i=r.firstWeekContainsDate??((g=(m=r.locale)==null?void 0:m.options)==null?void 0:g.firstWeekContainsDate)??1,u=r.weekStartsOn??((x=(b=r.locale)==null?void 0:b.options)==null?void 0:x.weekStartsOn)??0,s=w(t);if(!V(s))throw new RangeError("Invalid time value");let l=e.match(Qt).map(o=>{const d=o[0];if(d==="p"||d==="P"){const S=Et[d];return S(o,a.formatLong)}return o}).join("").match(Lt).map(o=>{if(o==="''")return{isToken:!1,value:"'"};const d=o[0];if(d==="'")return{isToken:!1,value:Vt(o)};if(C[d])return{isToken:!0,value:o};if(d.match(Gt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+d+"`");return{isToken:!1,value:o}});a.localize.preprocessor&&(l=a.localize.preprocessor(s,l));const f={firstWeekContainsDate:i,weekStartsOn:u,locale:a};return l.map(o=>{if(!o.isToken)return o.value;const d=o.value;(_t(d)||qt(d))&&Ht(d,e,String(t));const S=C[d[0]];return S(s,d,a.localize,f)}).join("")}function Vt(t){const e=t.match(Bt);return e?e[1].replace(Xt,"'"):t}const It="https://image.tmdb.org/t/p/w500",Ut=({peliculas:t})=>{const[e,n]=T.useState(1),[r]=T.useState(10),a=e*r,i=a-r,u=t.slice(i,a),[s,l]=T.useState({key:"",direction:"ascending"}),f=[...u].sort((o,d)=>o[s.key]<d[s.key]?s.direction==="ascending"?-1:1:o[s.key]>d[s.key]?s.direction==="ascending"?1:-1:0),m=o=>{window.open("https://www.themoviedb.org/movie/"+o,"_blank")},g=o=>{let d="ascending";s.key===o&&s.direction==="ascending"&&(d="descending"),l({key:o,direction:d})},b=()=>{const o=[];for(let d=1;d<=Math.ceil(t.length/r);d++)o.push(d);return o.map(d=>h.jsx("button",{onClick:()=>x(d),children:d},d))},x=o=>{n(o)};return h.jsxs(h.Fragment,{children:[h.jsxs("table",{className:"table table-pin-rows table-pin-cols table-md border-8",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:h.jsxs("button",{onClick:()=>g("title"),children:["Poster",s.key==="title"?s.direction==="ascending"?" ↓":" ↑":"↑ ↓"]})}),h.jsx("th",{children:h.jsxs("button",{onClick:()=>g("release_date"),children:["Año",s.key==="release_date"?s.direction==="ascending"?" ↓":" ↑":"↑ ↓"]})}),h.jsx("th",{children:"Resumen"})]})}),h.jsx("tbody",{children:f.map(o=>h.jsxs("tr",{children:[h.jsxs("td",{children:[h.jsx("img",{src:`${It}${o.poster_path}`,alt:o.title}),o.title]}),h.jsx("td",{children:o.release_date?At(new Date(o.release_date),"yyyy"):"Fecha no disponible"}),h.jsxs("td",{children:[o.overview?o.overview:"Resumen no disponible",h.jsx("br",{}),h.jsx("button",{className:"btn border-t-neutral-50 p-1 bg-green-300 my-3",onClick:()=>m(o.id),children:"Más info"})]})]},o.id))})]}),h.jsx("div",{className:" flex flex-wrap w-1/2 my-0 mx-auto content-between justify-between pagination",children:b()})]})};export{$t as B,Ut as T};