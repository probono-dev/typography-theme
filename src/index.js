import gray from 'gray-percentage';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';
import verticalRhythm from 'compass-vertical-rhythm';

export const linkColor = '#f5c9db';
export const backgroundColor = '#fdf9f9';

const theme = {
  title: 'ProBono',
  baseFontSize: '20px',
  baseLineHeight: 1.45,
  googleFonts: [],
  headerFontFamily: ['Rubik', 'sans-serif'],
  bodyFontFamily: ['Nunito', 'sans-serif'],
  headerColor: '#534B45',
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: '400',
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const vr = verticalRhythm({
      baseFontSize: '17px',
      baseLineHeight: '24.65px',
    });
    return {
      a: {
        color: gray(10),
        textDecoration: 'none',
        borderBottom: `4px solid ${linkColor}`,
        background: `linear-gradient(${linkColor}, ${linkColor} 100%) bottom no-repeat`,
        backgroundPositionY: '110%',
        backgroundSize: '100% 0',
        transition: 'background-size .1s'
      },
      'a:hover,a:active': {
        backgroundSize: '100% 20%',
      },
      'h1,h2,h3,h4,h5,h6': {
        marginTop: rhythm(1.5),
        marginBottom: rhythm(0.5),
      },
      // Blockquote styles.
      blockquote: {
        ...scale(1 / 5),
        borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
        color: gray(35),
        paddingLeft: rhythm(10 / 16),
        fontStyle: 'italic',
        marginLeft: 0,
        marginRight: 0,
      },
      'blockquote > :last-child': {
        marginBottom: 0,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontStyle: 'normal',
        fontWeight: options.bodyWeight,
      },
      'blockquote cite:before': {
        content: '"— "',
      },
      [MOBILE_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
        blockquote: {
          borderLeft: `${rhythm(3 / 16)} solid ${linkColor}`,
          color: gray(41),
          paddingLeft: rhythm(9 / 16),
          fontStyle: 'italic',
          marginLeft: rhythm(-3 / 4),
          marginRight: 0,
        },
      },
      'tt,code': {
        backgroundColor: gray(96),
        borderRadius: '3px',
        fontFamily:
          '"PT Mono", Consolas,"Roboto Mono","Droid Sans Mono","Liberation Mono",Menlo,Courier,monospace',
        padding: 0,
        paddingTop: '0.2em',
        paddingBottom: '0.2em',
      },
      pre: {
        background: gray(96),
        borderRadius: '3px',
        lineHeight: 1.42,
        overflow: 'auto',
        wordWrap: 'normal', // So code will scroll on Safari.
        padding: rhythm(1),
      },
      'pre code': {
        background: 'none',
        lineHeight: 1.42,
      },
      // Add space before and after code/tt elements.
      'code:before,code:after,tt:before,tt:after': {
        letterSpacing: '-0.2em',
        content: '"\u00A0"',
      },
      // But don't add spaces if the code is inside a pre.
      'pre code:before,pre code:after,pre tt:before,pre tt:after': {
        content: 'none',
      },
      'li>a>img': {
        margin: 0,
        width: '1em',
      },
    };
  },
};

export default theme;
