export const DefaultTheme: ITheme = {
    colors: {
        base: 'white',
        secondary: 'blue',
    },
    height: {
        large: '400px',
        medium: '36px',
        small: '8px',
        smedium: '16px'
    },
    padding: {
        large: '80px',
        medium: '32px',
    },
    sizes: {
        large: '32px',
        medium: '16px',
        small: '8px',
        tiny: '4px',
        xlarge: '64px',
    },
    text_input: {
        backgroundColor: 'white',
        color: 'blue',
        size: {
            medium: {
                height: '36px',
                width: '400px'
            }
        }
    },
    width: {
        full: '100%',
        large: '928px',
        medium: '64px',
        small: '8px',
        smedium: '16px',
        xlarge: '1280px'
    },
}

// full
// large (flex centered)
// large + padding (inner large)

export interface ITheme {
    colors: {
        base: string;
        secondary: string;
    }
    height: {
        small: string;
        smedium: string;
        medium: string;
        large: string;
    }
    width: {
        small: string;
        smedium: string;
        medium: string;
        large: string;
        xlarge: string;
        full: string;
    }
    padding: {
        medium: string;
        large: string;
    }
    sizes: {
        tiny: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
    }
    text_input: ITextInputInterface;
}

export interface ITextInputInterface {
    color: string;
    backgroundColor: string;
    size: {
        medium: {
            width: string;
            height: string;
        }
    }
}