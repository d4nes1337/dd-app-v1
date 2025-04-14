import{r as c,j as e,V as A,R as F,A as B,C as V,X as ie,T as U,D as I,c as M,P as oe,a as O,b as de,d as H,e as ce,u as ue,f as E,L as w,H as me,S as xe,g as ge,h as pe,i as he,k as fe,l as ye,N as be,m as je,n as ve,o as Ne,p as we,E as ke,q as P,s as k,t as _e,v as Ce,w as Se,J as b,x as Te,M as $e,y as ze,z as Ee}from"./vendor-CLc3wUjv.js";import{c as p,u as Re,a as J,h as z,g as K,b as De,d as Le,e as qe,f as Pe,s as Ae,i as Fe,j as Be,k as Ve,v as Ue,l as Ie}from"./main-B_XIyy-_.js";const Me=oe,Q=c.forwardRef(({className:t,...a},l)=>e.jsx(A,{ref:l,className:p("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...a}));Q.displayName=A.displayName;const Oe=M("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),X=c.forwardRef(({className:t,variant:a,...l},s)=>e.jsx(F,{ref:s,className:p(Oe({variant:a}),t),...l}));X.displayName=F.displayName;const He=c.forwardRef(({className:t,...a},l)=>e.jsx(B,{ref:l,className:p("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...a}));He.displayName=B.displayName;const Y=c.forwardRef(({className:t,...a},l)=>e.jsx(V,{ref:l,className:p("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...a,children:e.jsx(ie,{className:"h-4 w-4"})}));Y.displayName=V.displayName;const W=c.forwardRef(({className:t,...a},l)=>e.jsx(U,{ref:l,className:p("text-sm font-semibold",t),...a}));W.displayName=U.displayName;const G=c.forwardRef(({className:t,...a},l)=>e.jsx(I,{ref:l,className:p("text-sm opacity-90",t),...a}));G.displayName=I.displayName;function Ze(){const{toasts:t}=Re();return e.jsxs(Me,{children:[t.map(function({id:a,title:l,description:s,action:i,...n}){return e.jsxs(X,{...n,children:[e.jsxs("div",{className:"grid gap-1",children:[l&&e.jsx(W,{children:l}),s&&e.jsx(G,{children:s})]}),i,e.jsx(Y,{})]},a)}),e.jsx(Q,{})]})}const et=({...t})=>{const{theme:a="system"}=O();return e.jsx(de,{theme:a,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})},tt=ce,Je=c.forwardRef(({className:t,sideOffset:a=4,...l},s)=>e.jsx(H,{ref:s,sideOffset:a,className:p("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...l}));Je.displayName=H.displayName;const Ke=()=>{const t=ue(),a=E(),{itemCount:l}=J();O();const s=n=>t.pathname===n,i=n=>o=>{o.preventDefault(),s(n)||(z(),a(n))};return e.jsx("nav",{className:"fixed bottom-0 left-0 right-0 z-50 bottom-nav-bar pb-4",children:e.jsxs("div",{className:"grid grid-cols-3 w-full max-w-md mx-auto h-24",children:[e.jsx(w,{to:"/",onClick:i("/"),className:p("flex items-center justify-center transition-all duration-200",s("/")?"text-telegram-button active":"text-telegram-hint"),"aria-current":s("/")?"page":void 0,children:e.jsx(me,{size:32})}),e.jsx(w,{to:"/shop",onClick:i("/shop"),className:p("flex items-center justify-center relative transition-all duration-200",s("/shop")?"text-telegram-button active":"text-telegram-hint"),"aria-current":s("/shop")?"page":void 0,children:e.jsxs("div",{className:"relative",children:[e.jsx(xe,{size:32}),l>0&&e.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full badge",children:l})]})}),e.jsx(w,{to:"/calculator",onClick:i("/calculator"),className:p("flex items-center justify-center transition-all duration-200",s("/calculator")?"text-telegram-button active":"text-telegram-hint"),"aria-current":s("/calculator")?"page":void 0,children:e.jsx(ge,{size:32})})]})})},st=({children:t,className:a,fullHeight:l=!1})=>e.jsxs("div",{className:p("w-full pb-52 max-w-md mx-auto",l?"min-h-screen":"",a),style:{backgroundColor:"transparent"},children:[e.jsx("div",{className:"animate-fade-in",children:t}),e.jsx(Ke,{})]}),Qe=({emoji:t,username:a,size:l="md",className:s,randomize:i=!1})=>{const[n,o]=c.useState(t||"😊");c.useEffect(()=>{t?o(t):a?o(K(a,"avatar")):i&&o(De())},[t,a,i]);const u={sm:"w-8 h-8 text-lg",md:"w-12 h-12 text-2xl",lg:"w-16 h-16 text-3xl"};return e.jsx("div",{className:p("flex items-center justify-center rounded-full bg-telegram-light animate-pulse-slow",u[l],s),children:e.jsx("span",{className:"animate-float",children:n})})},rt=({user:t,emoji:a,size:l="md",className:s=""})=>{const n={sm:"w-8 h-8",md:"w-12 h-12",lg:"w-16 h-16"}[l];return t!=null&&t.photo_url?e.jsx("div",{className:`${n} rounded-full overflow-hidden ${s}`,children:e.jsx("img",{src:t.photo_url,alt:`${t.first_name}'s profile`,className:"w-full h-full object-cover",onError:o=>{console.error("Error loading profile image, falling back to emoji avatar"),o.currentTarget.style.display="none"}})}):e.jsx(Qe,{emoji:a,size:l,className:s})},Xe=({image:t,link:a,external:l=!1,className:s})=>{const i=E(),n=()=>{a&&(l?window.open(a,"_blank","noopener,noreferrer"):i(a))};return e.jsx("div",{className:p("w-full h-48 bg-cover bg-center rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-all",s),style:{backgroundImage:`url(${t})`},onClick:n})},at=({banners:t,className:a,autoPlay:l=!0,interval:s=5e3})=>{const[i,n]=c.useState(0),[o,u]=c.useState(!1),d=()=>{o||t.length<=1||(u(!0),n(m=>(m+1)%t.length),setTimeout(()=>{u(!1)},500))},r=()=>{o||t.length<=1||(u(!0),n(m=>(m-1+t.length)%t.length),setTimeout(()=>{u(!1)},500))};return c.useEffect(()=>{if(!l||t.length<=1)return;const m=setInterval(()=>{d()},s);return()=>clearInterval(m)},[l,s,i,o,t.length]),t.length===0?null:e.jsxs("div",{className:p("relative",a),children:[e.jsx("div",{className:"overflow-hidden rounded-lg",children:e.jsx("div",{className:"flex transition-transform duration-500 ease-in-out",style:{transform:`translateX(-${i*100}%)`},children:t.map((m,g)=>e.jsx("div",{className:"min-w-full",children:e.jsx(Xe,{image:m.image,link:m.link,external:m.external})},g))})}),t.length>1&&e.jsx("div",{className:"flex justify-center mt-4 space-x-2",children:t.map((m,g)=>e.jsx("button",{className:p("w-2 h-2 rounded-full transition-all duration-300",g===i?"bg-telegram-blue dark:bg-telegram-dark w-4":"bg-gray-300 dark:bg-gray-600"),onClick:()=>n(g)},g))}),t.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:r,className:"absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors","aria-label":"Previous banner",children:e.jsx(pe,{size:20,className:"text-gray-800 dark:text-gray-200"})}),e.jsx("button",{onClick:d,className:"absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors","aria-label":"Next banner",children:e.jsx(he,{size:20,className:"text-gray-800 dark:text-gray-200"})})]})]})},lt=({size:t="md",className:a,fillColor:l="fill-telegram-blue"})=>{const s={sm:"w-6 h-6",md:"w-10 h-10",lg:"w-16 h-16"};return e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs("svg",{className:p("animate-spin",s[t],a),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:l,d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})},nt=({product:t,className:a})=>{const l=E(),s=K(`${t.item_name}-${t.color_code}`,"product"),i=Array.isArray(t.sizes)?t.sizes.filter(d=>d.quantity>0).map(d=>d.size):[],n=t.photos&&t.photos.length>0,o=()=>{if(!n)return"";const d=t.photos.find(r=>r.photo_category==="front"&&r.photo_url);return d?d.photo_url:t.photos[0].photo_url},u=d=>{d.preventDefault(),Le("medium"),l(`/product/${t.sku}`)};return e.jsxs(w,{to:`/product/${t.sku}`,onClick:u,className:p("block bg-telegram-secondary-bg rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover-lift",a),children:[e.jsx("div",{className:"aspect-square bg-telegram-bg flex items-center justify-center",children:n?e.jsx("img",{src:o(),alt:t.item_name,className:"w-full h-full object-cover",onError:d=>{d.currentTarget.style.display="none",d.currentTarget.parentElement.innerHTML=`<span class="text-5xl animate-float">${s}</span>`}}):e.jsx("span",{className:"text-5xl animate-float",children:s})}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"flex justify-between items-start mb-1",children:[e.jsx("h3",{className:"font-medium text-telegram-text truncate",children:t.item_name}),t.brand&&e.jsx("span",{className:"text-xs text-telegram-hint bg-telegram-bg px-2 py-0.5 rounded-full",children:t.brand})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-sm text-telegram-hint",children:["Color: ",t.color_code]}),e.jsxs("span",{className:"font-medium text-telegram-button",children:["₽",typeof t.price_rub=="string"?parseFloat(t.price_rub).toLocaleString():t.price_rub.toLocaleString()]})]}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-1",children:[i.slice(0,3).map(d=>e.jsx("span",{className:"text-xs px-2 py-1 bg-telegram-bg text-telegram-text rounded-full",children:d},d)),i.length>3&&e.jsxs("span",{className:"text-xs px-2 py-1 bg-telegram-bg text-telegram-text rounded-full",children:["+",i.length-3]})]})]})]})},it=({availableSizes:t,selectedSize:a,onChange:l,className:s})=>{const i=n=>{l(n)};return e.jsxs("div",{className:p("w-full",s),children:[e.jsx("h3",{className:"text-sm font-medium text-telegram-text mb-2",children:"Выберите размер"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:t.map(n=>e.jsx("button",{className:p("px-4 py-2 rounded-full border transition-all duration-200",a===n?"border-telegram-button bg-telegram-button/10 text-telegram-button":"border-telegram-hint/30 bg-telegram-bg text-telegram-text hover:border-telegram-hint/50"),onClick:()=>i(n),children:n},n))})]})},ot=({photos:t,productName:a,fallbackEmoji:l="📦",className:s=""})=>{const[i,n]=c.useState(0),o=u=>{const d=u.currentTarget;if(d.style.display="none",d.parentElement){const r=document.createElement("div");r.className="w-full h-full flex items-center justify-center",r.innerHTML=`<span class="text-8xl animate-float">${l}</span>`,d.parentElement.appendChild(r)}};return!t||t.length===0?e.jsx("div",{className:`w-full aspect-square bg-telegram-bg flex items-center justify-center ${s}`,children:e.jsx("span",{className:"text-8xl animate-float",children:l})}):e.jsxs("div",{className:`photo-swiper-container w-full aspect-square bg-telegram-bg relative ${s}`,children:[e.jsx(fe,{modules:[ye,be,je],spaceBetween:0,slidesPerView:1,pagination:{clickable:!0,type:"bullets",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},navigation:!0,onSlideChange:u=>{n(u.activeIndex)},className:"w-full h-full",children:t.map((u,d)=>e.jsx(ve,{className:"w-full h-full",children:e.jsx("img",{src:u,alt:`${a} - ${d+1}`,className:"w-full h-full object-cover",onError:o})},d))}),t.length>1&&e.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/40 rounded-full px-3 py-1 z-10",children:e.jsxs("span",{className:"text-white text-xs",children:[i+1," / ",t.length]})})]})},Ye=M("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function $({className:t,variant:a,...l}){return e.jsx("div",{className:p(Ye({variant:a}),t),...l})}const dt=({order:t})=>{const[a,l]=c.useState(!1),s={...t,delivery_type:t.delivery_type||"",delivery_price:t.delivery_price||"0",delivery_address:t.delivery_address||null,delivery_info:t.delivery_info||null,delivery_code:t.delivery_code||null,items:t.items.map(r=>({...r,id:r.id||0,type:r.type||"stock",status:r.status||t.status,dewu_url:r.dewu_url||null,shipping_type:r.shipping_type||null,category_type:r.category_type||null,weight_category:r.weight_category||null,color_code:r.color_code||null}))},i=r=>{switch(r.toLowerCase()){case"delivered":case"доставлен":return"bg-green-500";case"awaiting manager":case"ожидает менеджера":return"bg-yellow-500";case"awaiting purchase":case"ожидает покупки":return"bg-blue-500";case"cancelled":case"отменён":return"bg-red-500";default:return"bg-gray-500"}},n=r=>{switch(r.toLowerCase()){case"delivered":return"Доставлен";case"awaiting manager":return"Ожидает менеджера";case"awaiting purchase":return"Ожидает покупки";case"cancelled":return"Отменён";default:return r}},o=r=>r?(typeof r=="string"?parseFloat(r):r).toLocaleString("ru-RU",{maximumFractionDigits:2}):"0",u=r=>new Date(r).toLocaleString("ru-RU",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),d=r=>r%10===1&&r%100!==11?"товар":[2,3,4].includes(r%10)&&![12,13,14].includes(r%100)?"товара":"товаров";return e.jsxs("div",{className:"bg-white dark:bg-sidebar-accent rounded-lg shadow-sm overflow-hidden",children:[e.jsx("div",{className:"p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-sidebar-primary/10 transition-colors",onClick:()=>l(!a),children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("h3",{className:"text-lg font-medium",children:["Заказ #",s.order_id]}),e.jsx($,{className:`${i(s.status)} text-white`,children:n(s.status)})]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1",children:u(s.created_at)}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:[s.items.length," ",d(s.items.length)]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{className:"font-medium text-lg",children:["₽",o(s.final_price)]}),s.promocode&&e.jsx("p",{className:"text-sm text-telegram-blue",children:s.promocode.promocode_text}),e.jsx("button",{className:"mt-2 text-telegram-blue hover:text-telegram-dark transition-colors","aria-label":a?"Свернуть детали":"Развернуть детали",children:a?e.jsx(Ne,{size:20}):e.jsx(we,{size:20})})]})]})}),a&&e.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800/50",children:e.jsxs("div",{className:"p-4 space-y-4",children:[s.items.map((r,m)=>e.jsx("div",{className:"border-b dark:border-gray-700 pb-3 last:border-0",children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap gap-2 mb-1",children:[e.jsx($,{className:"bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",children:r.type==="stock"?"Сток":"Предзаказ"}),r.status&&e.jsx($,{className:`${i(r.status)} text-white`,children:n(r.status)})]}),e.jsx("p",{className:"font-medium",children:r.item_name||(r.dewu_url?e.jsxs("a",{href:r.dewu_url,target:"_blank",rel:"noopener noreferrer",className:"text-telegram-blue hover:underline flex items-center",children:[r.dewu_url.substring(0,30),r.dewu_url.length>30?"...":"",e.jsx(ke,{size:14,className:"ml-1"})]}):"Товар")}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Размер: ",r.size," ",r.quantity>1&&`× ${r.quantity}`]}),r.type==="preorder"&&r.price_cny&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Цена (юани): ¥",o(r.price_cny)]}),r.sku&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Артикул: ",r.sku]}),r.shipping_type&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Тип доставки: ",r.shipping_type]}),r.category_type&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Категория: ",r.category_type]}),r.weight_category&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Вес: ",r.weight_category]}),r.color_code&&e.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("span",{children:"Цвет:"}),e.jsx("div",{className:"w-4 h-4 rounded-full border border-gray-300",style:{backgroundColor:r.color_code}})]})]}),e.jsx("div",{className:"text-right",children:e.jsxs("p",{className:"font-medium",children:["₽",o(r.price_rub)]})})]})},`item-${m}-${r.id}`)),e.jsxs("div",{className:"pt-3 border-t dark:border-gray-700",children:[e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:"Сумма товаров"}),e.jsxs("span",{children:["₽",o(s.subtotal)]})]}),s.delivery_code&&e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsxs("span",{className:"text-gray-600 dark:text-gray-400",children:["Доставка: ",s.delivery_code]}),e.jsx("span",{children:s.delivery_price==="0"?"Бесплатно":`₽${o(s.delivery_price)}`})]}),s.promocode&&e.jsxs("div",{className:"flex justify-between text-sm text-telegram-blue mb-1",children:[e.jsxs("span",{children:["Промокод: ",s.promocode.promocode_text,s.promocode.discount_percent&&s.promocode.discount_percent!=="null"&&` (-${s.promocode.discount_percent}%)`,s.promocode.discount_fixed&&` (-${s.promocode.discount_fixed}₽)`]}),e.jsxs("span",{children:["-₽",o(s.discount_amount)]})]}),s.discount_amount&&s.discount_amount!=="0"&&!s.promocode&&e.jsxs("div",{className:"flex justify-between text-sm text-telegram-blue mb-1",children:[e.jsx("span",{children:"Скидка"}),e.jsxs("span",{children:["-₽",o(s.discount_amount)]})]}),s.dd_coins_used&&s.dd_coins_used!=="0"&&e.jsxs("div",{className:"flex justify-between text-sm text-yellow-500 mb-1",children:[e.jsx("span",{children:"Использовано DD Коинов"}),e.jsxs("span",{children:["-₽",o(s.dd_coins_used)]})]}),s.prepay_amount&&s.prepay_amount!=="0"&&e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:"Предоплата"}),e.jsxs("span",{children:["₽",o(s.prepay_amount)]})]}),e.jsxs("div",{className:"flex justify-between font-medium text-base mt-2",children:[e.jsx("span",{children:"Итого"}),e.jsxs("span",{children:["₽",o(s.final_price)]})]})]})]})})]})},ct=({className:t})=>{const[a,l]=c.useState(null),[s,i]=c.useState(!0),{data:n,refetch:o}=P({queryKey:["referralInfo"],queryFn:()=>qe(),staleTime:60*1e3,retry:1,retryDelay:1e3}),{data:u,refetch:d}=P({queryKey:["referralStats"],queryFn:()=>Pe(),staleTime:60*1e3,retry:1,retryDelay:1e3});c.useEffect(()=>{(async()=>{i(!0),l(null);try{await Promise.all([o(),d()])}catch(N){console.error("Error loading referral data:",N),l("Failed to load referral information")}finally{i(!1)}})()},[o,d]);const r=async()=>{n&&await Ae(n)},m=async()=>{if(n)try{await navigator.clipboard.writeText(n.telegram_deep_link),b.success("Referral link copied to clipboard")}catch(f){console.error("Error copying to clipboard:",f),b.error("Failed to copy referral link")}},g=()=>{i(!0),l(null),Promise.all([o(),d()]).finally(()=>i(!1))};return s?e.jsxs("div",{className:`p-4 text-center ${t}`,children:[e.jsx(k,{className:"animate-spin mx-auto h-6 w-6 text-telegram-blue"}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Loading referral information..."})]}):a?e.jsxs("div",{className:`p-4 text-center ${t}`,children:[e.jsx("p",{className:"text-sm text-red-600 dark:text-red-400 mb-2",children:a}),e.jsxs("button",{onClick:g,className:"inline-flex items-center text-sm text-telegram-blue hover:text-telegram-dark",children:[e.jsx(_e,{className:"mr-1 h-4 w-4"}),"Retry"]})]}):e.jsxs("div",{className:`space-y-4 ${t}`,children:[e.jsxs("div",{className:"p-4 bg-telegram-secondary-bg rounded-lg",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Your Referral Link"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"text",readOnly:!0,value:(n==null?void 0:n.telegram_deep_link)||"",className:"flex-1 p-2 text-sm bg-white dark:bg-sidebar-primary/30 border border-gray-300 dark:border-gray-700 rounded-md"}),e.jsx("button",{onClick:m,className:"p-2 text-telegram-blue hover:text-telegram-dark",title:"Copy link",children:e.jsx(Ce,{size:18})}),e.jsx("button",{onClick:r,className:"p-2 text-telegram-blue hover:text-telegram-dark",title:"Share link",children:e.jsx(Se,{size:18})})]})]}),e.jsxs("div",{className:"p-4 bg-telegram-secondary-bg rounded-lg",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Your Referrals"}),u!=null&&u.referred_users&&u.referred_users.length>0?e.jsx("div",{className:"space-y-2",children:u.referred_users.map(f=>e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:f.username?`@${f.username}`:`User ${f.id}`}),e.jsxs("span",{className:"text-gray-500 dark:text-gray-400",children:["Joined ",new Date(f.joined_at).toLocaleDateString()]})]},f.id))}):e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"No referrals yet. Share your link to start earning rewards!"})]})]})},ut=({initialEmail:t="",initialPhone:a="",initialAddress:l="",clientInfo:s=null,onComplete:i,onCancel:n})=>{const[o,u]=c.useState((s==null?void 0:s.email)||t),[d,r]=c.useState((s==null?void 0:s.phone_number)||a),[m,g]=c.useState((s==null?void 0:s.address)||l),[f,N]=c.useState(!1),[_,Z]=c.useState([]),[y,R]=c.useState(""),[D,L]=c.useState(!1),ee=!!(o&&d&&m);c.useEffect(()=>{const x=async()=>{L(!0);try{const h=await Fe();if(Z(h),h.length>0){const ae=h.find(T=>T.delivery_type==="courier"),le=h.find(T=>T.delivery_type==="shipping"),ne=ae||le||h[0];R(ne.delivery_type)}}catch(h){console.error("Failed to load delivery types:",h)}finally{L(!1)}},v=async()=>{if(!s)try{const h=await Be();h&&(u(h.email||""),r(h.phone_number||""),g(h.address||""))}catch(h){console.error("Error fetching client info:",h)}};x(),v()},[s]);const C=_.find(x=>x.delivery_type===y),te=C?{delivery_type:C.delivery_type,price_rub:C.price_rub}:void 0,j=y==="self_pickup",[S,q]=c.useState("");c.useEffect(()=>{const x=(s==null?void 0:s.address)||l;x&&q(x)},[l,s]),c.useEffect(()=>{g(j?"Москва, Ильменский проезд, 14к8":S)},[j,S]);const se=x=>{const v=x.target.value;g(v),j||q(v)},re=async x=>{x.preventDefault(),N(!0);try{if(!o||!d||!y){alert("Please fill in all required fields"),N(!1);return}await Ve(d,o,j?S:m)?i(te):b.error("Failed to update client information")}catch(v){console.error("Error updating client info:",v),b.error("Failed to update client information")}finally{N(!1)}};return e.jsx("div",{className:"fixed inset-0 bg-black/30 dark:bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto",children:e.jsxs("div",{className:"bg-white dark:bg-sidebar-accent rounded-lg shadow-lg max-w-md w-full my-8",children:[e.jsxs("div",{className:"p-4 border-b dark:border-gray-700",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Заполните свои данные"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1",children:ee?"Пожалуйста, проверьте свои контактные данные.":"Нам нужны ваши контактные данные для обработки заказа."})]}),e.jsxs("form",{onSubmit:re,className:"p-4 space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium",children:["Электронная почта ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"email",value:o,onChange:x=>u(x.target.value),className:"w-full p-2 border border-gray-300 dark:border-gray-700 rounded dark:bg-sidebar-primary",placeholder:"ваша@почта.com",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium",children:["Номер телефона ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"tel",value:d,onChange:x=>r(x.target.value),className:"w-full p-2 border border-gray-300 dark:border-gray-700 rounded dark:bg-sidebar-primary",placeholder:"+7 (999) 123-4567",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium",children:["Способ доставки ",e.jsx("span",{className:"text-red-500",children:"*"})]}),D?e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(k,{className:"h-4 w-4 animate-spin"}),e.jsx("span",{children:"Загрузка вариантов доставки..."})]}):_.length===0?e.jsx("div",{className:"text-red-500",children:"Ошибка загрузки вариантов доставки. Пожалуйста, попробуйте позже."}):e.jsx("div",{className:"grid gap-2",children:_.map(x=>e.jsx("div",{className:`p-3 border rounded-lg cursor-pointer transition-colors ${y===x.delivery_type?"border-telegram-blue bg-telegram-blue/10":"border-gray-300 dark:border-gray-700"}`,onClick:()=>R(x.delivery_type),children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:x.delivery_code}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:x.delivery_info})]}),e.jsx("div",{className:"text-telegram-blue font-medium",children:x.price_rub>0?`₽${x.price_rub}`:"Бесплатно"})]})},x.delivery_type))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium",children:["Адрес доставки ",(y==="courier"||y==="shipping")&&e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("textarea",{value:m,onChange:se,className:`w-full p-2 border rounded resize-none h-24 ${j?"bg-gray-100 dark:bg-gray-800":"bg-white dark:bg-sidebar-primary"} dark:border-gray-700`,placeholder:"Укажите ваш полный адрес",disabled:j,required:y==="courier"||y==="shipping"}),j&&e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:"При самовывозе заказ можно забрать по указанному адресу"})]}),e.jsxs("div",{className:"flex justify-end space-x-2 pt-4 border-t dark:border-gray-700",children:[n&&e.jsx("button",{type:"button",onClick:n,className:"px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",disabled:f,children:"Отмена"}),e.jsx("button",{type:"submit",className:"px-4 py-2 text-sm font-medium bg-telegram-blue text-white rounded-md hover:bg-blue-600 disabled:opacity-50",disabled:f||!o||!d||D||!y||(y==="courier"||y==="shipping")&&!m,children:f?e.jsxs(e.Fragment,{children:[e.jsx(k,{className:"inline-block mr-2 h-4 w-4 animate-spin"}),"Сохранение..."]}):"Продолжить"})]})]})]})})},mt=({item:t,onRemove:a})=>{const{updateQuantity:l}=J(),s=()=>{z(),l(t.productId,t.size,t.quantity+1)},i=()=>{z(),t.quantity>1?l(t.productId,t.size,t.quantity-1):a()},n=()=>t.item_type==="preorder"?t.category_type==="sneakers"?"👟":t.category_type==="clothes"?"👕":t.category_type==="accessories"?"👜":t.category_type==="shirt"?"👕":"🔮":"👕";return e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-white dark:bg-sidebar-accent rounded-lg shadow-sm",children:[e.jsx("div",{className:"flex-shrink-0 w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center text-4xl overflow-hidden",children:t.photo_url?e.jsx("img",{src:t.photo_url,alt:t.name,className:"w-full h-full object-cover",onError:o=>{o.currentTarget.style.display="none",o.currentTarget.parentElement.innerHTML=n()}}):n()}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900 dark:text-gray-100 truncate",children:t.name}),e.jsx("button",{onClick:a,className:"text-red-500 hover:text-red-700","aria-label":"Remove item",children:e.jsx(Te,{size:16})})]}),t.item_type==="preorder"?e.jsxs("div",{className:"mt-1 text-xs text-gray-600 dark:text-gray-400",children:[e.jsxs("p",{className:"truncate",children:["URL: ",t.dewu_url]}),e.jsxs("p",{children:["Размер: ",t.size||"Не указан"]}),e.jsxs("p",{children:["Категория: ",t.category_type==="sneakers"?"Обувь":t.category_type==="clothes"?"Одежда":t.category_type==="accessories"?"Аксессуары":t.category_type==="shirt"?"Рубашка":t.category_type]}),e.jsxs("p",{children:["Доставка: ",(t.shipping_type||t.delivery_type)==="cargo"?"Автомобиль":"Самолет"]})]}):e.jsxs("div",{className:"mt-1 text-xs text-gray-600 dark:text-gray-400",children:[e.jsx("p",{children:t.color&&`Цвет: ${t.color}`}),e.jsxs("p",{children:["Размер: ",t.size]})]}),e.jsxs("div",{className:"flex justify-between items-center mt-2",children:[e.jsxs("div",{className:"text-sm font-medium text-telegram-blue",children:["₽",(t.sale_price||t.price).toLocaleString()]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:i,className:"p-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700","aria-label":"Decrease quantity",children:e.jsx($e,{size:14})}),e.jsx("span",{className:"text-sm font-medium w-6 text-center",children:t.quantity}),e.jsx("button",{onClick:s,className:"p-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700","aria-label":"Increase quantity",children:e.jsx(ze,{size:14})})]})]})]})]})},xt=({className:t,originalPrice:a,onPromocodeApplied:l,onPromocodeRemoved:s,currentPromocode:i})=>{const[n,o]=c.useState(""),[u,d]=c.useState(!1),r=async m=>{if(m.preventDefault(),!n.trim()){b.error("Пожалуйста, введите промокод");return}d(!0);try{const g=await Ue(n.trim());if(g.success&&g.promocode){const f=Ie(a,g.promocode);l(g.promocode,f),b.success("Промокод успешно применен!")}else b.error(g.message||"Недействительный промокод")}catch(g){console.error("Error validating promocode:",g),b.error("Не удалось проверить промокод")}finally{d(!1)}};return i?e.jsxs("div",{className:`flex items-center justify-between p-3 bg-telegram-secondary-bg rounded-lg ${t}`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ee,{className:"text-telegram-blue",size:16}),e.jsx("span",{className:"text-sm font-medium",children:i.promocode_text})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:i.discount_fixed?`-${i.discount_fixed}₽`:i.discount_percent&&i.discount_percent!=="null"?`-${i.discount_percent}%`:""}),e.jsx("button",{onClick:s,className:"text-sm text-red-500 hover:text-red-600",children:"Удалить"})]})]}):e.jsxs("form",{onSubmit:r,className:`flex gap-2 ${t}`,children:[e.jsx("input",{type:"text",value:n,onChange:m=>o(m.target.value),placeholder:"Введите промокод",className:"flex-1 p-2 text-sm bg-white dark:bg-sidebar-primary/30 border border-gray-300 dark:border-gray-700 rounded-md",disabled:u}),e.jsx("button",{type:"submit",disabled:u||!n.trim(),className:"px-4 py-2 bg-telegram-blue text-white rounded-md disabled:opacity-70 flex items-center",children:u?e.jsxs(e.Fragment,{children:[e.jsx(k,{size:16,className:"animate-spin mr-2"}),"Проверка..."]}):"Применить"})]})};export{at as B,mt as C,lt as L,dt as O,st as P,ct as R,it as S,tt as T,rt as U,nt as a,ot as b,xt as c,ut as d,Ze as e,et as f};
//# sourceMappingURL=components-C4yRiS-E.js.map
