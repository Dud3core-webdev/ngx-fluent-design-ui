import { ApplicationCssVarNames } from './application-css-var-names.enum';

export const DarkThemeMap: Map<string, string> = new Map<string, string>([
    [ApplicationCssVarNames.APPLICATION_BACKGROUND, '#383737'],
    /* New Styles that conform to variables given by
     https,//fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/master/theming-designer/index.html */
    [ApplicationCssVarNames.THEME_PRIMARY, '140,163,255'],
    [ApplicationCssVarNames.THEME_SECONDARY, '123,144,224'],
    [ApplicationCssVarNames.THEME_TERTIARY, '84,98,153'],
    [ApplicationCssVarNames.THEME_LIGHT, '42,49,77'],
    [ApplicationCssVarNames.THEME_LIGHTER, '22,26,41'],
    [ApplicationCssVarNames.THEME_LIGHTER_ALT, '6,7,10'],
    [ApplicationCssVarNames.THEME_DARK, '168,185,255'],
    [ApplicationCssVarNames.THEME_DARKER, '191,204,255'],
    [ApplicationCssVarNames.THEME_DARK_ALT, '152,172,255'],

    /* foreground **/
    [ApplicationCssVarNames.THEME_FOREGROUND_BLACK, '248,248,248'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_DARK, '244,244,244'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_PRIMARY, '255,255,255'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_PRIMARY_ALT, '218,218,218'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_SECONDARY, '208,208,208'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_TERTIARY, '200,200,200'],
    [ApplicationCssVarNames.THEME_FOREGROUND_WHITE, '41,40,40'],

    /* Background **/
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_TERTIARY_ALT, '116,113,113'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_DARK, '244,244,244'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_QUATERNARY_ALT, '80,78,78'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_LIGHT, '72,70,70'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_LIGHTER, '58,57,57'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_LIGHT_ALT, '50,49,4']
]);
