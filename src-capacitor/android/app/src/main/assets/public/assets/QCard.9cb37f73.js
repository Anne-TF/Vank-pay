import{k as t,a as o,l as s,m as d,L as c,N as l,s as i}from"./index.8762c6bb.js";var v=t({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:r}){const e=o(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>s(a.tag,{class:e.value},d(r.default))}}),f=t({name:"QCard",props:{...c,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const e=i(),n=l(a,e.proxy.$q),u=o(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>s(a.tag,{class:u.value},d(r.default))}});export{f as Q,v as a};
