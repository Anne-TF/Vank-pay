import{k as q,y as B,ax as E,ay as P,G as R,l as V,m as I,s as Q,U as F,K as k,q as K,az as O}from"./index.8762c6bb.js";import{b as j}from"./QInput.0aff5375.js";var G=q({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(n,{slots:S,emit:m}){const C=Q(),f=B(null);let i=0;const r=[];function v(e){const o=[],c=typeof e=="boolean"?e:n.noErrorFocus!==!0,h=++i,d=(s,t)=>{m("validation-"+(s===!0?"success":"error"),t)};for(let s=0;s<r.length;s++){const t=r[s],u=t.validate();if(typeof u.then=="function")o.push(u.then(a=>({valid:a,comp:t}),a=>({valid:!1,comp:t,err:a})));else if(u!==!0){if(n.greedy===!1)return d(!1,t),c===!0&&typeof t.focus=="function"&&t.focus(),Promise.resolve(!1);o.push({valid:!1,comp:t})}}return o.length===0?(d(!0),Promise.resolve(!0)):Promise.all(o).then(s=>{const t=s.filter(A=>A.valid!==!0);if(t.length===0)return h===i&&d(!0),!0;const{valid:u,comp:a,err:x}=t[0];return h===i&&(x!==void 0&&console.error(x),d(!1,a),c===!0&&u!==!0&&typeof a.focus=="function"&&a.focus()),!1})}function p(){i++,r.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function y(e){e!==void 0&&F(e);const o=i+1;v().then(c=>{o===i&&c===!0&&(n.onSubmit!==void 0?m("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function b(e){e!==void 0&&F(e),m("reset"),k(()=>{p(),n.autofocus===!0&&n.noResetFocus!==!0&&l()})}function l(){j(()=>{if(f.value===null)return;const e=f.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(f.value.querySelectorAll("[tabindex]"),o=>o.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}K(O,{bindComponent(e){r.push(e)},unbindComponent(e){const o=r.indexOf(e);o>-1&&r.splice(o,1)}});let g=!1;return E(()=>{g=!0}),P(()=>{g===!0&&n.autofocus===!0&&l()}),R(()=>{n.autofocus===!0&&l()}),Object.assign(C.proxy,{validate:v,resetValidation:p,submit:y,reset:b,focus:l,getValidationComponents:()=>r}),()=>V("form",{class:"q-form",ref:f,onSubmit:y,onReset:b},I(S.default))}});export{G as Q};
