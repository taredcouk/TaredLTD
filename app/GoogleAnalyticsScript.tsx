import Script from "next/script";


export default function GoogleAnalyticsScript() {
  return (
    <>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-VRKRLX390T" />
        <Script strategy='lazyOnload'>
        {` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-VRKRLX390T'); `}
        </Script>
    </>
  )
}
