import{r as x,j as e,C as A,P as X,u as Z,a as D,b as ee,L as w,H as se,S as te,c as ae,d as F,e as B,A as re,f as M,E as le,g as U,h as ne,N as ie,i as ce,k as de,l as oe,m as me,n as P,o as _,R as xe,p as ue,q as ge,J as b,T as pe,M as he,s as ye,t as fe}from"./vendor-DnQuN7s5.js";import{c as f,u as O,h as $,g as V,a as be,m as je,s as ve,b as Ne,d as we,e as _e,f as ke,i as Ce,j as Se,k as Ee,v as ze,l as $e}from"./main-BlXZMKK0.js";const Ae=X,De=x.forwardRef(({className:s,sideOffset:i=4,...l},t)=>e.jsx(A,{ref:t,sideOffset:i,className:f("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...l}));De.displayName=A.displayName;const Le=()=>{const s=Z(),i=D(),{itemCount:l}=O();ee();const t=r=>s.pathname===r,c=r=>n=>{n.preventDefault(),t(r)||($(),i(r))};return e.jsx("nav",{className:"fixed bottom-0 left-0 right-0 z-50 bottom-nav-bar pb-4",children:e.jsxs("div",{className:"grid grid-cols-3 w-full max-w-md mx-auto h-[10.5rem]",children:[e.jsx(w,{to:"/",onClick:c("/"),className:f("flex items-start justify-center pt-4 transition-all duration-200",t("/")?"text-telegram-button active":"text-telegram-hint"),"aria-current":t("/")?"page":void 0,children:e.jsx(se,{size:40})}),e.jsx(w,{to:"/shop",onClick:c("/shop"),className:f("flex items-start justify-center pt-4 relative transition-all duration-200",t("/shop")?"text-telegram-button active":"text-telegram-hint"),"aria-current":t("/shop")?"page":void 0,children:e.jsxs("div",{className:"relative",children:[e.jsx(te,{size:40}),l>0&&e.jsx("span",{className:"absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full badge",children:l})]})}),e.jsx(w,{to:"/calculator",onClick:c("/calculator"),className:f("flex items-start justify-center pt-4 transition-all duration-200",t("/calculator")?"text-telegram-button active":"text-telegram-hint"),"aria-current":t("/calculator")?"page":void 0,children:e.jsx(ae,{size:40})})]})})},Fe=({children:s,className:i,fullHeight:l=!1})=>e.jsxs("div",{className:f("w-full pb-52 max-w-md mx-auto",l?"min-h-screen":"",i),style:{backgroundColor:"transparent"},children:[e.jsx("div",{className:"animate-fade-in",children:s}),e.jsx(Le,{})]}),Te=({emoji:s,username:i,size:l="md",className:t,randomize:c=!1})=>{const[r,n]=x.useState(s||"😊");x.useEffect(()=>{s?n(s):i?n(V(i,"avatar")):c&&n(be())},[s,i,c]);const o={sm:"w-8 h-8 text-lg",md:"w-12 h-12 text-2xl",lg:"w-16 h-16 text-3xl"};return e.jsx("div",{className:f("flex items-center justify-center rounded-full bg-telegram-light animate-pulse-slow",o[l],t),children:e.jsx("span",{className:"animate-float",children:r})})},Be=({user:s,emoji:i,size:l="md",className:t=""})=>{const r={sm:"w-8 h-8",md:"w-12 h-12",lg:"w-16 h-16"}[l];return s!=null&&s.photo_url?e.jsx("div",{className:`${r} rounded-full overflow-hidden ${t}`,children:e.jsx("img",{src:s.photo_url,alt:`${s.first_name}'s profile`,className:"w-full h-full object-cover",onError:n=>{console.error("Error loading profile image, falling back to emoji avatar"),n.currentTarget.style.display="none"}})}):e.jsx(Te,{emoji:i,size:l,className:t})},Me=({size:s="md",className:i,fillColor:l="fill-telegram-blue"})=>{const t={sm:"w-6 h-6",md:"w-10 h-10",lg:"w-16 h-16"};return e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs("svg",{className:f("animate-spin",t[s],i),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:l,d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})},Ue=({banners:s,className:i="",autoPlayInterval:l=5e3})=>{const t=D(),c=r=>{r.link&&(r.external?window.open(r.link,"_blank","noopener,noreferrer"):t(r.link))};return!s||s.length===0?null:e.jsxs("div",{className:`banner-swiper-container w-full relative ${i}`,children:[e.jsx(F,{modules:[B,re,M,le],spaceBetween:0,slidesPerView:1,pagination:{clickable:!0,type:"bullets",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",el:".banner-pagination"},navigation:!1,autoplay:{delay:l,disableOnInteraction:!1},loop:s.length>1,effect:"slide",className:"w-full aspect-[2.5/1]",children:s.map((r,n)=>e.jsx(U,{className:"w-full h-full cursor-pointer",onClick:()=>c(r),children:e.jsx("div",{className:"w-full h-full bg-cover bg-center rounded-lg",style:{backgroundImage:`url(${r.image})`}})},n))}),e.jsx("div",{className:"banner-pagination flex justify-center mt-2"})]})},Oe=()=>e.jsxs("a",{href:"https://t.me/dd_helper",target:"_blank",rel:"noopener noreferrer",className:"bg-cover bg-center rounded-lg p-4 shadow-sm hover-lift flex flex-col justify-between transform hover:-translate-y-1 hover:shadow-md transition-all duration-300",style:{backgroundImage:`url(${je})`},children:[e.jsx("div",{children:e.jsx("h3",{className:"text-xl font-medium text-black/80",children:"DD MANAGER"})}),e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("p",{className:"text-xs text-black/50",children:"Поможет определиться с цветом и размером"})}),e.jsx("div",{className:"flex justify-end mt-1",children:e.jsx(ne,{size:20,className:"text-white"})})]}),Ve=({product:s,className:i})=>{const l=D(),t=V(`${s.item_name}-${s.color_code}`,"product"),c=Array.isArray(s.sizes)?ve(s.sizes.filter(d=>d.quantity>0).map(d=>d.size)):[],r=s.photos&&s.photos.length>0,n=()=>{if(!r)return"";const d=s.photos.find(a=>a.photo_category==="front"&&a.photo_url);return d?d.photo_url:s.photos[0].photo_url},o=d=>{d.preventDefault(),Ne("medium"),l(`/product/${s.sku}`)};return e.jsxs(w,{to:`/product/${s.sku}`,onClick:o,className:f("block bg-telegram-secondary-bg rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover-lift",i),children:[e.jsx("div",{className:"aspect-square bg-telegram-bg flex items-center justify-center",children:r?e.jsx("img",{src:n(),alt:s.item_name,className:"w-full h-full object-cover",onError:d=>{d.currentTarget.style.display="none",d.currentTarget.parentElement.innerHTML=`<span class="text-5xl animate-float">${t}</span>`}}):e.jsx("span",{className:"text-5xl animate-float",children:t})}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"flex justify-between items-start mb-1",children:[e.jsx("h3",{className:"font-medium text-telegram-text truncate",children:s.item_name}),s.brand&&e.jsx("span",{className:"text-xs text-telegram-hint bg-telegram-bg px-2 py-0.5 rounded-full",children:s.brand})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-sm text-telegram-hint",children:["Color: ",s.color_code]}),e.jsxs("span",{className:"font-medium text-telegram-button",children:["₽",typeof s.price_rub=="string"?parseFloat(s.price_rub).toLocaleString():s.price_rub.toLocaleString()]})]}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-1",children:[c.slice(0,3).map(d=>e.jsx("span",{className:"text-xs px-2 py-1 bg-telegram-bg text-telegram-text rounded-full",children:d},d)),c.length>3&&e.jsxs("span",{className:"text-xs px-2 py-1 bg-telegram-bg text-telegram-text rounded-full",children:["+",c.length-3]})]})]})]})},He=({availableSizes:s,selectedSize:i,onChange:l,className:t})=>{const c=r=>{l(r)};return e.jsxs("div",{className:f("w-full",t),children:[e.jsx("h3",{className:"text-sm font-medium text-telegram-text mb-2",children:"Выберите размер"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(r=>e.jsx("button",{className:f("px-4 py-2 rounded-full border transition-all duration-200",i===r?"border-telegram-button bg-telegram-button/10 text-telegram-button":"border-telegram-hint/30 bg-telegram-bg text-telegram-text hover:border-telegram-hint/50"),onClick:()=>c(r),children:r},r))})]})},Ie=({photos:s,productName:i,fallbackEmoji:l="📦",className:t=""})=>{const[c,r]=x.useState(0),n=o=>{const d=o.currentTarget;if(d.style.display="none",d.parentElement){const a=document.createElement("div");a.className="w-full h-full flex items-center justify-center",a.innerHTML=`<span class="text-8xl animate-float">${l}</span>`,d.parentElement.appendChild(a)}};return!s||s.length===0?e.jsx("div",{className:`w-full aspect-square bg-telegram-bg flex items-center justify-center ${t}`,children:e.jsx("span",{className:"text-8xl animate-float",children:l})}):e.jsxs("div",{className:`photo-swiper-container w-full aspect-square bg-telegram-bg relative ${t}`,children:[e.jsx(F,{modules:[B,ie,M],spaceBetween:0,slidesPerView:1,pagination:{clickable:!0,type:"bullets",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},navigation:!0,onSlideChange:o=>{r(o.activeIndex)},className:"w-full h-full",children:s.map((o,d)=>e.jsx(U,{className:"w-full h-full",children:e.jsx("img",{src:o,alt:`${i} - ${d+1}`,className:"w-full h-full object-cover",onError:n})},d))}),s.length>1&&e.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/40 rounded-full px-3 py-1 z-10",children:e.jsxs("span",{className:"text-white text-xs",children:[c+1," / ",s.length]})})]})},Re=ce("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function z({className:s,variant:i,...l}){return e.jsx("div",{className:f(Re({variant:i}),s),...l})}const Je=({order:s})=>{const[i,l]=x.useState(!1),t={...s,delivery_type:s.delivery_type||"",delivery_price:s.delivery_price||"0",delivery_address:s.delivery_address||null,delivery_info:s.delivery_info||null,delivery_code:s.delivery_code||null,items:s.items.map(a=>({...a,id:typeof a.id=="number"?a.id:0,type:a.type||"stock",status:a.status||s.status||"",dewu_url:a.dewu_url||null,shipping_type:a.shipping_type||null,category_type:a.category_type||null,weight_category:a.weight_category||null,color_code:a.color_code||null,sku:a.sku||null,item_name:a.item_name||null,size:a.size||"",price_cny:a.price_cny||null,price_rub:a.price_rub||null,sale_price:a.sale_price||null,quantity:a.quantity||1}))},c=a=>{switch(a.toLowerCase()){case"delivered":case"доставлен":return"bg-green-500";case"awaiting manager":case"ожидает менеджера":return"bg-yellow-500";case"awaiting purchase":case"ожидает покупки":return"bg-blue-500";case"cancelled":case"отменён":return"bg-red-500";default:return"bg-gray-500"}},r=a=>{switch(a.toLowerCase()){case"delivered":return"Доставлен";case"awaiting manager":return"Ожидает менеджера";case"awaiting purchase":return"Ожидает покупки";case"cancelled":return"Отменён";default:return a}},n=a=>a?(typeof a=="string"?parseFloat(a):a).toLocaleString("ru-RU",{maximumFractionDigits:2}):"0",o=a=>new Date(a).toLocaleString("ru-RU",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),d=a=>a%10===1&&a%100!==11?"товар":[2,3,4].includes(a%10)&&![12,13,14].includes(a%100)?"товара":"товаров";return e.jsxs("div",{className:"bg-white dark:bg-sidebar-accent rounded-lg shadow-sm overflow-hidden",children:[e.jsx("div",{className:"p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-sidebar-primary/10 transition-colors",onClick:()=>l(!i),children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("h3",{className:"text-lg font-medium",children:["Заказ #",t.order_id]}),e.jsx(z,{className:`${c(t.status)} text-white`,children:r(t.status)})]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1",children:o(t.created_at)}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:[t.items.length," ",d(t.items.length)]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{className:"font-medium text-lg",children:["₽",n(t.final_price)]}),t.promocode&&e.jsx("p",{className:"text-sm text-telegram-blue",children:t.promocode.promocode_text}),e.jsx("button",{className:"mt-2 text-telegram-blue hover:text-telegram-dark transition-colors","aria-label":i?"Свернуть детали":"Развернуть детали",children:i?e.jsx(de,{size:20}):e.jsx(oe,{size:20})})]})]})}),i&&e.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800/50",children:e.jsxs("div",{className:"p-4 space-y-4",children:[t.items.map((a,g)=>e.jsx("div",{className:"border-b dark:border-gray-700 pb-3 last:border-0",children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap gap-2 mb-1",children:[e.jsx(z,{className:"bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",children:a.type==="stock"?"Сток":"Предзаказ"}),a.status&&e.jsx(z,{className:`${c(a.status)} text-white`,children:r(a.status)})]}),e.jsx("p",{className:"font-medium",children:a.item_name||(a.dewu_url?e.jsxs("a",{href:a.dewu_url,target:"_blank",rel:"noopener noreferrer",className:"text-telegram-blue hover:underline flex items-center",children:[a.dewu_url.substring(0,30),a.dewu_url.length>30?"...":"",e.jsx(me,{size:14,className:"ml-1"})]}):"Товар")}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Размер: ",a.size," ",a.quantity>1&&`× ${a.quantity}`]}),a.type==="preorder"&&a.price_cny&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Цена (юани): ¥",n(a.price_cny)]}),a.sku&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Артикул: ",a.sku]}),a.shipping_type&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Тип доставки: ",a.shipping_type]}),a.category_type&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Категория: ",a.category_type]}),a.weight_category&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Вес: ",a.weight_category]}),a.color_code&&e.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("span",{children:"Цвет:"}),e.jsx("div",{className:"w-4 h-4 rounded-full border border-gray-300",style:{backgroundColor:a.color_code}})]})]}),e.jsx("div",{className:"text-right",children:e.jsxs("p",{className:"font-medium",children:["₽",n(a.price_rub)]})})]})},`item-${g}-${a.id}`)),e.jsxs("div",{className:"pt-3 border-t dark:border-gray-700",children:[e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:"Сумма товаров"}),e.jsxs("span",{children:["₽",n(t.subtotal)]})]}),t.delivery_code&&e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsxs("span",{className:"text-gray-600 dark:text-gray-400",children:["Доставка: ",t.delivery_code]}),e.jsx("span",{children:t.delivery_price==="0"?"Бесплатно":`₽${n(t.delivery_price)}`})]}),t.promocode&&e.jsxs("div",{className:"flex justify-between text-sm text-telegram-blue mb-1",children:[e.jsxs("span",{children:["Промокод: ",t.promocode.promocode_text,t.promocode.discount_percent&&t.promocode.discount_percent!=="null"&&` (-${t.promocode.discount_percent}%)`,t.promocode.discount_fixed&&` (-${t.promocode.discount_fixed}₽)`]}),e.jsxs("span",{children:["-₽",n(t.discount_amount)]})]}),t.discount_amount&&t.discount_amount!=="0"&&!t.promocode&&e.jsxs("div",{className:"flex justify-between text-sm text-telegram-blue mb-1",children:[e.jsx("span",{children:"Скидка"}),e.jsxs("span",{children:["-₽",n(t.discount_amount)]})]}),t.dd_coins_used&&t.dd_coins_used!=="0"&&e.jsxs("div",{className:"flex justify-between text-sm text-yellow-500 mb-1",children:[e.jsx("span",{children:"Использовано DD Коинов"}),e.jsxs("span",{children:["-₽",n(t.dd_coins_used)]})]}),t.prepay_amount&&t.prepay_amount!=="0"&&e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:"Предоплата"}),e.jsxs("span",{children:["₽",n(t.prepay_amount)]})]}),e.jsxs("div",{className:"flex justify-between font-medium text-base mt-2",children:[e.jsx("span",{children:"Итого"}),e.jsxs("span",{children:["₽",n(t.final_price)]})]})]})]})})]})},Ke=({className:s})=>{const[i,l]=x.useState(null),[t,c]=x.useState(!0),{data:r,refetch:n}=P({queryKey:["referralInfo"],queryFn:()=>we(),staleTime:60*1e3,retry:1,retryDelay:1e3}),{data:o,refetch:d}=P({queryKey:["referralStats"],queryFn:()=>_e(),staleTime:60*1e3,retry:1,retryDelay:1e3});x.useEffect(()=>{(async()=>{c(!0),l(null);try{await Promise.all([n(),d()])}catch(N){console.error("Error loading referral data:",N),l("Failed to load referral information")}finally{c(!1)}})()},[n,d]);const a=async()=>{r&&await ke(r)},g=async()=>{if(r)try{await navigator.clipboard.writeText(r.telegram_deep_link),b.success("Referral link copied to clipboard")}catch(h){console.error("Error copying to clipboard:",h),b.error("Failed to copy referral link")}},p=()=>{c(!0),l(null),Promise.all([n(),d()]).finally(()=>c(!1))};return t?e.jsxs("div",{className:`p-4 text-center ${s}`,children:[e.jsx(_,{className:"animate-spin mx-auto h-6 w-6 text-telegram-blue"}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Loading referral information..."})]}):i?e.jsxs("div",{className:`p-4 text-center ${s}`,children:[e.jsx("p",{className:"text-sm text-red-600 dark:text-red-400 mb-2",children:i}),e.jsxs("button",{onClick:p,className:"inline-flex items-center text-sm text-telegram-blue hover:text-telegram-dark",children:[e.jsx(xe,{className:"mr-1 h-4 w-4"}),"Retry"]})]}):e.jsxs("div",{className:`space-y-4 ${s}`,children:[e.jsxs("div",{className:"p-4 bg-telegram-secondary-bg rounded-lg",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Your Referral Link"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"text",readOnly:!0,value:(r==null?void 0:r.telegram_deep_link)||"",className:"flex-1 p-2 text-sm bg-white dark:bg-sidebar-primary/30 border border-gray-300 dark:border-gray-700 rounded-md"}),e.jsx("button",{onClick:g,className:"p-2 text-telegram-blue hover:text-telegram-dark",title:"Copy link",children:e.jsx(ue,{size:18})}),e.jsx("button",{onClick:a,className:"p-2 text-telegram-blue hover:text-telegram-dark",title:"Share link",children:e.jsx(ge,{size:18})})]})]}),e.jsxs("div",{className:"p-4 bg-telegram-secondary-bg rounded-lg",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Your Referrals"}),o!=null&&o.referred_users&&o.referred_users.length>0?e.jsx("div",{className:"space-y-2",children:o.referred_users.map(h=>e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:h.username?`@${h.username}`:`User ${h.id}`}),e.jsxs("span",{className:"text-gray-500 dark:text-gray-400",children:["Joined ",new Date(h.joined_at).toLocaleDateString()]})]},h.id))}):e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"No referrals yet. Share your link to start earning rewards!"})]})]})},Qe=({initialEmail:s="",initialPhone:i="",initialAddress:l="",clientInfo:t=null,onComplete:c,onCancel:r})=>{const[n,o]=x.useState((t==null?void 0:t.email)||s),[d,a]=x.useState((t==null?void 0:t.phone_number)||i),[g,p]=x.useState((t==null?void 0:t.address)||l),[h,N]=x.useState(!1),[k,H]=x.useState([]),[y,L]=x.useState(""),[T,R]=x.useState(!1),I=!!(n&&d&&g);x.useEffect(()=>{const m=async()=>{R(!0);try{const u=await Ce();if(H(u),u.length>0){const Y=u.find(E=>E.delivery_type==="courier"),G=u.find(E=>E.delivery_type==="shipping"),W=Y||G||u[0];L(W.delivery_type)}}catch(u){console.error("Failed to load delivery types:",u)}finally{R(!1)}},v=async()=>{if(!t)try{const u=await Se();u&&(o(u.email||""),a(u.phone_number||""),p(u.address||""))}catch(u){console.error("Error fetching client info:",u)}};m(),v()},[t]);const C=k.find(m=>m.delivery_type===y),J=C?{delivery_type:C.delivery_type,price_rub:C.price_rub}:void 0,j=y==="self_pickup",[S,q]=x.useState("");x.useEffect(()=>{const m=(t==null?void 0:t.address)||l;m&&q(m)},[l,t]),x.useEffect(()=>{p(j?"Москва, Ильменский проезд, 14к8":S)},[j,S]);const K=m=>{const v=m.target.value;p(v),j||q(v)},Q=async m=>{m.preventDefault(),N(!0);try{if(!n||!d||!y){alert("Please fill in all required fields"),N(!1);return}await Ee(d,n,j?S:g)?c(J):b.error("Failed to update client information")}catch(v){console.error("Error updating client info:",v),b.error("Failed to update client information")}finally{N(!1)}};return e.jsx("div",{className:"fixed inset-0 bg-black/30 dark:bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto",children:e.jsxs("div",{className:"bg-white dark:bg-sidebar-accent rounded-lg shadow-lg max-w-md w-full my-8",children:[e.jsxs("div",{className:"p-4 border-b dark:border-gray-700",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Заполните свои данные"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1",children:I?"Пожалуйста, проверьте свои контактные данные.":"Нам нужны ваши контактные данные для обработки заказа."})]}),e.jsxs("form",{onSubmit:Q,className:"p-4 space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium",children:["Электронная почта ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"email",value:n,onChange:m=>o(m.target.value),className:"w-full p-2 border border-gray-300 dark:border-gray-700 rounded dark:bg-sidebar-primary",placeholder:"ваша@почта.com",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium",children:["Номер телефона ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"tel",value:d,onChange:m=>a(m.target.value),className:"w-full p-2 border border-gray-300 dark:border-gray-700 rounded dark:bg-sidebar-primary",placeholder:"+7 (999) 123-4567",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium",children:["Способ доставки ",e.jsx("span",{className:"text-red-500",children:"*"})]}),T?e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(_,{className:"h-4 w-4 animate-spin"}),e.jsx("span",{children:"Загрузка вариантов доставки..."})]}):k.length===0?e.jsx("div",{className:"text-red-500",children:"Ошибка загрузки вариантов доставки. Пожалуйста, попробуйте позже."}):e.jsx("div",{className:"grid gap-2",children:k.map(m=>e.jsx("div",{className:`p-3 border rounded-lg cursor-pointer transition-colors ${y===m.delivery_type?"border-telegram-blue bg-telegram-blue/10":"border-gray-300 dark:border-gray-700"}`,onClick:()=>L(m.delivery_type),children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:m.delivery_code}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:m.delivery_info})]}),e.jsx("div",{className:"text-telegram-blue font-medium",children:m.price_rub>0?`₽${m.price_rub}`:"Бесплатно"})]})},m.delivery_type))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium",children:["Адрес доставки ",(y==="courier"||y==="shipping")&&e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("textarea",{value:g,onChange:K,className:`w-full p-2 border rounded resize-none h-24 ${j?"bg-gray-100 dark:bg-gray-800":"bg-white dark:bg-sidebar-primary"} dark:border-gray-700`,placeholder:"Укажите ваш полный адрес",disabled:j,required:y==="courier"||y==="shipping"}),j&&e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:"При самовывозе заказ можно забрать по указанному адресу"})]}),e.jsxs("div",{className:"flex justify-end space-x-2 pt-4 border-t dark:border-gray-700",children:[r&&e.jsx("button",{type:"button",onClick:r,className:"px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",disabled:h,children:"Отмена"}),e.jsx("button",{type:"submit",className:"px-4 py-2 text-sm font-medium bg-telegram-blue text-white rounded-md hover:bg-blue-600 disabled:opacity-50",disabled:h||!n||!d||T||!y||(y==="courier"||y==="shipping")&&!g,children:h?e.jsxs(e.Fragment,{children:[e.jsx(_,{className:"inline-block mr-2 h-4 w-4 animate-spin"}),"Сохранение..."]}):"Продолжить"})]})]})]})})},Ye=({item:s,onRemove:i})=>{const{updateQuantity:l}=O(),t=()=>{$(),l(s.productId,s.size,s.quantity+1)},c=()=>{$(),s.quantity>1?l(s.productId,s.size,s.quantity-1):i()},r=()=>s.item_type==="preorder"?s.category_type==="sneakers"?"👟":s.category_type==="clothes"?"👕":s.category_type==="accessories"?"👜":s.category_type==="shirt"?"👕":"🔮":"👕";return e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white dark:bg-sidebar-accent rounded-lg shadow-sm",children:[e.jsx("div",{className:"flex-shrink-0 w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center text-4xl overflow-hidden",children:s.photo_url?e.jsx("img",{src:s.photo_url,alt:s.name,className:"w-full h-full object-cover",onError:n=>{n.currentTarget.style.display="none",n.currentTarget.parentElement.innerHTML=r()}}):r()}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900 dark:text-gray-100 truncate",children:s.name}),e.jsx("button",{onClick:i,className:"text-red-500 hover:text-red-700","aria-label":"Remove item",children:e.jsx(pe,{size:16})})]}),s.item_type==="preorder"?e.jsxs("div",{className:"mt-1 text-xs text-gray-600 dark:text-gray-400",children:[e.jsxs("p",{className:"truncate",children:["URL: ",s.dewu_url]}),e.jsxs("p",{children:["Размер: ",s.size||"Не указан"]}),e.jsxs("p",{children:["Категория: ",s.category_type==="sneakers"?"Обувь":s.category_type==="clothes"?"Одежда":s.category_type==="accessories"?"Аксессуары":s.category_type==="shirt"?"Рубашка":s.category_type]}),e.jsxs("p",{children:["Доставка: ",(s.shipping_type||s.delivery_type)==="cargo"?"Автомобиль":"Самолет"]})]}):e.jsxs("div",{className:"mt-1 text-xs text-gray-600 dark:text-gray-400",children:[e.jsx("p",{children:s.color&&`Цвет: ${s.color}`}),e.jsxs("p",{children:["Размер: ",s.size]})]}),e.jsxs("div",{className:"flex justify-between items-center mt-2",children:[e.jsxs("div",{className:"text-sm font-medium text-telegram-blue",children:["₽",(s.sale_price||s.price).toLocaleString()]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:c,className:"p-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700","aria-label":"Decrease quantity",children:e.jsx(he,{size:14})}),e.jsx("span",{className:"text-sm font-medium w-6 text-center",children:s.quantity}),e.jsx("button",{onClick:t,className:"p-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700","aria-label":"Increase quantity",children:e.jsx(ye,{size:14})})]})]})]})]})},Ge=({className:s,originalPrice:i,onPromocodeApplied:l,onPromocodeRemoved:t,currentPromocode:c})=>{const[r,n]=x.useState(""),[o,d]=x.useState(!1),a=async g=>{if(g.preventDefault(),!r.trim()){b.error("Пожалуйста, введите промокод");return}d(!0);try{const p=await ze(r.trim());if(p.success&&p.promocode){const h=$e(i,p.promocode);l(p.promocode,h),b.success("Промокод успешно применен!")}else b.error(p.message||"Недействительный промокод")}catch(p){console.error("Error validating promocode:",p),b.error("Не удалось проверить промокод")}finally{d(!1)}};return c?e.jsxs("div",{className:`flex items-center justify-between p-3 bg-telegram-secondary-bg rounded-lg ${s}`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(fe,{className:"text-telegram-blue",size:16}),e.jsx("span",{className:"text-sm font-medium",children:c.promocode_text})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:c.discount_fixed?`-${c.discount_fixed}₽`:c.discount_percent&&c.discount_percent!=="null"?`-${c.discount_percent}%`:""}),e.jsx("button",{onClick:t,className:"text-sm text-red-500 hover:text-red-600",children:"Удалить"})]})]}):e.jsxs("form",{onSubmit:a,className:`flex gap-2 ${s}`,children:[e.jsx("input",{type:"text",value:r,onChange:g=>n(g.target.value),placeholder:"Введите промокод",className:"flex-1 p-2 text-sm bg-white dark:bg-sidebar-primary/30 border border-gray-300 dark:border-gray-700 rounded-md",disabled:o}),e.jsx("button",{type:"submit",disabled:o||!r.trim(),className:"px-4 py-2 bg-telegram-blue text-white rounded-md disabled:opacity-70 flex items-center",children:o?e.jsxs(e.Fragment,{children:[e.jsx(_,{size:16,className:"animate-spin mr-2"}),"Проверка..."]}):"Применить"})]})};export{Ue as B,Ye as C,Oe as D,Me as L,Je as O,Fe as P,Ke as R,He as S,Ae as T,Be as U,Ve as a,Ie as b,Ge as c,Qe as d};
//# sourceMappingURL=components-xzo-f_z1.js.map
