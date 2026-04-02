(function(){if(window.__lazraWidgetLoaded)return;window.__lazraWidgetLoaded=!0,window.__claireDemoIntent="dealer";function L(){return"dealer"}function R(){window.__claireDemoIntent="dealer"}function q(e){const t=(e||"").toLowerCase().trim().replace(/[’‘]/g,"'").replace(/\s+/g," ");return t==="i'm a dealer"||t==="i am a dealer"||t==="im a dealer"||t==="i\u2019m a dealer"?{intent:"dealer",reply:"Perfect. What store are you at, and what\u2019s the biggest leak right now: speed-to-lead, unworked leads, show rate, trade capture, service retention, or reputation?",quickReplies:["Speed-to-lead","Unworked leads","Trade capture","Service retention","Reputation","Pricing"]}:t==="i need help with my leads"||t.includes("help with my leads")||t.includes("my leads")?{intent:"dealer",reply:"Got it. What CRM are you on, and where are leads dying: slow response, no-shows, bad handoffs, or BDC overload?",quickReplies:["Slow response","No-shows","Bad handoffs","BDC overload","CRM integration"]}:null}var c=document.currentScript;if(!c){console.warn("[Lazra] widget.js could not find currentScript.");return}var s={apiUrl:c.getAttribute("data-api-url")||"",dealer:c.getAttribute("data-dealer")||"UNKNOWN_DEALER",brandColor:c.getAttribute("data-brand-color")||"#a855f7",position:c.getAttribute("data-position")||"bottom-right",widgetTitle:c.getAttribute("data-title")||"Claire, your concierge",widgetSubtitle:c.getAttribute("data-subtitle")||"Ask me anything about sales, service, or inventory.",avatarUrl:c.getAttribute("data-avatar-url")||"",enableQuickReplies:(c.getAttribute("data-quick-replies")||"true").toLowerCase()!=="false"};if(!s.apiUrl){console.warn("[Lazra] data-api-url is required on the widget script tag. Aborting.");return}s.dealer=String(s.dealer||"UNKNOWN_DEALER").trim().toUpperCase(),INTENT_KEY="lazra_claire_intent_"+s.dealer,R(window.__claireDemoIntent||L());function D(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=Math.random()*16|0,t=e==="x"?r:r&3|8;return t.toString(16)})}function z(){return Date.now?Date.now():new Date().getTime()}function m(){var e=window.__claireDemoIntent||L();return"lazra_claire_session_"+s.dealer+"_"+e}var O=30*60*1e3;function w(){return{sessionId:D(),messages:[],createdAt:new Date().toISOString(),lastActiveAt:z()}}function M(){try{var e=localStorage.getItem(m());if(!e){var r=w();return localStorage.setItem(m(),JSON.stringify(r)),r}var t=JSON.parse(e);if(!t||!t.sessionId){var a=w();return localStorage.setItem(m(),JSON.stringify(a)),a}var i=Number(t.lastActiveAt||0);if(i&&z()-i>O){var n=w();return localStorage.setItem(m(),JSON.stringify(n)),n}return t.messages=Array.isArray(t.messages)?t.messages:[],t.lastActiveAt=z(),localStorage.setItem(m(),JSON.stringify(t)),t}catch(l){return console.warn("[Lazra] Failed to load session; using in-memory only.",l),w()}}function b(e){try{e.lastActiveAt=z(),localStorage.setItem(m(),JSON.stringify(e))}catch(r){console.warn("[Lazra] Failed to persist session to localStorage.",r)}}var o=M();function T(){o=w(),b(o)}function P(){var e=Array.isArray(o.messages)?o.messages:[];e=e.filter(function(t){return t&&(t.role==="user"||t.role==="assistant")&&typeof t.content=="string"&&t.content.trim().length});var r=24;return e.length>r&&(e=e.slice(e.length-r)),e.map(function(t){return{role:t.role,content:t.content}})}function U(){if(!document.querySelector('style[data-lazra-widget-style="true"]')){var e=document.createElement("style");e.setAttribute("data-lazra-widget-style","true");var r=s.position==="bottom-left"?"auto":"24px",t=s.position==="bottom-left"?"24px":"auto";e.textContent=`
      .lazra-widget-container {
        position: fixed;
        bottom: 24px;
        right: ${r};
        left: ${t};
        z-index: 2147483000;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
        -webkit-text-size-adjust: 100%;
      }

      .lazra-widget-toggle {
        width: 64px;
        height: 64px;
        padding: 3px;
        border-radius: 999px;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 16px 34px rgba(0, 0, 0, 0.55);
        background: conic-gradient(
          from 180deg,
          #f5c96a 0%,
          #ffefb2 22%,
          ${s.brandColor} 58%,
          #7a3fff 85%,
          #f5c96a 100%
        );
        outline: none;
        overflow: visible;
        -webkit-tap-highlight-color: transparent;
      }

      .lazra-widget-toggle-inner {
        width: 100%;
        height: 100%;
        border-radius: 999px;
        background-color: #050014;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border: 2px solid rgba(10, 3, 25, 0.85);
        position: relative;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
      }

      .lazra-widget-toggle-inner::before {
        content: "";
        position: absolute;
        right: 3px;
        bottom: 3px;
        width: 11px;
        height: 11px;
        border-radius: 999px;
        background: #3ddc84;
        box-shadow: 0 0 8px rgba(61, 220, 132, 0.85);
        border: 2px solid rgba(10, 3, 25, 0.95);
      }

      .lazra-widget-toggle-icon { display: none; }

      .lazra-widget-window {
        position: fixed;
        bottom: 90px;
        right: ${r};
        left: ${t};
        width: min(380px, calc(100vw - 48px));
        max-height: 75vh;
        background:
          radial-gradient(circle at top left,
            rgba(155, 110, 255, 0.32),
            rgba(20, 10, 40, 0.92) 60%
          ),
          rgba(5, 2, 15, 0.98);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        border-radius: 22px;
        box-shadow:
          0 26px 60px rgba(0,0,0,0.85),
          inset 0 0 30px rgba(150, 100, 255, 0.18);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid rgba(255,255,255,0.06);
        transform: translateZ(0);
      }

      @media (max-width: 600px) {
        .lazra-widget-window {
          bottom: 80px;
          right: 16px;
          left: 16px;
          width: auto;
          max-height: 78vh;
          border-radius: 20px;
        }
        .lazra-widget-toggle {
          width: 58px;
          height: 58px;
          padding: 2.5px;
        }
      }

      .lazra-widget-header {
        padding: 12px 14px 10px 14px;
        display: flex;
        align-items: center;
        gap: 10px;
        border-bottom: 1px solid rgba(255,255,255,0.08);
        background: linear-gradient(90deg, #f5c96a 0%, #b85cff 45%, #7a3fff 100%);
        color: #0b0414;
      }

      .lazra-widget-avatar {
        width: 36px;
        height: 36px;
        border-radius: 999px;
        background: radial-gradient(circle at 0% 0%, #f5c96a, ${s.brandColor});
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #050014;
        font-weight: 700;
        overflow: hidden;
        background-size: cover;
        background-position: center;
      }

      .lazra-widget-header-text { flex: 1; }
      .lazra-widget-title { font-size: 13px; font-weight: 600; color: #120824; }
      .lazra-widget-subtitle { font-size: 11px; color: #2b143f; margin-top: 2px; }

      .lazra-widget-status {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 3px;
        font-size: 11px;
        color: #201330;
      }

      .lazra-widget-status-dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: #22c55e;
        box-shadow: 0 0 8px rgba(34, 197, 94, 0.8);
      }

      .lazra-widget-close {
        border: none;
        background: rgba(255,255,255,0.9);
        color: #1b1029;
        cursor: pointer;
        font-size: 16px;
        padding: 4px 8px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }

      .lazra-widget-messages {
        flex: 1;
        padding: 10px 12px 6px 12px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 6px;
        scroll-behavior: smooth;
        overscroll-behavior: contain;
        -webkit-overflow-scrolling: touch;
      }

      .lazra-msg-row { display: flex; width: 100%; }
      .lazra-msg-row.assistant { justify-content: flex-start; }
      .lazra-msg-row.user { justify-content: flex-end; }

      .lazra-msg-bubble {
        max-width: 78%;
        padding: 8px 11px;
        border-radius: 16px;
        font-size: 15px;
        line-height: 1.4;
        white-space: pre-wrap;
        word-wrap: break-word;
      }

      .lazra-msg-bubble.assistant {
        background: radial-gradient(circle at 0% 0%, rgba(245,201,106,0.15), rgba(40, 28, 80, 0.96));
        color: #f7f4ff;
        border-bottom-left-radius: 4px;
        border: 1px solid rgba(255,255,255,0.06);
      }

      .lazra-msg-bubble.user {
        background: #f7f4ff;
        color: #050014;
        border-bottom-right-radius: 4px;
        border: 1px solid rgba(10,0,25,0.1);
      }

      .lazra-widget-typing { font-size: 11px; color: #b5a9d8; padding: 0 12px 4px 12px; }
      .lazra-widget-error { font-size: 11px; color: #fda4af; padding: 0 12px 6px 12px; }

      .lazra-widget-footer {
        border-top: 1px solid rgba(255,255,255,0.08);
        padding: 8px 10px 9px 10px;
        display: flex;
        align-items: flex-end;
        gap: 8px;
        background: rgba(5,0,20,0.98);
      }

      /* iOS zoom fix: keep 16px */
      .lazra-widget-input {
        flex: 1;
        min-height: 32px;
        max-height: 80px;
        resize: none;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.15);
        background: rgba(12, 8, 35, 0.96);
        color: #f7f4ff;
        font-size: 16px;
        line-height: 1.3;
        padding: 7px 11px;
        outline: none;
      }

      .lazra-widget-input::placeholder { color: #77709b; }

      .lazra-widget-send {
        width: 36px;
        height: 36px;
        border-radius: 999px;
        border: none;
        background: linear-gradient(135deg, #f5c96a, #ffefb2);
        color: #3b2606;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        cursor: pointer;
        flex-shrink: 0;
        box-shadow: 0 6px 20px rgba(0,0,0,0.22);
      }

      .lazra-widget-send:disabled { opacity: 0.4; cursor: default; box-shadow: none; }


      .lazra-quick-reply {
        -webkit-tap-highlight-color: transparent;
        appearance: none;
        border: 1px solid rgba(255,255,255,0.14);
        background: rgba(12, 8, 35, 0.75);
        color: #f7f4ff;
        font-size: 12px;
        font-weight: 600;
        padding: 8px 12px;
        border-radius: 999px;
        cursor: pointer;
        line-height: 1;
        min-height: 34px;
        user-select: none;
        box-shadow: 0 6px 18px rgba(0,0,0,0.18);
        transition: transform 120ms ease, background 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
      }

      .lazra-quick-reply:hover {
        background: rgba(20, 12, 48, 0.85);
        border-color: rgba(255,255,255,0.22);
        transform: translateY(-1px);
      }

      .lazra-quick-reply:active {
        transform: translateY(1px);
      }

      .lazra-quick-reply:focus-visible {
        outline: none;
        box-shadow:
          0 6px 18px rgba(0,0,0,0.18),
          0 0 0 3px rgba(245,201,106,0.22);
        border-color: rgba(245,201,106,0.35);
      }

      .lazra-quick-replies {
        display: flex;
        gap: 8px;
        margin-top: 10px;
        flex-wrap: wrap;
      }

      .lazra-quick-reply.active,
      .lazra-quick-reply:disabled {
        background: linear-gradient(135deg, #f5c96a, ${s.brandColor});
        color: #0a0319;
        border-color: rgba(245,201,106,0.45);
        box-shadow: 0 6px 18px rgba(0,0,0,0.22);
        transform: none;
        cursor: default;
      }

    `,document.head.appendChild(e)}}function W(){var e=document.createElement("div");e.className="lazra-widget-container";var r=document.createElement("button");r.className="lazra-widget-toggle",r.setAttribute("aria-label","Open chat"),r.setAttribute("aria-expanded","false");var t=document.createElement("div");t.className="lazra-widget-toggle-inner",s.avatarUrl&&(t.style.backgroundImage="url("+s.avatarUrl+")");var a=document.createElement("span");a.className="lazra-widget-toggle-icon",a.textContent="\u{1F4AC}",t.appendChild(a),r.appendChild(t);var i=document.createElement("div");i.className="lazra-widget-window",i.style.display="none";var n=document.createElement("div");n.className="lazra-widget-header";var l=document.createElement("div");l.className="lazra-widget-avatar",s.avatarUrl?l.style.backgroundImage="url("+s.avatarUrl+")":l.textContent="C";var d=document.createElement("div");d.className="lazra-widget-header-text";var g=document.createElement("div");g.className="lazra-widget-title",g.textContent=s.widgetTitle;var f=document.createElement("div");f.className="lazra-widget-subtitle",f.textContent=s.widgetSubtitle,d.appendChild(g),d.appendChild(f);var p=document.createElement("div");p.className="lazra-widget-status";var k=document.createElement("div");k.className="lazra-widget-status-dot";var x=document.createElement("span");x.textContent="Online",p.appendChild(k),p.appendChild(x);var C=document.createElement("button");C.className="lazra-widget-close",C.innerHTML="&times;",n.appendChild(l),n.appendChild(d),n.appendChild(p),n.appendChild(C);var S=document.createElement("div");S.className="lazra-widget-messages";var v=document.createElement("div");v.className="lazra-widget-typing",v.style.display="none",v.textContent="Claire is typing\u2026";var E=document.createElement("div");E.className="lazra-widget-error",E.style.display="none";var _=document.createElement("div");_.className="lazra-widget-footer";var y=document.createElement("textarea");y.className="lazra-widget-input",y.setAttribute("rows","1"),y.setAttribute("placeholder","Ask about vehicles, service, pricing\u2026");var A=document.createElement("button");return A.className="lazra-widget-send",A.innerHTML="\u27A4",_.appendChild(y),_.appendChild(A),i.appendChild(n),i.appendChild(S),i.appendChild(v),i.appendChild(E),i.appendChild(_),e.appendChild(i),e.appendChild(r),document.body.appendChild(e),{toggle:r,window:i,messagesEl:S,typingEl:v,errorEl:E,input:y,send:A,closeBtn:C}}function u(e,r){e.innerHTML="";var t=Array.isArray(o.messages)?o.messages:[];if(t.length)t.forEach(function(l,d){var g=document.createElement("div");g.className="lazra-msg-row "+l.role;var f=document.createElement("div");if(f.className="lazra-msg-bubble "+(l.role==="assistant"?"assistant":"user"),f.textContent=l.content,g.appendChild(f),s.enableQuickReplies&&l.role==="assistant"&&Array.isArray(l.quickReplies)&&l.quickReplies.length){var p=document.createElement("div");p.className="lazra-quick-replies",p.setAttribute("data-msg-index",String(d)),l.quickReplies.slice(0,8).forEach(function(k){var x=document.createElement("button");x.type="button",x.className="lazra-quick-reply",x.textContent=k,p.appendChild(x)}),g.appendChild(p)}e.appendChild(g)});else{var a=document.createElement("div");a.className="lazra-msg-row assistant";var i=document.createElement("div");i.className="lazra-msg-bubble assistant";var n=document.createElement("div");n.textContent="What store are you at, and what are you trying to improve first: speed-to-lead, unworked leads, show rate, service retention, or reputation?",i.appendChild(n),a.appendChild(i),e.appendChild(a)}e.scrollTop=e.scrollHeight}var N=!1;function h(e,r){if(!(!r||!r.trim())&&!N){e.errorEl.style.display="none";var t=r.trim();o.messages=Array.isArray(o.messages)?o.messages:[],o.messages.push({role:"user",content:t}),b(o),u(e.messagesEl,e),e.input.value="",window.__clairePresetHint="",window.__clairePresetQuickReplies=[];var a="dealer",i={messages:P(),sessionId:o.sessionId,dealer:s.dealer,mode:"retail",metadata:{intent:a,page:window.location.href,userAgent:navigator.userAgent,referrer:document.referrer||"",presetHint:window.__clairePresetHint||"",presetQuickReplies:window.__clairePresetQuickReplies||[]}};e.send.disabled=!0,e.typingEl.style.display="block",N=!0,fetch(s.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then(function(n){return n.json().catch(function(){return{}}).then(function(l){if(!n.ok){var d=new Error("HTTP "+n.status);throw d.data=l,d}return l})}).then(function(n){var l=n&&typeof n.reply=="string"&&n.reply.trim()||"I\u2019m here \u2014 what\u2019s the best next step you want: demo, pricing, or integration?",d=Array.isArray(n.quickReplies)?n.quickReplies:[];o.messages.push({role:"assistant",content:l,quickReplies:s.enableQuickReplies?d:[]}),b(o),u(e.messagesEl,e)}).catch(function(n){console.error("[Lazra] Chat error:",n),o.messages.push({role:"assistant",content:"Something went wrong sending that. Try again \u2014 or type \u201Chuman\u201D and I\u2019ll loop in the team."}),b(o),u(e.messagesEl,e),e.errorEl.textContent="Something went wrong. Try again, or ask for a human.",e.errorEl.style.display="block"}).finally(function(){window.__clairePresetHint="",window.__clairePresetQuickReplies=[],e.typingEl.style.display="none",e.send.disabled=!1,N=!1,e.input&&typeof e.input.focus=="function"&&e.input.focus()})}}function I(){U();var e=W();u(e.messagesEl,e);function r(){e.window.style.display="flex",e.toggle.setAttribute("aria-expanded","true"),u(e.messagesEl,e),e.input&&typeof e.input.focus=="function"&&e.input.focus()}function t(){e.window.style.display="none",e.toggle.setAttribute("aria-expanded","false")}window.ClaireWidget=window.ClaireWidget||{},window.ClaireWidget.open=function(a){a=a||{},r(),typeof a.prefill=="string"&&(e.input.value=a.prefill),a.reset===!0&&(T(),u(e.messagesEl,e)),a.autosend&&setTimeout(function(){h(e,e.input.value)},50)},window.addEventListener("claire:open",function(a){try{window.ClaireWidget.open(a&&a.detail||{})}catch(i){}}),e.toggle.addEventListener("click",function(){var a=e.window.style.display!=="none";a?t():r()}),e.closeBtn.addEventListener("click",t),e.send.addEventListener("click",function(){h(e,e.input.value)}),e.input.addEventListener("keydown",function(a){if(a.key==="Enter"&&!a.shiftKey){var i=(e.input.value||"").trim();if(i==="/reset"){a.preventDefault(),T(),u(e.messagesEl,e),e.input.value="";return}a.preventDefault(),h(e,e.input.value)}}),e.input.addEventListener("input",function(){e.input.style.height="auto";var a=80;e.input.style.height=Math.min(a,e.input.scrollHeight)+"px"}),e.messagesEl.addEventListener("click",function(a){var i=a.target.closest(".lazra-quick-reply");if(i){var n=i.textContent.trim(),l=i.closest(".lazra-quick-replies");if(l){var d=parseInt(l.getAttribute("data-msg-index"),10);!isNaN(d)&&o.messages[d]&&(o.messages[d].quickReplies=[],b(o))}i.classList.add("active"),i.disabled=!0,n&&h(e,n)}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",I):I(),typeof window!="undefined"&&(window.__claire_routePreset=q,window.__claire_sendMessage=h,window.__claire_getSession=function(){return o},window.__claire_setSession=function(e){o=e,b(o)}),console.log("[Lazra] widget.js loaded (v2.0-dealer-only) SOURCE=WEBCHAT")})();
