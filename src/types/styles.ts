export type ColorsTokens = {
  lychee_100: "#FFFFFF";
  lychee_200: "#FCFCFC";
  lychee_300: "#F2F5F5";
  lychee_400: "#E8EBEB";
  lychee_500: "#D9DEDE";
  lychee_600: "#ADB2B2";
  lychee_700: "#949999";
  lychee_800: "#565959";
  lychee_900: "#263333";

  pear_100: "#E1FAE9";
  pear_200: "#A8F0C0";
  pear_300: "#50E582";

  java_100: "#E1F8FA";
  java_200: "#ABEFF5";
  java_300: "#39D7E5";

  grape_100: "#E8E5FF";
  grape_200: "#AFAAF2";
  grape_300: "#7C67E5";

  pitaya_100: "#FFE5F7";
  pitaya_200: "#F5ABDC";
  pitaya_300: "#F048B8";

  blackberry_100: "#FAE1E1";
  blackberry_200: "#F2A9A9";
  blackberry_300: "#E54545";

  tangerine_100: "#FFF0E5";
  tangerine_200: "#FFD2B2";
  tangerine_300: "#F5914A";

  mango_100: "#FFF7E5";
  mango_200: "#FFE8B2";
  mango_300: "#FFC234";
}

export type SystemColors = {
  "kv_color_primary": "lychee800"
  "kv_color_primary_contrast": "lychee100"

  "kv_color_secondary": "java300"
  "kv_color_secondary_contrast": "lychee100"

  "kv_color_tertiary": "grape300"
  "kv_color_tertiary_contrast": "lychee100"
  "kv_color_tertiary_alt": "pitaya300"
  "kv_color_tertiary_alt_contrast": "lychee100"

  "kv_color_success": "pear300"
  "kv_color_success_contrast": "lychee100"

  "kv_color_warning": "mango300"
  "kv_color_warning_contrast": "lychee100"

  "kv_color_warning_alt": "tangerine300"

  "kv_color_danger": "blackberry300"
  "kv_color_danger_contrast": "lychee100"

  "kv_color_white": "lychee100"
  "kv_color_white_contrast": "lychee800"
}

export type Colors = {
  "primary": "kv_color_primary",
  "secondary": "kv_color_secondary",
  "tertiary": "kv_color_tertiary",
  "tertiary_alt": "kv_color_tertiary_alt",
  "success": "kv_color_success",
  "warning": "kv_color_warning",
  "warning_alt": "kv_color_warning",
  "danger": "kv_color_danger",
  "white": "kv_color_white",
}

export type FontSizes = {
  "kv_font_size_xs": "0.75rem"; /* 12px */
  "kv_font_size_sm": "0.875rem"; /* 14px */
  "kv_font_size_md": "1rem"; /* 16px */
  "kv_font_size_lg": "1.125rem"; /* 18px */
  "kv_font_size_xl": "1.25rem"; /* 20px */
  "kv_font_size_2xl": "1.5rem"; /* 24px */
  "kv_font_size_3xl": "1.75rem"; /* 28px */
  "kv_font_size_4xl": "2rem"; /* 32px */
  "kv_font_size_5xl": "2.5rem"; /* 40px */
  "kv_font_size_6xl": "3rem"; /* 48px*/
}

// LINE-HEIGHT
export type LineHeights = {
  "kv_line_height_xs": "calc(1em + 0.125rem)";
  "kv_line_height_sm": "calc(1em + 0.25rem)";
  "kv_line_height_md": "calc(1em + 0.5rem)";
  "kv_line_height_lg": "calc(1em + 0.75rem)";
  "kv_line_height_xl": "calc(1em + 1rem)";
}

// FONT-WEIGHT
export type FontWeights = {
  "kv_font_weight_thin": 200;
  "kv_font_weight_light": 300;
  "kv_font_weight_regular": 400;
  "kv_font_weight_medium": 500;
  "kv_font_weight_semibold": 600;
  "kv_font_weight_bold": 700;
  "kv_font_weight_black": 900;
}

export type GlobalStyles = ColorsTokens & SystemColors & FontSizes & LineHeights & FontWeights;