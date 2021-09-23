import { createGlobalStyle } from 'styled-components'

export const GlobalFonts = createGlobalStyle`

@font-face{font-family:'SF Pro Display';src:url('${process.env.REACT_APP_API}/fonts/SF-Pro-Display-Black.otf') format('opentype');font-display:swap;}
@font-face{font-family:'SF Pro Display';font-weight:300;src:url('${process.env.REACT_APP_API}/fonts/SF-Pro-Display-Light.otf') format('opentype');font-display:swap;}
@font-face{font-family:'SF Pro Display';font-weight:400;src:url('${process.env.REACT_APP_API}/fonts/SF-Pro-Display-Regular.otf') format('opentype');font-display:swap;}
@font-face{font-family:'SF Pro Display';font-weight:500;src:url('${process.env.REACT_APP_API}/fonts/SF-Pro-Display-Medium.otf') format('opentype');}
@font-face{font-family:'SF Pro Display';font-weight:600;src:url('${process.env.REACT_APP_API}/fonts/SF-Pro-Display-Semibold.otf') format('opentype');font-display:swap;}
@font-face{font-family:'SF Pro Display';font-weight:700;src:url('${process.env.REACT_APP_API}/fonts/SF-Pro-Display-Bold.otf') format('opentype');font-display:swap;}
@font-face{font-family:'SF Pro Display';font-weight:800;src:url('${process.env.REACT_APP_API}/fonts/SF-Pro-Display-Heavy.otf') format('opentype');font-display:swap;}
*{box-sizing:border-box;font-family:SF Pro Display !important;}

`

