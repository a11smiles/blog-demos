/*
 * 
 * The first function is the legacy code for Google Analytics 
 * NOTE: Replace the UA-XXXXXXXXX-1 with your account id
 * 
 */

/*
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
ga('create', 'UA-173474946-1', 'auto');
ga('send', 'pageview');
*/


/*
 * 
 * The code below is the new scripts provided by Google Analytics.
 * Instead of using the code immediately below (commented out), you will need to convert it to promises like the following.
 * NOTE: Repleace the UA-XXXXXXXXX-1 with your account id
 * 
 */


/*
 * New code provided by Google Analytics. Do NOT use. Use the uncommented code below.

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-173474946-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-173474946-1');
</script>
*/

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

Promise.all([
    new Promise((resolve) => {
        var script = document.createElement('script');
        script.src = "https://www.googletagmanager.com/gtag/js?id=UA-173474946-1";
        script.async = true;
        document.body.appendChild(script);
        resolve();
    }), 
    new Promise((resolve) => {
        gtag('js', new Date());
      
        gtag('config', 'UA-173474946-1');
        resolve();
    })
]);