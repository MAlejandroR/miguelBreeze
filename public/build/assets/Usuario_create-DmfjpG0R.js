import{W as i,j as a,y as c}from"./app-TCiHJzYn.js";import{L as d}from"./LayoutRoot-ZU7l2c-0.js";import{T as t,I as r}from"./TextInput-BflhvqCO.js";import{I as o}from"./InputLabel-CNvXuK1u.js";import{P as m}from"./PrimaryButton-BfeVG3MN.js";/* empty css            */import"./FooterLayout-B6Og-VIx.js";function v(){const l=()=>{c.get("/usuarios")},s=i({name:"",email:"",password:"",password_confirmation:""}),n=()=>{s.post("store")};return a.jsxs(d,{children:[a.jsx("h1",{class:" text-center text-3xl font-bold text-green-700",children:"Nuevo Usuario"}),a.jsx("div",{class:"flex flex-row items-center justify-center h-full p-8 bg-gray-500 containerReLog",children:a.jsxs("form",{class:" bg-white rounded p-8 m-8",method:"POST",action:"",onSubmit:e=>e.preventDefault(),children:[a.jsxs("div",{children:[a.jsx(o,{htmlFor:"name",value:"Name"}),a.jsx(t,{id:"name",name:"name",value:s.data.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:e=>s.setData("name",e.target.value)}),a.jsx(r,{message:s.errors.name,className:"mt-2"})]}),a.jsxs("div",{className:"mt-4",children:[a.jsx(o,{htmlFor:"email",value:"Email"}),a.jsx(t,{id:"email",type:"email",name:"email",value:s.data.email,className:"mt-1 block w-full",autoComplete:"username",onChange:e=>s.setData("email",e.target.value)}),a.jsx(r,{message:s.errors.email,className:"mt-2"})]}),a.jsxs("div",{className:"mt-4",children:[a.jsx(o,{htmlFor:"password",value:"Password"}),a.jsx(t,{id:"password",type:"password",name:"password",value:s.data.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:e=>s.setData("password",e.target.value)}),a.jsx(r,{message:s.errors.password,className:"mt-2"})]}),a.jsxs("div",{className:"mt-4",children:[a.jsx(o,{htmlFor:"password_confirmation",value:"Confirm Password"}),a.jsx(t,{id:"password_confirmation",type:"password",name:"password_confirmation",value:s.data.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:e=>s.setData("password_confirmation",e.target.value)}),a.jsx(r,{message:s.errors.password_confirmation,className:"mt-2"})]}),a.jsxs("div",{className:"flex items-center justify-center mt-4",children:[a.jsx(m,{onClick:()=>n,className:"ms-4",children:"Guardar"}),a.jsx(m,{onClick:l,className:"ms-4",children:"Cancelar"})]})]})})]})}export{v as default};
