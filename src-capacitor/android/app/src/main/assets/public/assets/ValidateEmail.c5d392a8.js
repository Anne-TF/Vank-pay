import{d as q,a as f,y as V,e as h,w as u,n as a,u as e,S as i,o as w,h as o,f as c,ah as v,P as r,ad as n,ac as d}from"./index.4f28c451.js";import{Q as C}from"./QPage.2432808d.js";import{G as m}from"./GetSuffix.07bc2bf5.js";import{E as b,_ as y}from"./EncodeText.66f9b238.js";import"./QInput.406e0e67.js";import"./format.801e7424.js";const S={class:"q-px-md q-pt-lg"},T=q({__name:"ValidateEmail",setup(k){const t=f(()=>i.lt.md),g=f(()=>i.lt.sm),x=V(null),p=s=>{x.value=s};return(s,l)=>(w(),h(C,{class:a(["hp-100",{"bg-nv-dark":e(r).isActive,"bg-nv-light":!e(r).isActive,"flex column flex-center":!e(t)}])},{default:u(()=>[o("div",{class:a({"wp-30":e(i).lg,"wp-40":e(i).lt.lg&&!e(t)})},[o("div",{class:a({"flex justify-end q-pt-lg q-px-md":e(t),"wp-100 flex justify-end":!e(t)})},[c(v,{flat:"",rounded:"",size:"md",onClick:l[0]||(l[0]=$=>s.$router.push("/login")),icon:"cancel",class:"q-px-none"})],2),o("div",S,[o("h5",{class:a([{"fs-23":e(g),"text-white":e(r).isActive},"no-padding q-mb-xs q-mt-sm text-left"])},n(s.$t("codeValidation.twoFAValidation")),3),o("p",{class:a({"fs-12":e(t),"mt-25":e(t)})},[d(n(s.$t("codeValidation.theCode"))+" ",1),o("span",{class:a(`text-nv-${e(m)("accent")} q-mx-xs`)},n(s.$t("codeValidation.validation")),3),d(" "+n(s.$t("codeValidation.wasSend")),1)],2),o("p",{class:a([{"fs-14":e(t),"fs-16":!e(t)},"mt-40 q-mb-lg"])},[d(n(s.$t("codeValidation.sendTo"))+" ",1),o("span",{class:a(`text-nv-${e(m)("accent")} q-mx-xs`)},n(e(b)("qoripay@email.com","email")),3)],2),c(y,{onAddCode:p,onRemoveCode:p}),c(v,{color:`nv-${e(m)("primary")}`,class:"full-width br-20 py-12 mt-40 fs-16",unelevated:"","no-caps":"",onClick:l[1]||(l[1]=$=>s.$router.push("/login"))},{default:u(()=>[d(n(s.$t("buttons.continue")),1)]),_:1},8,["color"])])],2)]),_:1},8,["class"]))}});export{T as default};
