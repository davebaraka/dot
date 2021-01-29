type DynamicColor = {
  light: string
  dark: string
}

type Colors = {
  background: DynamicColor;
  secondaryBackground: DynamicColor;
  tertiaryBackground: DynamicColor;
  label: DynamicColor;
  secondaryLabel: DynamicColor;
}

const colors: Colors = {
  background: { light: "#F4F5F8", dark: "#131315" },
  secondaryBackground: { light: "#E3E5E8", dark: "#343638" },
  tertiaryBackground: { light: "#FFFFFF", dark: "#4D4F52" },
  label: { light: "#131315", dark: "#FFFFFF" },
  secondaryLabel:{ light: "#393A3D", dark: "#F1F4F7" },
}

export default colors
