// import original module declarations
import 'styled-components';


// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        breakpoints: {
            xs: string,
            s: string,
            m: string,
            l: string,
            xl: string
        }
    }
}