import{d as y,n as b,r as V,H as i,o as x,q as k,h as o,v as r,t as C,A as q,I as L,i as l,k as R}from"./index-37f84258.js";import{u as U}from"./loading-dac50722.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const B={class:"login-form-wrapper"},D=y({__name:"login-form",setup(F){const p=R(),_=b(),{loading:c,setLoading:m}=U(),d=V(),s=i({username:"admin",password:"admin"}),f=i({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),g=async u=>{u&&await u.validate(async(e,a)=>{if(e){m(!0);try{await _.login(s),p.push({path:"/systemData/baseData"})}catch(t){m(!1),L.error(t.message)}}else console.log("error submit!",a)})};return(u,e)=>{const a=l("el-input"),t=l("el-form-item"),w=l("el-button"),v=l("el-form");return x(),k("div",B,[o(v,{ref_key:"formRef",ref:d,class:"login-form",model:s,rules:f,"label-width":"80px"},{default:r(()=>[o(t,{label:"用户名",prop:"username"},{default:r(()=>[o(a,{modelValue:s.username,"onUpdate:modelValue":e[0]||(e[0]=n=>s.username=n)},null,8,["modelValue"])]),_:1}),o(t,{label:"密码",prop:"password"},{default:r(()=>[o(a,{modelValue:s.password,"onUpdate:modelValue":e[1]||(e[1]=n=>s.password=n),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(t,null,{default:r(()=>[o(w,{type:"primary",loading:C(c),onClick:e[2]||(e[2]=n=>g(d.value))},{default:r(()=>[q(" login ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])])}}});const A=h(D,[["__scopeId","data-v-1c57ce54"]]);export{A as default};
