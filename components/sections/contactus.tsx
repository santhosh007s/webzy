"use client";

// import { useEffect } from "react";
// import Cal, { getCalApi } from "@calcom/embed-react";

// export default function ContactUs() {
//   useEffect(() => {
//     (async () => {
//       const cal = await getCalApi({ namespace: "secret" });
//       cal("ui", {
//         theme: "light",
//         layout: "month_view",
//         hideEventTypeDetails: false,
//       });
//     })();
//   }, []);

//   return (
//     <div style={{ width: "100%", minHeight: "600px", overflowY: "auto" }}>
//       <Cal
//         namespace="secret"
//         calLink="santhosh-perumal-qwqkgl/secret"
//         style={{ width: "100%", height: "100%" }}
//         config={{
//           theme: "light",
//           layout: "month_view",
//         }}
//       />
//     </div>
//   );
// }

/* First make sure that you have installed the package */

  /* If you are using yarn */
  // yarn add @calcom/embed-react

  /* If you are using npm */
  // npm install @calcom/embed-react
  
 /* First make sure that you have installed the package */

  /* If you are using yarn */
  // yarn add @calcom/embed-react

  /* If you are using npm */
  // npm install @calcom/embed-react
  
//   import Cal, { getCalApi } from "@calcom/embed-react";
//   import { useEffect } from "react";
//   export default function MyApp() {
// 	useEffect(()=>{
// 	  (async function () {
// 		const cal = await getCalApi({"namespace":"15min"});
// 		cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#4B8AEF"},"dark":{"cal-brand":"#4B8AEF"}},"hideEventTypeDetails":false,"layout":"month_view"});
// 	  })();
// 	}, [])
// 	return <Cal namespace="15min"
// 	  calLink="santhosh-perumal-qwqkgl/15min"
// 	  style={{width:"100%",height:"100%",overflow:"scroll"}}
// 	  config={{"layout":"month_view","theme":"auto"}}
    
	  
// 	/>;
//   };
  

/* First make sure that you have installed the package */

  /* If you are using yarn */
  // yarn add @calcom/embed-react

  /* If you are using npm */
  // npm install @calcom/embed-react
  
  import Cal, { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function MyApp() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"15min"});
		cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#4B8AEF"},"dark":{"cal-brand":"#4B8AEF"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <Cal namespace="15min"
	  calLink="santhosh-perumal-qwqkgl/15min"
	  style={{width:"100%",height:"100%",overflow:"scroll"}}
	  config={{"layout":"month_view","theme":"light"}}
    
	  
	/>;
  };
  