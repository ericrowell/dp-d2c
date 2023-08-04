import React from 'react';

const App: React.FC = () => {
  return (
    <html>
      <head>
        <title>Prudential</title>
        <link rel="shortcut icon" type="image/icon" href="./assets/images/header/prudential_web_icon_16x16.ico" />
        <meta charSet="utf-8" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="pragma" content="no-cache" />
        <meta httpEquiv="Strict-Transport-Security" content="no-cache" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,300,800,700,400italic" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab|Roboto:400,700" />
        <script>
          {`
            (function(w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
              });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-5CG7BN8');
          `}
        </script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5CG7BN8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ui-view></ui-view>
        <script type="text/javascript" src="./assets/javascripts/ds3Encrypt_e2ee.js"></script>
        <script type="text/javascript" src="./assets/javascripts/DSSSCryptography-1.5.1.js"></script>
        <script type="text/javascript" src="./assets/javascripts/jquery-3.6.0.min.js"></script>
        <script src="./assets/javascripts/respond.src.js"></script>
        <script>
          {`
            window.onunload = null;
            window.addEventListener('pageshow', function(event) {
              if (event.persisted) {
                window.location.reload(true);
              }
            });
          `}
        </script>
      </body>
    </html>
  );
};

export default App;
