import{r as c,j as e,V as A,R as F,A as B,C as V,X as me,T as M,D as U,c as O,P as xe,a as H,b as pe,d as I,e as ge,u as he,f as $,L as w,H as fe,S as ye,g as be,h as J,i as K,N as Q,k as je,l as W,E as ve,m as Y,n as Ne,o as we,p as _e,q as ke,s as P,t as _,v as Ce,w as Se,x as Te,J as b,y as ze,M as Ee,z as $e,B as De}from"./vendor-BZ5ifuXN.js";import{c as x,u as Re,a as G,h as E,g as X,b as Le,d as qe,e as Pe,f as Ae,s as Fe,i as Be,j as Ve,k as Me,v as Ue,l as Oe}from"./main-Ble11P7p.js";const He=xe,Z=c.forwardRef(({className:s,...r},l)=>e.jsx(A,{ref:l,className:x("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",s),...r}));Z.displayName=A.displayName;const Ie=O("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),ee=c.forwardRef(({className:s,variant:r,...l},t)=>e.jsx(F,{ref:t,className:x(Ie({variant:r}),s),...l}));ee.displayName=F.displayName;const Je=c.forwardRef(({className:s,...r},l)=>e.jsx(B,{ref:l,className:x("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",s),...r}));Je.displayName=B.displayName;const se=c.forwardRef(({className:s,...r},l)=>e.jsx(V,{ref:l,className:x("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",s),"toast-close":"",...r,children:e.jsx(me,{className:"h-4 w-4"})}));se.displayName=V.displayName;const te=c.forwardRef(({className:s,...r},l)=>e.jsx(M,{ref:l,className:x("text-sm font-semibold",s),...r}));te.displayName=M.displayName;const ae=c.forwardRef(({className:s,...r},l)=>e.jsx(U,{ref:l,className:x("text-sm opacity-90",s),...r}));ae.displayName=U.displayName;function Ze(){const{toasts:s}=Re();return e.jsxs(He,{children:[s.map(function({id:r,title:l,description:t,action:i,...n}){return e.jsxs(ee,{...n,children:[e.jsxs("div",{className:"grid gap-1",children:[l&&e.jsx(te,{children:l}),t&&e.jsx(ae,{children:t})]}),i,e.jsx(se,{})]},r)}),e.jsx(Z,{})]})}const es=({...s})=>{const{theme:r="system"}=H();return e.jsx(pe,{theme:r,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...s})},ss=ge,Ke=c.forwardRef(({className:s,sideOffset:r=4,...l},t)=>e.jsx(I,{ref:t,sideOffset:r,className:x("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...l}));Ke.displayName=I.displayName;const Qe=()=>{const s=he(),r=$(),{itemCount:l}=G();H();const t=n=>s.pathname===n,i=n=>o=>{o.preventDefault(),t(n)||(E(),r(n))};return e.jsx("nav",{className:"fixed bottom-0 left-0 right-0 z-50 bottom-nav-bar pb-4",children:e.jsxs("div",{className:"grid grid-cols-3 w-full max-w-md mx-auto h-24",children:[e.jsx(w,{to:"/",onClick:i("/"),className:x("flex items-center justify-center transition-all duration-200",t("/")?"text-telegram-button active":"text-telegram-hint"),"aria-current":t("/")?"page":void 0,children:e.jsx(fe,{size:32})}),e.jsx(w,{to:"/shop",onClick:i("/shop"),className:x("flex items-center justify-center relative transition-all duration-200",t("/shop")?"text-telegram-button active":"text-telegram-hint"),"aria-current":t("/shop")?"page":void 0,children:e.jsxs("div",{className:"relative",children:[e.jsx(ye,{size:32}),l>0&&e.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full badge",children:l})]})}),e.jsx(w,{to:"/calculator",onClick:i("/calculator"),className:x("flex items-center justify-center transition-all duration-200",t("/calculator")?"text-telegram-button active":"text-telegram-hint"),"aria-current":t("/calculator")?"page":void 0,children:e.jsx(be,{size:32})})]})})},ts=({children:s,className:r,fullHeight:l=!1})=>e.jsxs("div",{className:x("w-full pb-52 max-w-md mx-auto",l?"min-h-screen":"",r),style:{backgroundColor:"transparent"},children:[e.jsx("div",{className:"animate-fade-in",children:s}),e.jsx(Qe,{})]}),We=({emoji:s,username:r,size:l="md",className:t,randomize:i=!1})=>{const[n,o]=c.useState(s||"😊");c.useEffect(()=>{s?o(s):r?o(X(r,"avatar")):i&&o(Le())},[s,r,i]);const u={sm:"w-8 h-8 text-lg",md:"w-12 h-12 text-2xl",lg:"w-16 h-16 text-3xl"};return e.jsx("div",{className:x("flex items-center justify-center rounded-full bg-telegram-light animate-pulse-slow",u[l],t),children:e.jsx("span",{className:"animate-float",children:n})})},as=({user:s,emoji:r,size:l="md",className:t=""})=>{const n={sm:"w-8 h-8",md:"w-12 h-12",lg:"w-16 h-16"}[l];return s!=null&&s.photo_url?e.jsx("div",{className:`${n} rounded-full overflow-hidden ${t}`,children:e.jsx("img",{src:s.photo_url,alt:`${s.first_name}'s profile`,className:"w-full h-full object-cover",onError:o=>{console.error("Error loading profile image, falling back to emoji avatar"),o.currentTarget.style.display="none"}})}):e.jsx(We,{emoji:r,size:l,className:t})},rs=({size:s="md",className:r,fillColor:l="fill-telegram-blue"})=>{const t={sm:"w-6 h-6",md:"w-10 h-10",lg:"w-16 h-16"};return e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs("svg",{className:x("animate-spin",t[s],r),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:l,d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})},ls=({banners:s,className:r="",autoPlayInterval:l=5e3})=>{const t=$(),i=n=>{n.link&&(n.external?window.open(n.link,"_blank","noopener,noreferrer"):t(n.link))};return!s||s.length===0?null:e.jsx("div",{className:`banner-swiper-container w-full relative ${r}`,children:e.jsx(J,{modules:[K,Q,je,W,ve],spaceBetween:0,slidesPerView:1,pagination:{clickable:!0,type:"bullets",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},navigation:s.length>1,autoplay:{delay:l,disableOnInteraction:!1},loop:s.length>1,effect:"slide",className:"w-full aspect-[2.5/1]",children:s.map((n,o)=>e.jsx(Y,{className:"w-full h-full cursor-pointer",onClick:()=>i(n),children:e.jsx("div",{className:"w-full h-full bg-cover bg-center rounded-lg",style:{backgroundImage:`url(${n.image})`}})},o))})})},ns=()=>e.jsx("a",{href:"https://t.me/dd_helper",target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:"#FFFFFF",color:"#000000",borderRadius:"0.75rem",padding:"1rem",boxShadow:"0 1px 3px rgba(0,0,0,0.1)",transition:"all 0.3s ease",display:"flex",flexDirection:"column",justifyContent:"space-between"},className:"transform hover:-translate-y-1 hover:shadow-md",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontWeight:500,color:"#000000"},children:"DD MANAGER"}),e.jsx("p",{style:{fontSize:"0.75rem",color:"#666666"},children:"Поможет определиться с цветом и размером"})]}),e.jsx("div",{className:"flex justify-end mt-1",children:e.jsx(Ne,{size:20,style:{color:"#666666"}})})]})}),is=({product:s,className:r})=>{const l=$(),t=X(`${s.item_name}-${s.color_code}`,"product"),i=Array.isArray(s.sizes)?s.sizes.filter(d=>d.quantity>0).map(d=>d.size):[],n=s.photos&&s.photos.length>0,o=()=>{if(!n)return"";const d=s.photos.find(a=>a.photo_category==="front"&&a.photo_url);return d?d.photo_url:s.photos[0].photo_url},u=d=>{d.preventDefault(),qe("medium"),l(`/product/${s.sku}`)};return e.jsxs(w,{to:`/product/${s.sku}`,onClick:u,className:x("block bg-telegram-secondary-bg rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover-lift",r),children:[e.jsx("div",{className:"aspect-square bg-telegram-bg flex items-center justify-center",children:n?e.jsx("img",{src:o(),alt:s.item_name,className:"w-full h-full object-cover",onError:d=>{d.currentTarget.style.display="none",d.currentTarget.parentElement.innerHTML=`<span class="text-5xl animate-float">${t}</span>`}}):e.jsx("span",{className:"text-5xl animate-float",children:t})}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"flex justify-between items-start mb-1",children:[e.jsx("h3",{className:"font-medium text-telegram-text truncate",children:s.item_name}),s.brand&&e.jsx("span",{className:"text-xs text-telegram-hint bg-telegram-bg px-2 py-0.5 rounded-full",children:s.brand})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-sm text-telegram-hint",children:["Color: ",s.color_code]}),e.jsxs("span",{className:"font-medium text-telegram-button",children:["₽",typeof s.price_rub=="string"?parseFloat(s.price_rub).toLocaleString():s.price_rub.toLocaleString()]})]}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-1",children:[i.slice(0,3).map(d=>e.jsx("span",{className:"text-xs px-2 py-1 bg-telegram-bg text-telegram-text rounded-full",children:d},d)),i.length>3&&e.jsxs("span",{className:"text-xs px-2 py-1 bg-telegram-bg text-telegram-text rounded-full",children:["+",i.length-3]})]})]})]})},os=({availableSizes:s,selectedSize:r,onChange:l,className:t})=>{const i=n=>{l(n)};return e.jsxs("div",{className:x("w-full",t),children:[e.jsx("h3",{className:"text-sm font-medium text-telegram-text mb-2",children:"Выберите размер"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(n=>e.jsx("button",{className:x("px-4 py-2 rounded-full border transition-all duration-200",r===n?"border-telegram-button bg-telegram-button/10 text-telegram-button":"border-telegram-hint/30 bg-telegram-bg text-telegram-text hover:border-telegram-hint/50"),onClick:()=>i(n),children:n},n))})]})},ds=({photos:s,productName:r,fallbackEmoji:l="📦",className:t=""})=>{const[i,n]=c.useState(0),o=u=>{const d=u.currentTarget;if(d.style.display="none",d.parentElement){const a=document.createElement("div");a.className="w-full h-full flex items-center justify-center",a.innerHTML=`<span class="text-8xl animate-float">${l}</span>`,d.parentElement.appendChild(a)}};return!s||s.length===0?e.jsx("div",{className:`w-full aspect-square bg-telegram-bg flex items-center justify-center ${t}`,children:e.jsx("span",{className:"text-8xl animate-float",children:l})}):e.jsxs("div",{className:`photo-swiper-container w-full aspect-square bg-telegram-bg relative ${t}`,children:[e.jsx(J,{modules:[K,Q,W],spaceBetween:0,slidesPerView:1,pagination:{clickable:!0,type:"bullets",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},navigation:!0,onSlideChange:u=>{n(u.activeIndex)},className:"w-full h-full",children:s.map((u,d)=>e.jsx(Y,{className:"w-full h-full",children:e.jsx("img",{src:u,alt:`${r} - ${d+1}`,className:"w-full h-full object-cover",onError:o})},d))}),s.length>1&&e.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/40 rounded-full px-3 py-1 z-10",children:e.jsxs("span",{className:"text-white text-xs",children:[i+1," / ",s.length]})})]})},Ye=O("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function z({className:s,variant:r,...l}){return e.jsx("div",{className:x(Ye({variant:r}),s),...l})}const cs=({order:s})=>{const[r,l]=c.useState(!1),t={...s,delivery_type:s.delivery_type||"",delivery_price:s.delivery_price||"0",delivery_address:s.delivery_address||null,delivery_info:s.delivery_info||null,delivery_code:s.delivery_code||null,items:s.items.map(a=>({...a,id:typeof a.id=="number"?a.id:0,type:a.type||"stock",status:a.status||s.status||"",dewu_url:a.dewu_url||null,shipping_type:a.shipping_type||null,category_type:a.category_type||null,weight_category:a.weight_category||null,color_code:a.color_code||null,sku:a.sku||null,item_name:a.item_name||null,size:a.size||"",price_cny:a.price_cny||null,price_rub:a.price_rub||null,sale_price:a.sale_price||null,quantity:a.quantity||1}))},i=a=>{switch(a.toLowerCase()){case"delivered":case"доставлен":return"bg-green-500";case"awaiting manager":case"ожидает менеджера":return"bg-yellow-500";case"awaiting purchase":case"ожидает покупки":return"bg-blue-500";case"cancelled":case"отменён":return"bg-red-500";default:return"bg-gray-500"}},n=a=>{switch(a.toLowerCase()){case"delivered":return"Доставлен";case"awaiting manager":return"Ожидает менеджера";case"awaiting purchase":return"Ожидает покупки";case"cancelled":return"Отменён";default:return a}},o=a=>a?(typeof a=="string"?parseFloat(a):a).toLocaleString("ru-RU",{maximumFractionDigits:2}):"0",u=a=>new Date(a).toLocaleString("ru-RU",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),d=a=>a%10===1&&a%100!==11?"товар":[2,3,4].includes(a%10)&&![12,13,14].includes(a%100)?"товара":"товаров";return e.jsxs("div",{className:"bg-white dark:bg-sidebar-accent rounded-lg shadow-sm overflow-hidden",children:[e.jsx("div",{className:"p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-sidebar-primary/10 transition-colors",onClick:()=>l(!r),children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("h3",{className:"text-lg font-medium",children:["Заказ #",t.order_id]}),e.jsx(z,{className:`${i(t.status)} text-white`,children:n(t.status)})]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1",children:u(t.created_at)}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:[t.items.length," ",d(t.items.length)]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{className:"font-medium text-lg",children:["₽",o(t.final_price)]}),t.promocode&&e.jsx("p",{className:"text-sm text-telegram-blue",children:t.promocode.promocode_text}),e.jsx("button",{className:"mt-2 text-telegram-blue hover:text-telegram-dark transition-colors","aria-label":r?"Свернуть детали":"Развернуть детали",children:r?e.jsx(we,{size:20}):e.jsx(_e,{size:20})})]})]})}),r&&e.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800/50",children:e.jsxs("div",{className:"p-4 space-y-4",children:[t.items.map((a,g)=>e.jsx("div",{className:"border-b dark:border-gray-700 pb-3 last:border-0",children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap gap-2 mb-1",children:[e.jsx(z,{className:"bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",children:a.type==="stock"?"Сток":"Предзаказ"}),a.status&&e.jsx(z,{className:`${i(a.status)} text-white`,children:n(a.status)})]}),e.jsx("p",{className:"font-medium",children:a.item_name||(a.dewu_url?e.jsxs("a",{href:a.dewu_url,target:"_blank",rel:"noopener noreferrer",className:"text-telegram-blue hover:underline flex items-center",children:[a.dewu_url.substring(0,30),a.dewu_url.length>30?"...":"",e.jsx(ke,{size:14,className:"ml-1"})]}):"Товар")}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Размер: ",a.size," ",a.quantity>1&&`× ${a.quantity}`]}),a.type==="preorder"&&a.price_cny&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Цена (юани): ¥",o(a.price_cny)]}),a.sku&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Артикул: ",a.sku]}),a.shipping_type&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Тип доставки: ",a.shipping_type]}),a.category_type&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Категория: ",a.category_type]}),a.weight_category&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Вес: ",a.weight_category]}),a.color_code&&e.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("span",{children:"Цвет:"}),e.jsx("div",{className:"w-4 h-4 rounded-full border border-gray-300",style:{backgroundColor:a.color_code}})]})]}),e.jsx("div",{className:"text-right",children:e.jsxs("p",{className:"font-medium",children:["₽",o(a.price_rub)]})})]})},`item-${g}-${a.id}`)),e.jsxs("div",{className:"pt-3 border-t dark:border-gray-700",children:[e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:"Сумма товаров"}),e.jsxs("span",{children:["₽",o(t.subtotal)]})]}),t.delivery_code&&e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsxs("span",{className:"text-gray-600 dark:text-gray-400",children:["Доставка: ",t.delivery_code]}),e.jsx("span",{children:t.delivery_price==="0"?"Бесплатно":`₽${o(t.delivery_price)}`})]}),t.promocode&&e.jsxs("div",{className:"flex justify-between text-sm text-telegram-blue mb-1",children:[e.jsxs("span",{children:["Промокод: ",t.promocode.promocode_text,t.promocode.discount_percent&&t.promocode.discount_percent!=="null"&&` (-${t.promocode.discount_percent}%)`,t.promocode.discount_fixed&&` (-${t.promocode.discount_fixed}₽)`]}),e.jsxs("span",{children:["-₽",o(t.discount_amount)]})]}),t.discount_amount&&t.discount_amount!=="0"&&!t.promocode&&e.jsxs("div",{className:"flex justify-between text-sm text-telegram-blue mb-1",children:[e.jsx("span",{children:"Скидка"}),e.jsxs("span",{children:["-₽",o(t.discount_amount)]})]}),t.dd_coins_used&&t.dd_coins_used!=="0"&&e.jsxs("div",{className:"flex justify-between text-sm text-yellow-500 mb-1",children:[e.jsx("span",{children:"Использовано DD Коинов"}),e.jsxs("span",{children:["-₽",o(t.dd_coins_used)]})]}),t.prepay_amount&&t.prepay_amount!=="0"&&e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:"Предоплата"}),e.jsxs("span",{children:["₽",o(t.prepay_amount)]})]}),e.jsxs("div",{className:"flex justify-between font-medium text-base mt-2",children:[e.jsx("span",{children:"Итого"}),e.jsxs("span",{children:["₽",o(t.final_price)]})]})]})]})})]})},us=({className:s})=>{const[r,l]=c.useState(null),[t,i]=c.useState(!0),{data:n,refetch:o}=P({queryKey:["referralInfo"],queryFn:()=>Pe(),staleTime:60*1e3,retry:1,retryDelay:1e3}),{data:u,refetch:d}=P({queryKey:["referralStats"],queryFn:()=>Ae(),staleTime:60*1e3,retry:1,retryDelay:1e3});c.useEffect(()=>{(async()=>{i(!0),l(null);try{await Promise.all([o(),d()])}catch(N){console.error("Error loading referral data:",N),l("Failed to load referral information")}finally{i(!1)}})()},[o,d]);const a=async()=>{n&&await Fe(n)},g=async()=>{if(n)try{await navigator.clipboard.writeText(n.telegram_deep_link),b.success("Referral link copied to clipboard")}catch(f){console.error("Error copying to clipboard:",f),b.error("Failed to copy referral link")}},h=()=>{i(!0),l(null),Promise.all([o(),d()]).finally(()=>i(!1))};return t?e.jsxs("div",{className:`p-4 text-center ${s}`,children:[e.jsx(_,{className:"animate-spin mx-auto h-6 w-6 text-telegram-blue"}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Loading referral information..."})]}):r?e.jsxs("div",{className:`p-4 text-center ${s}`,children:[e.jsx("p",{className:"text-sm text-red-600 dark:text-red-400 mb-2",children:r}),e.jsxs("button",{onClick:h,className:"inline-flex items-center text-sm text-telegram-blue hover:text-telegram-dark",children:[e.jsx(Ce,{className:"mr-1 h-4 w-4"}),"Retry"]})]}):e.jsxs("div",{className:`space-y-4 ${s}`,children:[e.jsxs("div",{className:"p-4 bg-telegram-secondary-bg rounded-lg",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Your Referral Link"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"text",readOnly:!0,value:(n==null?void 0:n.telegram_deep_link)||"",className:"flex-1 p-2 text-sm bg-white dark:bg-sidebar-primary/30 border border-gray-300 dark:border-gray-700 rounded-md"}),e.jsx("button",{onClick:g,className:"p-2 text-telegram-blue hover:text-telegram-dark",title:"Copy link",children:e.jsx(Se,{size:18})}),e.jsx("button",{onClick:a,className:"p-2 text-telegram-blue hover:text-telegram-dark",title:"Share link",children:e.jsx(Te,{size:18})})]})]}),e.jsxs("div",{className:"p-4 bg-telegram-secondary-bg rounded-lg",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Your Referrals"}),u!=null&&u.referred_users&&u.referred_users.length>0?e.jsx("div",{className:"space-y-2",children:u.referred_users.map(f=>e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:f.username?`@${f.username}`:`User ${f.id}`}),e.jsxs("span",{className:"text-gray-500 dark:text-gray-400",children:["Joined ",new Date(f.joined_at).toLocaleDateString()]})]},f.id))}):e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"No referrals yet. Share your link to start earning rewards!"})]})]})},ms=({initialEmail:s="",initialPhone:r="",initialAddress:l="",clientInfo:t=null,onComplete:i,onCancel:n})=>{const[o,u]=c.useState((t==null?void 0:t.email)||s),[d,a]=c.useState((t==null?void 0:t.phone_number)||r),[g,h]=c.useState((t==null?void 0:t.address)||l),[f,N]=c.useState(!1),[k,re]=c.useState([]),[y,D]=c.useState(""),[R,L]=c.useState(!1),le=!!(o&&d&&g);c.useEffect(()=>{const m=async()=>{L(!0);try{const p=await Be();if(re(p),p.length>0){const de=p.find(T=>T.delivery_type==="courier"),ce=p.find(T=>T.delivery_type==="shipping"),ue=de||ce||p[0];D(ue.delivery_type)}}catch(p){console.error("Failed to load delivery types:",p)}finally{L(!1)}},v=async()=>{if(!t)try{const p=await Ve();p&&(u(p.email||""),a(p.phone_number||""),h(p.address||""))}catch(p){console.error("Error fetching client info:",p)}};m(),v()},[t]);const C=k.find(m=>m.delivery_type===y),ne=C?{delivery_type:C.delivery_type,price_rub:C.price_rub}:void 0,j=y==="self_pickup",[S,q]=c.useState("");c.useEffect(()=>{const m=(t==null?void 0:t.address)||l;m&&q(m)},[l,t]),c.useEffect(()=>{h(j?"Москва, Ильменский проезд, 14к8":S)},[j,S]);const ie=m=>{const v=m.target.value;h(v),j||q(v)},oe=async m=>{m.preventDefault(),N(!0);try{if(!o||!d||!y){alert("Please fill in all required fields"),N(!1);return}await Me(d,o,j?S:g)?i(ne):b.error("Failed to update client information")}catch(v){console.error("Error updating client info:",v),b.error("Failed to update client information")}finally{N(!1)}};return e.jsx("div",{className:"fixed inset-0 bg-black/30 dark:bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto",children:e.jsxs("div",{className:"bg-white dark:bg-sidebar-accent rounded-lg shadow-lg max-w-md w-full my-8",children:[e.jsxs("div",{className:"p-4 border-b dark:border-gray-700",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Заполните свои данные"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1",children:le?"Пожалуйста, проверьте свои контактные данные.":"Нам нужны ваши контактные данные для обработки заказа."})]}),e.jsxs("form",{onSubmit:oe,className:"p-4 space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium",children:["Электронная почта ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"email",value:o,onChange:m=>u(m.target.value),className:"w-full p-2 border border-gray-300 dark:border-gray-700 rounded dark:bg-sidebar-primary",placeholder:"ваша@почта.com",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium",children:["Номер телефона ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"tel",value:d,onChange:m=>a(m.target.value),className:"w-full p-2 border border-gray-300 dark:border-gray-700 rounded dark:bg-sidebar-primary",placeholder:"+7 (999) 123-4567",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium",children:["Способ доставки ",e.jsx("span",{className:"text-red-500",children:"*"})]}),R?e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(_,{className:"h-4 w-4 animate-spin"}),e.jsx("span",{children:"Загрузка вариантов доставки..."})]}):k.length===0?e.jsx("div",{className:"text-red-500",children:"Ошибка загрузки вариантов доставки. Пожалуйста, попробуйте позже."}):e.jsx("div",{className:"grid gap-2",children:k.map(m=>e.jsx("div",{className:`p-3 border rounded-lg cursor-pointer transition-colors ${y===m.delivery_type?"border-telegram-blue bg-telegram-blue/10":"border-gray-300 dark:border-gray-700"}`,onClick:()=>D(m.delivery_type),children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:m.delivery_code}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:m.delivery_info})]}),e.jsx("div",{className:"text-telegram-blue font-medium",children:m.price_rub>0?`₽${m.price_rub}`:"Бесплатно"})]})},m.delivery_type))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium",children:["Адрес доставки ",(y==="courier"||y==="shipping")&&e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("textarea",{value:g,onChange:ie,className:`w-full p-2 border rounded resize-none h-24 ${j?"bg-gray-100 dark:bg-gray-800":"bg-white dark:bg-sidebar-primary"} dark:border-gray-700`,placeholder:"Укажите ваш полный адрес",disabled:j,required:y==="courier"||y==="shipping"}),j&&e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:"При самовывозе заказ можно забрать по указанному адресу"})]}),e.jsxs("div",{className:"flex justify-end space-x-2 pt-4 border-t dark:border-gray-700",children:[n&&e.jsx("button",{type:"button",onClick:n,className:"px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",disabled:f,children:"Отмена"}),e.jsx("button",{type:"submit",className:"px-4 py-2 text-sm font-medium bg-telegram-blue text-white rounded-md hover:bg-blue-600 disabled:opacity-50",disabled:f||!o||!d||R||!y||(y==="courier"||y==="shipping")&&!g,children:f?e.jsxs(e.Fragment,{children:[e.jsx(_,{className:"inline-block mr-2 h-4 w-4 animate-spin"}),"Сохранение..."]}):"Продолжить"})]})]})]})})},xs=({item:s,onRemove:r})=>{const{updateQuantity:l}=G(),t=()=>{E(),l(s.productId,s.size,s.quantity+1)},i=()=>{E(),s.quantity>1?l(s.productId,s.size,s.quantity-1):r()},n=()=>s.item_type==="preorder"?s.category_type==="sneakers"?"👟":s.category_type==="clothes"?"👕":s.category_type==="accessories"?"👜":s.category_type==="shirt"?"👕":"🔮":"👕";return e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white dark:bg-sidebar-accent rounded-lg shadow-sm",children:[e.jsx("div",{className:"flex-shrink-0 w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center text-4xl overflow-hidden",children:s.photo_url?e.jsx("img",{src:s.photo_url,alt:s.name,className:"w-full h-full object-cover",onError:o=>{o.currentTarget.style.display="none",o.currentTarget.parentElement.innerHTML=n()}}):n()}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900 dark:text-gray-100 truncate",children:s.name}),e.jsx("button",{onClick:r,className:"text-red-500 hover:text-red-700","aria-label":"Remove item",children:e.jsx(ze,{size:16})})]}),s.item_type==="preorder"?e.jsxs("div",{className:"mt-1 text-xs text-gray-600 dark:text-gray-400",children:[e.jsxs("p",{className:"truncate",children:["URL: ",s.dewu_url]}),e.jsxs("p",{children:["Размер: ",s.size||"Не указан"]}),e.jsxs("p",{children:["Категория: ",s.category_type==="sneakers"?"Обувь":s.category_type==="clothes"?"Одежда":s.category_type==="accessories"?"Аксессуары":s.category_type==="shirt"?"Рубашка":s.category_type]}),e.jsxs("p",{children:["Доставка: ",(s.shipping_type||s.delivery_type)==="cargo"?"Автомобиль":"Самолет"]})]}):e.jsxs("div",{className:"mt-1 text-xs text-gray-600 dark:text-gray-400",children:[e.jsx("p",{children:s.color&&`Цвет: ${s.color}`}),e.jsxs("p",{children:["Размер: ",s.size]})]}),e.jsxs("div",{className:"flex justify-between items-center mt-2",children:[e.jsxs("div",{className:"text-sm font-medium text-telegram-blue",children:["₽",(s.sale_price||s.price).toLocaleString()]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:i,className:"p-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700","aria-label":"Decrease quantity",children:e.jsx(Ee,{size:14})}),e.jsx("span",{className:"text-sm font-medium w-6 text-center",children:s.quantity}),e.jsx("button",{onClick:t,className:"p-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700","aria-label":"Increase quantity",children:e.jsx($e,{size:14})})]})]})]})]})},ps=({className:s,originalPrice:r,onPromocodeApplied:l,onPromocodeRemoved:t,currentPromocode:i})=>{const[n,o]=c.useState(""),[u,d]=c.useState(!1),a=async g=>{if(g.preventDefault(),!n.trim()){b.error("Пожалуйста, введите промокод");return}d(!0);try{const h=await Ue(n.trim());if(h.success&&h.promocode){const f=Oe(r,h.promocode);l(h.promocode,f),b.success("Промокод успешно применен!")}else b.error(h.message||"Недействительный промокод")}catch(h){console.error("Error validating promocode:",h),b.error("Не удалось проверить промокод")}finally{d(!1)}};return i?e.jsxs("div",{className:`flex items-center justify-between p-3 bg-telegram-secondary-bg rounded-lg ${s}`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(De,{className:"text-telegram-blue",size:16}),e.jsx("span",{className:"text-sm font-medium",children:i.promocode_text})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:i.discount_fixed?`-${i.discount_fixed}₽`:i.discount_percent&&i.discount_percent!=="null"?`-${i.discount_percent}%`:""}),e.jsx("button",{onClick:t,className:"text-sm text-red-500 hover:text-red-600",children:"Удалить"})]})]}):e.jsxs("form",{onSubmit:a,className:`flex gap-2 ${s}`,children:[e.jsx("input",{type:"text",value:n,onChange:g=>o(g.target.value),placeholder:"Введите промокод",className:"flex-1 p-2 text-sm bg-white dark:bg-sidebar-primary/30 border border-gray-300 dark:border-gray-700 rounded-md",disabled:u}),e.jsx("button",{type:"submit",disabled:u||!n.trim(),className:"px-4 py-2 bg-telegram-blue text-white rounded-md disabled:opacity-70 flex items-center",children:u?e.jsxs(e.Fragment,{children:[e.jsx(_,{size:16,className:"animate-spin mr-2"}),"Проверка..."]}):"Применить"})]})};export{ls as B,xs as C,ns as D,rs as L,cs as O,ts as P,us as R,os as S,ss as T,as as U,is as a,ds as b,ps as c,ms as d,Ze as e,es as f};
//# sourceMappingURL=components-CxuqEs7E.js.map
