import{k as I,L as U,N as F,a as m,l as M,s as N,d as P,y as p,e as E,w as u,n,u as t,S as L,o as w,h as e,ac as G,ad as o,P as l,f as c,ab as A,aj as B,ai as S,af as C,j as V,g as H,v as R,ae as J}from"./index.4f28c451.js";import{Q as z}from"./QInput.406e0e67.js";import{a as Q,Q as T}from"./QCard.33a184de.js";import{Q as K}from"./QPage.2432808d.js";import{G as j}from"./GetSuffix.07bc2bf5.js";import"./format.801e7424.js";const O={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},k={xs:2,sm:4,md:8,lg:16,xl:24};var D=I({name:"QSeparator",props:{...U,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(s){const v=N(),x=F(s,v.proxy.$q),y=m(()=>s.vertical===!0?"vertical":"horizontal"),d=m(()=>` q-separator--${y.value}`),f=m(()=>s.inset!==!1?`${d.value}-${O[s.inset]}`:""),h=m(()=>`q-separator${d.value}${f.value}`+(s.color!==void 0?` bg-${s.color}`:"")+(x.value===!0?" q-separator--dark":"")),_=m(()=>{const r={};if(s.size!==void 0&&(r[s.vertical===!0?"width":"height"]=s.size),s.spaced!==!1){const $=s.spaced===!0?`${k.md}px`:s.spaced in k?`${k[s.spaced]}px`:s.spaced,g=s.vertical===!0?["Left","Right"]:["Top","Bottom"];r[`margin${g[0]}`]=r[`margin${g[1]}`]=$}return r});return()=>M("hr",{class:h.value,style:_.value,"aria-orientation":y.value})}});const W=["data-icon"],X={class:"flex justify-between mb-30"},Y={class:"fs-16"},Z=e("span",{class:"iconify fs-18","data-icon":"arcticons:xiaoyuan-search"},null,-1),ee={class:"flex flex-inline wp-70"},te={class:"ml-15"},ae={class:"wp-30 flex items-center text-light justify-end fs-17"},se={class:"flex justify-between mb-30"},ne={class:"fs-16"},ie=e("span",{class:"iconify fs-18","data-icon":"arcticons:xiaoyuan-search"},null,-1),le={class:"flex flex-inline wp-70"},oe={class:"fs-15"},ce={class:"ml-15"},re={class:"wp-30 flex items-center text-light justify-end fs-17"},pe=P({__name:"MainBalanceView",setup(s){const v=p(!0),x=p(""),y=p(""),d=p(!1),f=p(!1),h=[{name:"Mi tarjeta",user:"User crypto",type:"VISA",quantity:"4.565,00"},{name:"Mi tarjeta 2",user:"User crypto",type:"VISA",quantity:"1.565,00"}],_=[{acronym:"BTC",name:"Bitcoin",quantity:"0,00"},{acronym:"USDT",name:"Tether USDT",quantity:"1,00"},{acronym:"ETH",name:"Ethereum",quantity:"3.34,00"},{acronym:"BTC",name:"Bitcoin",quantity:"4.565,00"},{acronym:"BTC",name:"Bitcoin",quantity:"4.565,00"}],r=m(()=>L.lt.md),$=m(()=>"80.60"),g=()=>{v.value=!v.value};return(q,i)=>(w(),E(K,{class:n([{"q-py-md":t(r)},"hp-100"])},{default:u(()=>[e("div",{class:n({"mt-40 flex items-center q-px-lg":t(r)})},[G(o(q.$t("balance.totalBalance"))+" ",1),e("div",{onClick:g},[e("span",{class:"iconify fs-20 q-ml-sm cursor-pointer","data-icon":v.value?"codicon:eye":"codicon:eye-closed"},null,8,W)]),e("h4",{class:n(["q-mx-none q-mb-none text-light wp-100 q-mt-sm",{"text-nv-light":t(l).isActive,"text-nv-dark":!t(l).isActive}])},o(v.value?"$".concat(t($)):"****"),3)],2),c(D,{size:"0.3em",color:"nv-ultra-dark",class:"mt-30"}),e("div",{class:n({"mt-10 q-px-lg":t(r)})},[e("div",X,[e("span",Y,o(q.$t("balance.cards")),1),c(z,{class:n(["ultra-dense-input--dark",{"wp-35":!d.value,"wp-50":d.value}]),outlined:"",modelValue:x.value,"onUpdate:modelValue":i[0]||(i[0]=a=>x.value=a),onFocus:i[1]||(i[1]=a=>d.value=!0),onBlur:i[2]||(i[2]=a=>d.value=!1),color:"transparent",rounded:""},{prepend:u(()=>[Z]),_:1},8,["modelValue","class"])]),(w(),A(S,null,B(h,(a,b)=>c(T,{key:b,flat:"",class:n(["mb-10 br-20 py-5",`bg-nv-${t(j)("tertiary")}-opacity`])},{default:u(()=>[c(Q,{class:"flex flex-inline",style:{opacity:"1 !important"}},{default:u(()=>[e("div",ee,[c(C,{size:"3.9em",style:V(`background-color: ${t(l).isActive?"#717A8A":"#1d2229"};`)},{default:u(()=>[H(c(J,{size:"1.5em",name:"img:icons/visa.svg"},null,512),[[R,a.type==="VISA"]])]),_:2},1032,["style"]),e("div",te,[e("h5",{class:n(["no-margin text-medium fs-17",{"text-nv-light":t(l).isActive,"text-nv-dark":!t(l).isActive}])},o(a.name),3),e("p",{class:n([{"text-nv-light-tertiary":t(l).isActive,"text-nv-light-secondary":!t(l).isActive},"no-margin fs-13 q-mt-xs text-light"])},o(a.user),3)])]),e("div",ae," $ "+o(a.quantity),1)]),_:2},1024)]),_:2},1032,["class"])),64))],2),c(D,{size:"0.3em",color:"nv-ultra-dark",class:"mt-13"}),e("div",{class:n({"mt-10 q-px-lg":t(r)})},[e("div",se,[e("span",ne,o(q.$t("balance.wallets")),1),c(z,{class:n(["ultra-dense-input--dark",{"wp-35":!f.value,"wp-50":f.value}]),outlined:"",modelValue:y.value,"onUpdate:modelValue":i[3]||(i[3]=a=>y.value=a),onFocus:i[4]||(i[4]=a=>f.value=!0),onBlur:i[5]||(i[5]=a=>f.value=!1),color:"transparent",rounded:""},{prepend:u(()=>[ie]),_:1},8,["modelValue","class"])]),(w(),A(S,null,B(_,(a,b)=>c(T,{key:b,flat:"",class:n(["mb-10 br-20 py-5",`bg-nv-${t(j)("tertiary")}-opacity`])},{default:u(()=>[c(Q,{class:"flex flex-inline",style:{opacity:"1 !important"}},{default:u(()=>[e("div",le,[c(C,{size:"3.9em",style:V(`background-color: ${t(l).isActive?"#717A8A":"#1d2229"};`)},{default:u(()=>[e("span",oe,o(a.acronym),1)]),_:2},1032,["style"]),e("div",ce,[e("h5",{class:n(["no-margin text-medium fs-17",{"text-nv-light":t(l).isActive,"text-nv-dark":!t(l).isActive}])},o(a.acronym),3),e("p",{class:n([{"text-nv-light-tertiary":t(l).isActive,"text-nv-light-secondary":!t(l).isActive},"no-margin fs-13 q-mt-xs text-light"])},o(a.name),3)])]),e("div",re," $ "+o(a.quantity),1)]),_:2},1024)]),_:2},1032,["class"])),64))],2)]),_:1},8,["class"]))}});export{pe as default};
