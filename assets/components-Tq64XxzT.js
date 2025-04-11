import{r as c,j as e,V as P,R as A,A as F,C as B,X as ne,T as V,D as U,c as I,P as ie,a as M,b as oe,d as H,e as de,u as ce,f as z,L as w,H as me,S as ue,g as xe,h as ge,i as pe,k as he,l as fe,N as ye,m as be,n as je,o as ve,p as Ne,q,s as k,t as we,v as ke,w as _e,J as b,x as Ce,M as Se,y as Te,z as $e}from"./vendor-Ckfx5Wzh.js";import{c as g,u as ze,a as O,h as $,g as J,b as Ee,d as Re,e as De,f as Le,s as qe,i as Pe,j as Ae,k as Fe,v as Be,l as Ve}from"./main-EbfpCLAO.js";const Ue=ie,K=c.forwardRef(({className:t,...a},r)=>e.jsx(P,{ref:r,className:g("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...a}));K.displayName=P.displayName;const Ie=I("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Q=c.forwardRef(({className:t,variant:a,...r},s)=>e.jsx(A,{ref:s,className:g(Ie({variant:a}),t),...r}));Q.displayName=A.displayName;const Me=c.forwardRef(({className:t,...a},r)=>e.jsx(F,{ref:r,className:g("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...a}));Me.displayName=F.displayName;const X=c.forwardRef(({className:t,...a},r)=>e.jsx(B,{ref:r,className:g("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...a,children:e.jsx(ne,{className:"h-4 w-4"})}));X.displayName=B.displayName;const Y=c.forwardRef(({className:t,...a},r)=>e.jsx(V,{ref:r,className:g("text-sm font-semibold",t),...a}));Y.displayName=V.displayName;const W=c.forwardRef(({className:t,...a},r)=>e.jsx(U,{ref:r,className:g("text-sm opacity-90",t),...a}));W.displayName=U.displayName;function Ze(){const{toasts:t}=ze();return e.jsxs(Ue,{children:[t.map(function({id:a,title:r,description:s,action:i,...l}){return e.jsxs(Q,{...l,children:[e.jsxs("div",{className:"grid gap-1",children:[r&&e.jsx(Y,{children:r}),s&&e.jsx(W,{children:s})]}),i,e.jsx(X,{})]},a)}),e.jsx(K,{})]})}const et=({...t})=>{const{theme:a="system"}=M();return e.jsx(oe,{theme:a,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})},tt=de,He=c.forwardRef(({className:t,sideOffset:a=4,...r},s)=>e.jsx(H,{ref:s,sideOffset:a,className:g("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...r}));He.displayName=H.displayName;const Oe=()=>{const t=ce(),a=z(),{itemCount:r}=O();M();const s=l=>t.pathname===l,i=l=>d=>{d.preventDefault(),s(l)||($(),a(l))};return e.jsx("nav",{className:"fixed bottom-0 left-0 right-0 z-50 bottom-nav-bar pb-4",children:e.jsxs("div",{className:"grid grid-cols-3 w-full max-w-md mx-auto h-24",children:[e.jsx(w,{to:"/",onClick:i("/"),className:g("flex items-center justify-center transition-all duration-200",s("/")?"text-telegram-button active":"text-telegram-hint"),"aria-current":s("/")?"page":void 0,children:e.jsx(me,{size:32})}),e.jsx(w,{to:"/shop",onClick:i("/shop"),className:g("flex items-center justify-center relative transition-all duration-200",s("/shop")?"text-telegram-button active":"text-telegram-hint"),"aria-current":s("/shop")?"page":void 0,children:e.jsxs("div",{className:"relative",children:[e.jsx(ue,{size:32}),r>0&&e.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full badge",children:r})]})}),e.jsx(w,{to:"/calculator",onClick:i("/calculator"),className:g("flex items-center justify-center transition-all duration-200",s("/calculator")?"text-telegram-button active":"text-telegram-hint"),"aria-current":s("/calculator")?"page":void 0,children:e.jsx(xe,{size:32})})]})})},st=({children:t,className:a,fullHeight:r=!1})=>e.jsxs("div",{className:g("w-full pb-52 max-w-md mx-auto",r?"min-h-screen":"",a),style:{backgroundColor:"transparent"},children:[e.jsx("div",{className:"animate-fade-in",children:t}),e.jsx(Oe,{})]}),Je=({emoji:t,username:a,size:r="md",className:s,randomize:i=!1})=>{const[l,d]=c.useState(t||"😊");c.useEffect(()=>{t?d(t):a?d(J(a,"avatar")):i&&d(Ee())},[t,a,i]);const n={sm:"w-8 h-8 text-lg",md:"w-12 h-12 text-2xl",lg:"w-16 h-16 text-3xl"};return e.jsx("div",{className:g("flex items-center justify-center rounded-full bg-telegram-light animate-pulse-slow",n[r],s),children:e.jsx("span",{className:"animate-float",children:l})})},at=({user:t,emoji:a,size:r="md",className:s=""})=>{const l={sm:"w-8 h-8",md:"w-12 h-12",lg:"w-16 h-16"}[r];return t!=null&&t.photo_url?e.jsx("div",{className:`${l} rounded-full overflow-hidden ${s}`,children:e.jsx("img",{src:t.photo_url,alt:`${t.first_name}'s profile`,className:"w-full h-full object-cover",onError:d=>{console.error("Error loading profile image, falling back to emoji avatar"),d.currentTarget.style.display="none"}})}):e.jsx(Je,{emoji:a,size:r,className:s})},Ke=({image:t,link:a,className:r})=>{const s=z(),i=()=>{a&&s(a)};return e.jsx("div",{className:g("w-full h-48 bg-cover bg-center rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-all",r),style:{backgroundImage:`url(${t})`},onClick:i})},rt=({banners:t,className:a,autoPlay:r=!0,interval:s=5e3})=>{const[i,l]=c.useState(0),[d,n]=c.useState(!1),o=()=>{d||t.length<=1||(n(!0),l(u=>(u+1)%t.length),setTimeout(()=>{n(!1)},500))},p=()=>{d||t.length<=1||(n(!0),l(u=>(u-1+t.length)%t.length),setTimeout(()=>{n(!1)},500))};return c.useEffect(()=>{if(!r||t.length<=1)return;const u=setInterval(()=>{o()},s);return()=>clearInterval(u)},[r,s,i,d,t.length]),t.length===0?null:e.jsxs("div",{className:g("relative",a),children:[e.jsx("div",{className:"overflow-hidden rounded-lg",children:e.jsx("div",{className:"flex transition-transform duration-500 ease-in-out",style:{transform:`translateX(-${i*100}%)`},children:t.map((u,x)=>e.jsx("div",{className:"min-w-full",children:e.jsx(Ke,{image:u.image,link:u.link})},x))})}),t.length>1&&e.jsx("div",{className:"flex justify-center mt-4 space-x-2",children:t.map((u,x)=>e.jsx("button",{className:g("w-2 h-2 rounded-full transition-all duration-300",x===i?"bg-telegram-blue dark:bg-telegram-dark w-4":"bg-gray-300 dark:bg-gray-600"),onClick:()=>l(x)},x))}),t.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:p,className:"absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors","aria-label":"Previous banner",children:e.jsx(ge,{size:20,className:"text-gray-800 dark:text-gray-200"})}),e.jsx("button",{onClick:o,className:"absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors","aria-label":"Next banner",children:e.jsx(pe,{size:20,className:"text-gray-800 dark:text-gray-200"})})]})]})},lt=({product:t,className:a})=>{const r=z(),s=J(`${t.item_name}-${t.color_code}`,"product"),i=Array.isArray(t.sizes)?t.sizes.filter(o=>o.quantity>0).map(o=>o.size):[],l=t.photos&&t.photos.length>0,d=()=>{if(!l)return"";const o=t.photos.find(p=>p.photo_category==="front"&&p.photo_url);return o?o.photo_url:t.photos[0].photo_url},n=o=>{o.preventDefault(),Re("medium"),r(`/product/${t.sku}`)};return e.jsxs(w,{to:`/product/${t.sku}`,onClick:n,className:g("block bg-telegram-secondary-bg rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover-lift",a),children:[e.jsx("div",{className:"aspect-square bg-telegram-bg flex items-center justify-center",children:l?e.jsx("img",{src:d(),alt:t.item_name,className:"w-full h-full object-cover",onError:o=>{o.currentTarget.style.display="none",o.currentTarget.parentElement.innerHTML=`<span class="text-5xl animate-float">${s}</span>`}}):e.jsx("span",{className:"text-5xl animate-float",children:s})}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"flex justify-between items-start mb-1",children:[e.jsx("h3",{className:"font-medium text-telegram-text truncate",children:t.item_name}),t.brand&&e.jsx("span",{className:"text-xs text-telegram-hint bg-telegram-bg px-2 py-0.5 rounded-full",children:t.brand})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-sm text-telegram-hint",children:["Color: ",t.color_code]}),e.jsxs("span",{className:"font-medium text-telegram-button",children:["₽",typeof t.price_rub=="string"?parseFloat(t.price_rub).toLocaleString():t.price_rub.toLocaleString()]})]}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-1",children:[i.slice(0,3).map(o=>e.jsx("span",{className:"text-xs px-2 py-1 bg-telegram-bg text-telegram-text rounded-full",children:o},o)),i.length>3&&e.jsxs("span",{className:"text-xs px-2 py-1 bg-telegram-bg text-telegram-text rounded-full",children:["+",i.length-3]})]})]})]})},nt=({size:t="md",className:a,fillColor:r="fill-telegram-blue"})=>{const s={sm:"w-6 h-6",md:"w-10 h-10",lg:"w-16 h-16"};return e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs("svg",{className:g("animate-spin",s[t],a),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:r,d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})},it=({availableSizes:t,selectedSize:a,onChange:r,className:s})=>{const i=l=>{r(l)};return e.jsxs("div",{className:g("w-full",s),children:[e.jsx("h3",{className:"text-sm font-medium text-telegram-text mb-2",children:"Выберите размер"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:t.map(l=>e.jsx("button",{className:g("px-4 py-2 rounded-full border transition-all duration-200",a===l?"border-telegram-button bg-telegram-button/10 text-telegram-button":"border-telegram-hint/30 bg-telegram-bg text-telegram-text hover:border-telegram-hint/50"),onClick:()=>i(l),children:l},l))})]})},ot=({photos:t,productName:a,fallbackEmoji:r="📦",className:s=""})=>{const[i,l]=c.useState(0),d=n=>{const o=n.currentTarget;if(o.style.display="none",o.parentElement){const p=document.createElement("div");p.className="w-full h-full flex items-center justify-center",p.innerHTML=`<span class="text-8xl animate-float">${r}</span>`,o.parentElement.appendChild(p)}};return!t||t.length===0?e.jsx("div",{className:`w-full aspect-square bg-telegram-bg flex items-center justify-center ${s}`,children:e.jsx("span",{className:"text-8xl animate-float",children:r})}):e.jsxs("div",{className:`photo-swiper-container w-full aspect-square bg-telegram-bg relative ${s}`,children:[e.jsx(he,{modules:[fe,ye,be],spaceBetween:0,slidesPerView:1,pagination:{clickable:!0,type:"bullets",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},navigation:!0,onSlideChange:n=>{l(n.activeIndex)},className:"w-full h-full",children:t.map((n,o)=>e.jsx(je,{className:"w-full h-full",children:e.jsx("img",{src:n,alt:`${a} - ${o+1}`,className:"w-full h-full object-cover",onError:d})},o))}),t.length>1&&e.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/40 rounded-full px-3 py-1 z-10",children:e.jsxs("span",{className:"text-white text-xs",children:[i+1," / ",t.length]})})]})},Qe=I("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function Xe({className:t,variant:a,...r}){return e.jsx("div",{className:g(Qe({variant:a}),t),...r})}const dt=({order:t})=>{const[a,r]=c.useState(!1),s=n=>{switch(n.toLowerCase()){case"delivered":case"доставлен":return"bg-green-500";case"awaiting manager":case"ожидает менеджера":return"bg-yellow-500";case"awaiting purchase":case"ожидает покупки":return"bg-blue-500";case"cancelled":case"отменён":return"bg-red-500";default:return"bg-gray-500"}},i=n=>{switch(n.toLowerCase()){case"delivered":return"Доставлен";case"awaiting manager":return"Ожидает менеджера";case"awaiting purchase":return"Ожидает покупки";case"cancelled":return"Отменён";default:return n}},l=n=>n?(typeof n=="string"?parseFloat(n):n).toLocaleString("ru-RU",{maximumFractionDigits:2}):"0",d=n=>new Date(n).toLocaleString("ru-RU",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});return e.jsxs("div",{className:"bg-white dark:bg-sidebar-accent rounded-lg shadow-sm overflow-hidden",children:[e.jsx("div",{className:"p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-sidebar-primary/10 transition-colors",onClick:()=>r(!a),children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("h3",{className:"text-lg font-medium",children:["Заказ #",t.order_id]}),e.jsx(Xe,{className:`${s(t.status)} text-white`,children:i(t.status)})]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1",children:d(t.created_at)}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:[t.items.length," ",Ye(t.items.length)]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{className:"font-medium text-lg",children:["₽",l(t.final_price)]}),t.promocode&&e.jsx("p",{className:"text-sm text-telegram-blue",children:t.promocode.promocode_text}),e.jsx("button",{className:"mt-2 text-telegram-blue hover:text-telegram-dark transition-colors","aria-label":a?"Свернуть детали":"Развернуть детали",children:a?e.jsx(ve,{size:20}):e.jsx(Ne,{size:20})})]})]})}),a&&e.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800/50",children:e.jsxs("div",{className:"p-4 space-y-4",children:[t.items.map((n,o)=>e.jsx("div",{className:"border-b dark:border-gray-700 pb-3 last:border-0",children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:n.item_name}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Размер: ",n.size," ",n.quantity>1&&`× ${n.quantity}`]}),n.price_cny&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Цена (юани): ¥",l(n.price_cny)]}),n.sku&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Артикул: ",n.sku]})]}),e.jsx("div",{className:"text-right",children:e.jsxs("p",{className:"font-medium",children:["₽",l(n.sale_price)]})})]})},`${n.sku||"item"}-${o}`)),e.jsxs("div",{className:"pt-3 border-t dark:border-gray-700",children:[e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:"Сумма товаров"}),e.jsxs("span",{children:["₽",l(t.subtotal)]})]}),t.promocode&&e.jsxs("div",{className:"flex justify-between text-sm text-telegram-blue mb-1",children:[e.jsxs("span",{children:["Промокод: ",t.promocode.promocode_text,t.promocode.discount_percent&&t.promocode.discount_percent!=="null"&&` (-${t.promocode.discount_percent}%)`,t.promocode.discount_fixed&&` (-${t.promocode.discount_fixed}₽)`]}),e.jsxs("span",{children:["-₽",l(t.discount_amount)]})]}),t.dd_coins_used&&t.dd_coins_used!=="0"&&e.jsxs("div",{className:"flex justify-between text-sm text-yellow-500 mb-1",children:[e.jsx("span",{children:"Использовано DD Коинов"}),e.jsxs("span",{children:["-₽",l(t.dd_coins_used)]})]}),t.prepay_amount&&t.prepay_amount!=="0"&&e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:"Предоплата"}),e.jsxs("span",{children:["₽",l(t.prepay_amount)]})]}),e.jsxs("div",{className:"flex justify-between font-medium text-base mt-2",children:[e.jsx("span",{children:"Итого"}),e.jsxs("span",{children:["₽",l(t.final_price)]})]})]})]})})]})},Ye=t=>t%10===1&&t%100!==11?"товар":[2,3,4].includes(t%10)&&![12,13,14].includes(t%100)?"товара":"товаров",ct=({className:t})=>{const[a,r]=c.useState(null),[s,i]=c.useState(!0),{data:l,refetch:d}=q({queryKey:["referralInfo"],queryFn:()=>De(),staleTime:60*1e3,retry:1,retryDelay:1e3}),{data:n,refetch:o}=q({queryKey:["referralStats"],queryFn:()=>Le(),staleTime:60*1e3,retry:1,retryDelay:1e3});c.useEffect(()=>{(async()=>{i(!0),r(null);try{await Promise.all([d(),o()])}catch(N){console.error("Error loading referral data:",N),r("Failed to load referral information")}finally{i(!1)}})()},[d,o]);const p=async()=>{l&&await qe(l)},u=async()=>{if(l)try{await navigator.clipboard.writeText(l.telegram_deep_link),b.success("Referral link copied to clipboard")}catch(f){console.error("Error copying to clipboard:",f),b.error("Failed to copy referral link")}},x=()=>{i(!0),r(null),Promise.all([d(),o()]).finally(()=>i(!1))};return s?e.jsxs("div",{className:`p-4 text-center ${t}`,children:[e.jsx(k,{className:"animate-spin mx-auto h-6 w-6 text-telegram-blue"}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Loading referral information..."})]}):a?e.jsxs("div",{className:`p-4 text-center ${t}`,children:[e.jsx("p",{className:"text-sm text-red-600 dark:text-red-400 mb-2",children:a}),e.jsxs("button",{onClick:x,className:"inline-flex items-center text-sm text-telegram-blue hover:text-telegram-dark",children:[e.jsx(we,{className:"mr-1 h-4 w-4"}),"Retry"]})]}):e.jsxs("div",{className:`space-y-4 ${t}`,children:[e.jsxs("div",{className:"p-4 bg-telegram-secondary-bg rounded-lg",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Your Referral Link"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"text",readOnly:!0,value:(l==null?void 0:l.telegram_deep_link)||"",className:"flex-1 p-2 text-sm bg-white dark:bg-sidebar-primary/30 border border-gray-300 dark:border-gray-700 rounded-md"}),e.jsx("button",{onClick:u,className:"p-2 text-telegram-blue hover:text-telegram-dark",title:"Copy link",children:e.jsx(ke,{size:18})}),e.jsx("button",{onClick:p,className:"p-2 text-telegram-blue hover:text-telegram-dark",title:"Share link",children:e.jsx(_e,{size:18})})]})]}),e.jsxs("div",{className:"p-4 bg-telegram-secondary-bg rounded-lg",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Your Referrals"}),n!=null&&n.referred_users&&n.referred_users.length>0?e.jsx("div",{className:"space-y-2",children:n.referred_users.map(f=>e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:f.username?`@${f.username}`:`User ${f.id}`}),e.jsxs("span",{className:"text-gray-500 dark:text-gray-400",children:["Joined ",new Date(f.joined_at).toLocaleDateString()]})]},f.id))}):e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"No referrals yet. Share your link to start earning rewards!"})]})]})},mt=({initialEmail:t="",initialPhone:a="",initialAddress:r="",clientInfo:s=null,onComplete:i,onCancel:l})=>{const[d,n]=c.useState((s==null?void 0:s.email)||t),[o,p]=c.useState((s==null?void 0:s.phone_number)||a),[u,x]=c.useState((s==null?void 0:s.address)||r),[f,N]=c.useState(!1),[_,G]=c.useState([]),[y,E]=c.useState(""),[R,D]=c.useState(!1),Z=!!(d&&o&&u);c.useEffect(()=>{const m=async()=>{D(!0);try{const h=await Pe();if(G(h),h.length>0){const ae=h.find(T=>T.delivery_type==="courier"),re=h.find(T=>T.delivery_type==="shipping"),le=ae||re||h[0];E(le.delivery_type)}}catch(h){console.error("Failed to load delivery types:",h)}finally{D(!1)}},v=async()=>{if(!s)try{const h=await Ae();h&&(n(h.email||""),p(h.phone_number||""),x(h.address||""))}catch(h){console.error("Error fetching client info:",h)}};m(),v()},[s]);const C=_.find(m=>m.delivery_type===y),ee=C?{delivery_type:C.delivery_type,price_rub:C.price_rub}:void 0,j=y==="self_pickup",[S,L]=c.useState("");c.useEffect(()=>{const m=(s==null?void 0:s.address)||r;m&&L(m)},[r,s]),c.useEffect(()=>{x(j?"Москва, Ильменский проезд, 14к8":S)},[j,S]);const te=m=>{const v=m.target.value;x(v),j||L(v)},se=async m=>{m.preventDefault(),N(!0);try{if(!d||!o||!y){alert("Please fill in all required fields"),N(!1);return}await Fe(o,d,j?S:u)?i(ee):b.error("Failed to update client information")}catch(v){console.error("Error updating client info:",v),b.error("Failed to update client information")}finally{N(!1)}};return e.jsx("div",{className:"fixed inset-0 bg-black/30 dark:bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto",children:e.jsxs("div",{className:"bg-white dark:bg-sidebar-accent rounded-lg shadow-lg max-w-md w-full my-8",children:[e.jsxs("div",{className:"p-4 border-b dark:border-gray-700",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Заполните свои данные"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1",children:Z?"Пожалуйста, проверьте свои контактные данные.":"Нам нужны ваши контактные данные для обработки заказа."})]}),e.jsxs("form",{onSubmit:se,className:"p-4 space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium",children:["Электронная почта ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"email",value:d,onChange:m=>n(m.target.value),className:"w-full p-2 border border-gray-300 dark:border-gray-700 rounded dark:bg-sidebar-primary",placeholder:"ваша@почта.com",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium",children:["Номер телефона ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"tel",value:o,onChange:m=>p(m.target.value),className:"w-full p-2 border border-gray-300 dark:border-gray-700 rounded dark:bg-sidebar-primary",placeholder:"+7 (999) 123-4567",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium",children:["Способ доставки ",e.jsx("span",{className:"text-red-500",children:"*"})]}),R?e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(k,{className:"h-4 w-4 animate-spin"}),e.jsx("span",{children:"Загрузка вариантов доставки..."})]}):_.length===0?e.jsx("div",{className:"text-red-500",children:"Ошибка загрузки вариантов доставки. Пожалуйста, попробуйте позже."}):e.jsx("div",{className:"grid gap-2",children:_.map(m=>e.jsx("div",{className:`p-3 border rounded-lg cursor-pointer transition-colors ${y===m.delivery_type?"border-telegram-blue bg-telegram-blue/10":"border-gray-300 dark:border-gray-700"}`,onClick:()=>E(m.delivery_type),children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:m.delivery_code}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:m.delivery_info})]}),e.jsx("div",{className:"text-telegram-blue font-medium",children:m.price_rub>0?`₽${m.price_rub}`:"Бесплатно"})]})},m.delivery_type))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium",children:["Адрес доставки ",(y==="courier"||y==="shipping")&&e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("textarea",{value:u,onChange:te,className:`w-full p-2 border rounded resize-none h-24 ${j?"bg-gray-100 dark:bg-gray-800":"bg-white dark:bg-sidebar-primary"} dark:border-gray-700`,placeholder:"Укажите ваш полный адрес",disabled:j,required:y==="courier"||y==="shipping"}),j&&e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:"При самовывозе заказ можно забрать по указанному адресу"})]}),e.jsxs("div",{className:"flex justify-end space-x-2 pt-4 border-t dark:border-gray-700",children:[l&&e.jsx("button",{type:"button",onClick:l,className:"px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",disabled:f,children:"Отмена"}),e.jsx("button",{type:"submit",className:"px-4 py-2 text-sm font-medium bg-telegram-blue text-white rounded-md hover:bg-blue-600 disabled:opacity-50",disabled:f||!d||!o||R||!y||(y==="courier"||y==="shipping")&&!u,children:f?e.jsxs(e.Fragment,{children:[e.jsx(k,{className:"inline-block mr-2 h-4 w-4 animate-spin"}),"Сохранение..."]}):"Продолжить"})]})]})]})})},ut=({item:t,onRemove:a})=>{const{updateQuantity:r}=O(),s=()=>{$(),r(t.productId,t.size,t.quantity+1)},i=()=>{$(),t.quantity>1?r(t.productId,t.size,t.quantity-1):a()},l=()=>t.item_type==="preorder"?t.category_type==="shoes"||t.category_type==="sneakers"?"👟":t.category_type==="clothes"?"👕":t.category_type==="accessories"?"👜":"🔮":"👕";return e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white dark:bg-sidebar-accent rounded-lg shadow-sm",children:[e.jsx("div",{className:"flex-shrink-0 w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center text-4xl overflow-hidden",children:t.photo_url?e.jsx("img",{src:t.photo_url,alt:t.name,className:"w-full h-full object-cover",onError:d=>{d.currentTarget.style.display="none",d.currentTarget.parentElement.innerHTML=l()}}):l()}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900 dark:text-gray-100 truncate",children:t.name}),e.jsx("button",{onClick:a,className:"text-red-500 hover:text-red-700","aria-label":"Remove item",children:e.jsx(Ce,{size:16})})]}),t.item_type==="preorder"?e.jsxs("div",{className:"mt-1 text-xs text-gray-600 dark:text-gray-400",children:[e.jsxs("p",{className:"truncate",children:["URL: ",t.dewu_url]}),e.jsxs("p",{children:["Размер: ",t.size||"Не указан"]}),e.jsxs("p",{children:["Категория: ",t.category_type==="shoes"||t.category_type==="sneakers"?"Обувь":t.category_type==="clothes"?"Одежда":t.category_type==="accessories"?"Аксессуары":t.category_type]}),e.jsxs("p",{children:["Доставка: ",(t.shipping_type||t.delivery_type)==="cargo"?"Автомобиль":"Самолет"]})]}):e.jsxs("div",{className:"mt-1 text-xs text-gray-600 dark:text-gray-400",children:[e.jsx("p",{children:t.color&&`Цвет: ${t.color}`}),e.jsxs("p",{children:["Размер: ",t.size]})]}),e.jsxs("div",{className:"flex justify-between items-center mt-2",children:[e.jsxs("div",{className:"text-sm font-medium text-telegram-blue",children:["₽",(t.sale_price||t.price).toLocaleString()]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:i,className:"p-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700","aria-label":"Decrease quantity",children:e.jsx(Se,{size:14})}),e.jsx("span",{className:"text-sm font-medium w-6 text-center",children:t.quantity}),e.jsx("button",{onClick:s,className:"p-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700","aria-label":"Increase quantity",children:e.jsx(Te,{size:14})})]})]})]})]})},xt=({className:t,originalPrice:a,onPromocodeApplied:r,onPromocodeRemoved:s,currentPromocode:i})=>{const[l,d]=c.useState(""),[n,o]=c.useState(!1),p=async u=>{if(u.preventDefault(),!l.trim()){b.error("Пожалуйста, введите промокод");return}o(!0);try{const x=await Be(l.trim());if(x.success&&x.promocode){const f=Ve(a,x.promocode);r(x.promocode,f),b.success("Промокод успешно применен!")}else b.error(x.message||"Недействительный промокод")}catch(x){console.error("Error validating promocode:",x),b.error("Не удалось проверить промокод")}finally{o(!1)}};return i?e.jsxs("div",{className:`flex items-center justify-between p-3 bg-telegram-secondary-bg rounded-lg ${t}`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx($e,{className:"text-telegram-blue",size:16}),e.jsx("span",{className:"text-sm font-medium",children:i.promocode_text})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:i.discount_fixed?`-${i.discount_fixed}₽`:i.discount_percent&&i.discount_percent!=="null"?`-${i.discount_percent}%`:""}),e.jsx("button",{onClick:s,className:"text-sm text-red-500 hover:text-red-600",children:"Удалить"})]})]}):e.jsxs("form",{onSubmit:p,className:`flex gap-2 ${t}`,children:[e.jsx("input",{type:"text",value:l,onChange:u=>d(u.target.value),placeholder:"Введите промокод",className:"flex-1 p-2 text-sm bg-white dark:bg-sidebar-primary/30 border border-gray-300 dark:border-gray-700 rounded-md",disabled:n}),e.jsx("button",{type:"submit",disabled:n||!l.trim(),className:"px-4 py-2 bg-telegram-blue text-white rounded-md disabled:opacity-70 flex items-center",children:n?e.jsxs(e.Fragment,{children:[e.jsx(k,{size:16,className:"animate-spin mr-2"}),"Проверка..."]}):"Применить"})]})};export{rt as B,ut as C,nt as L,dt as O,st as P,ct as R,it as S,tt as T,at as U,lt as a,ot as b,xt as c,mt as d,Ze as e,et as f};
//# sourceMappingURL=components-Tq64XxzT.js.map
