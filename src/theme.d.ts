import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    effect: {
      boxShadow: string
    }
    motion: {
      easeInOut: string
    }
    layout: {
      desktop: {
        borderRadius: string
        borderRadiusLarge: string
        spacingSmall: string
        spacingMedium: string
        spacingLarge: string
      }
      mobile: {
        borderRadius: string
        borderRadiusLarge: string
        spacingSmall: string
        spacingMedium: string
        spacingLarge: string
        media: string
      }
    }
    colors: {
      background: string
      secondaryBackground: string
      tertiaryBackground: string
      label: string
      secondaryLabel: string
    }
  }
}
