// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

// import { startDevServer } from '@cypress/vite-dev-server'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { startDevServer } = require('@cypress/vite-dev-server')

export default (
    on: (arg0: string, arg1: (options: any) => any) => void,
    config: any,
) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config

    const viteConfig: any = {
        plugins: [],
    }

    viteConfig.esbuild = viteConfig.esbuild || {}
    viteConfig.esbuild.jsxFactory = 'h'
    viteConfig.esbuild.jsxFragment = 'Fragment'
    viteConfig.logLevel = 'error'
    viteConfig.resolve = {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    }

    on('dev-server:start', (options: any) => {
        return startDevServer({ options, viteConfig })
    })

    return Object.assign({}, config, {
        fixturesFolder: 'tests/cypress/fixtures',
        integrationFolder: 'tests/cypress/specs',
        screenshotsFolder: 'tests/cypress/screenshots',
        videosFolder: 'tests/cypress/videos',
        supportFile: 'tests/cypress/support/index.ts',
    })
}