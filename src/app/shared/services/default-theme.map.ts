import { ApplicationCssVarNames } from './application-css-var-names.enum';

export const DefaultThemeMap: Map<string, string > = new Map<string, string>([
    [ApplicationCssVarNames.APPLICATION_BACKGROUND, '#faf9f8'],

    /* New Styles that conform to variables given by
     https,//fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/master/theming-designer/index.html */
    [ApplicationCssVarNames.THEME_PRIMARY, '0,120,212'],
    [ApplicationCssVarNames.THEME_SECONDARY, '43,136,216'],
    [ApplicationCssVarNames.THEME_TERTIARY, '113,175,229'],
    [ApplicationCssVarNames.THEME_LIGHT, '199,224,244'],
    [ApplicationCssVarNames.THEME_LIGHTER, '222,236,249'],
    [ApplicationCssVarNames.THEME_LIGHTER_ALT, '239,246,252'],
    [ApplicationCssVarNames.THEME_DARK, '0,90,158'],
    [ApplicationCssVarNames.THEME_DARKER, '0,69,120'],
    [ApplicationCssVarNames.THEME_DARK_ALT, '16,110,190'],

    /* foreground **/
    [ApplicationCssVarNames.THEME_FOREGROUND_BLACK, '0,0,0'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_DARK, '32,31,30'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_PRIMARY, '50,49,48'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_PRIMARY_ALT, '59,58,57'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_SECONDARY, '96,94,92'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_TERTIARY, '161,159,157'],
    [ApplicationCssVarNames.THEME_FOREGROUND_WHITE, '255,255,255'],

    /* Background **/
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_TERTIARY_ALT, '200,198,196'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_DARK, '32,31,30'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_QUATERNARY_ALT, '225,223,221'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_LIGHT, '237,235,233'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_LIGHTER, '243,242,241'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_LIGHT_ALT, '250,249,24']
]);
