// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',
  'd3',
  'angular2-notifications',

  // App specific barrels.
  'app',
  'app/shared',
  'app/components/search/search-page',
  'app/components/search/search-bar',
  'app/components/search/search-resutl',
  'app/components/search/search-result',
  'app/components/details/equaltion',
  'app/components/details/chemical-equation',
  'app/components/details/metabolite-details',
  'app/components/details/reaction-details',
  'app/components/analyze/measurement',
  'app/components/documentation/documentation',
  'app/signup',
  'app/login',
  'app/components/analyze/result',
  'app/components/visualization',
  'app/components/analyze/result/iteration-color-box',
  'app/components/analyze/result/text-result',
  'app/components/accordion',
  'app/components/panel/panel',
  'app/components/panel',
  'app/components/panel/analyze',
  'app/components/panel/profile',
  'app/components/fullscreenable-svg',
  'app/components/test',
  'app/components/loading',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};

barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

cliSystemConfigPackages["d3"].main = 'd3.js'
cliSystemConfigPackages["angular2-notifications"].main = 'components.js'

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'd3': 'vendor/d3',
    'angular2-notifications': 'vendor/angular2-notifications',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
