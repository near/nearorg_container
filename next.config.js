const appGatewayHostname = 'https://dev.near.org'; // This will probably change to "apps.near.org"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  redirects: async () => {
    return [
      // Please keep redirects in alphabetical order based on `source`:

      {
        source: '/applications',
        destination: `${appGatewayHostname}/applications`,
        permanent: true,
      },
      {
        source: '/blog/getting-started-with-the-near-wallet',
        destination: 'https://wallet.near.org',
        permanent: true,
      },
      {
        source: '/brand',
        destination: 'https://pages.near.org/brand',
        permanent: true,
      },
      {
        source: '/components',
        destination: `${appGatewayHostname}/components`,
        permanent: true,
      },
      {
        source: '/consensus',
        destination: 'https://nearconsensus2023.splashthat.com/',
        permanent: false,
      },
      {
        source: '/da',
        destination: '/data-availability',
        permanent: true,
      },
      {
        source: '/developer-governance',
        destination: 'https://neardevgov.org/',
        permanent: false,
      },
      {
        source: '/docs',
        destination: 'https://docs.near.org',
        permanent: true,
      },
      {
        source: '/ethcc',
        destination: 'https://www.eventbrite.com/e/near-ethcc-tickets-655229297467',
        permanent: false,
      },
      {
        source: '/ethdenver',
        destination: 'https://pages.near.org/ethdenver2024',
        permanent: true,
      },
      {
        source: '/files/:slug',
        destination: 'https://discovery-domain.org/papers/:slug.pdf',
        permanent: false,
      },
      {
        source: '/gateways',
        destination: `${appGatewayHostname}/gateways`,
        permanent: true,
      },
      {
        source: '/horizon',
        destination: `${appGatewayHostname}/nearhorizon.near/component/HomePage`,
        permanent: true,
      },
      {
        source: '/nearcon23.near/widget/Index',
        destination: 'https://nearcon.app',
        permanent: true,
      },
      {
        source: '/onboarding',
        destination: `${appGatewayHostname}/onboarding`,
        permanent: true,
      },
      {
        source: '/papers/:slug',
        destination: 'https://discovery-domain.org/papers/:slug.pdf',
        permanent: false,
      },
      {
        source: '/people',
        destination: `${appGatewayHostname}/people`,
        permanent: true,
      },
      {
        source: '/pitch',
        destination: 'https://nearpitchfestconsensus.splashthat.com/',
        permanent: false,
      },
      {
        source: '/sandbox',
        destination: `${appGatewayHostname}/sandbox`,
        permanent: true,
      },
      {
        source: '/signin',
        destination: `${appGatewayHostname}/applications?requestAuth=1`,
        permanent: false,
      },
      {
        source: '/signup',
        destination: `${appGatewayHostname}/applications?requestAuth=1&createAccount=1`,
        permanent: false,
      },
      {
        source: '/stackoverflow',
        destination: `${appGatewayHostname}/near/widget/NearOrg.HomePage?utm_source=stack&utm_medium=podcast&utm_campaign=stackoverflow_evergreen_bos_awareness`,
        permanent: false,
      },
      {
        source: '/stakewars',
        destination: 'https://github.com/near/stakewars-iv',
        permanent: false,
      },
      {
        source: '/validators',
        destination: 'https://pages.near.org/validators',
        permanent: true,
      },

      // Handle dynamic widget/component path redirects:

      {
        source: '/:path/component/:slug',
        destination: `${appGatewayHostname}/:path/component/:slug`,
        permanent: true,
      },
      {
        source: '/:path/widget/:slug',
        destination: `${appGatewayHostname}/:path/widget/:slug`,
        permanent: true,
      },
    ];
  },
  rewrites: async () => [
    {
      source: '/api/analytics/:path*',
      destination: 'https://near.dataplane.rudderstack.com/:path*',
    },
    {
      source: '/blog/:path*',
      destination: '/blog/:path*/index.html',
    }
  ],
  headers: async () => [
    {
        source: '/:path*',
        headers: [{
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        }]
      }
  ]
};

module.exports = nextConfig;
