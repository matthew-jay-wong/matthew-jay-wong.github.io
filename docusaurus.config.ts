import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Matt Hew',
  tagline: 'Thoughts, insights, and musings on things that make it worth to wake up in the morning',
  favicon: 'img/favicon-purple.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://matthew-jay-wong.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'matthew-jay-wong', // Usually your GitHub org/user name.
  projectName: 'matthew-jay-wong.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/matthew-jay-wong/matthew-jay-wong.github.io/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/favicon-purple.svg',
    navbar: {
      title: 'Matt Hew',
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/sports', label: 'Sports', position: 'left'},
        {to: '/tech', label: 'Tech', position: 'left'},
        {to: '/reading', label: 'Reading', position: 'left'},
        {to: '/movies-tv', label: 'Movies & TV', position: 'left'},
        {to: '/lifestyle', label: 'Lifestyle', position: 'left'},
        {
          href: 'https://github.com/matthew-jay-wong/matthew-jay-wong.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Sports',
              to: '/sports',
            },
            {
              label: 'Tech',
              to: '/tech',
            },
            {
              label: 'Reading',
              to: '/reading',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Movies & TV',
              to: '/movies-tv',
            },
            {
              label: 'Lifestyle',
              to: '/lifestyle',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/matthew-jay-wong/matthew-jay-wong.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Matt Hew. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
