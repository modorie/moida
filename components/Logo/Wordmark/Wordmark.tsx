import styled from 'styled-components'

const Wordmark = ({ ...props }) => (
  <Svg
    viewBox="0 0 485 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M94.4301 40.9503C82.1601 40.9503 72.4301 45.4503 66.4301 53.5803C60.7401 44.9103 52.5901 40.9503 40.9301 40.9503C33.884 40.8845 27.0287 43.239 21.5101 47.6203C20.4858 46.0282 19.0649 44.7301 17.387 43.8534C15.7091 42.9768 13.832 42.5518 11.9401 42.6203C4.94012 42.6203 0.0600586 47.7203 0.0600586 55.0103V121.71C0.0600586 129.01 4.88008 134.1 11.7701 134.1C18.6601 134.1 23.4901 129.01 23.4901 121.71V82.0203C23.4901 73.2703 26.0501 62.8403 38.2501 62.8403C47.5901 62.8403 52.33 68.9003 52.33 80.8403V121.74C52.33 129.04 57.1501 134.13 64.0401 134.13C70.9301 134.13 75.7601 129.04 75.7601 121.74V82.0203C75.7601 74.8603 77.6301 62.8403 90.1801 62.8403C99.6401 62.8403 104.43 68.9003 104.43 80.8403V121.74C104.43 129.04 109.25 134.13 116.14 134.13C123.03 134.13 127.86 129.04 127.86 121.74V76.9303C127.87 52.0703 111.07 40.9503 94.4301 40.9503Z"
      fill="currentColor"
    />
    <path
      d="M186.67 40.9502C159.99 40.9502 141.36 60.4202 141.36 88.3002C141.36 116.18 159.99 135.65 186.67 135.65C213.35 135.65 231.99 116.18 231.99 88.3002C231.99 60.4202 213.35 40.9502 186.67 40.9502ZM186.67 113.75C171.27 113.75 165.8 100.04 165.8 88.3002C165.8 76.5602 171.27 62.8402 186.67 62.8402C202.07 62.8402 207.51 76.5602 207.51 88.2902C207.51 100.02 202.08 113.75 186.67 113.75V113.75Z"
      fill="currentColor"
    />
    <path
      d="M261.77 52.4102C254.51 52.4102 249.51 57.5902 249.51 65.2902V121.2C249.51 129.04 254.31 134.1 261.73 134.1C269.15 134.1 273.96 129.04 273.96 121.2V65.2902C274 57.5902 269.08 52.4102 261.77 52.4102Z"
      fill="currentColor"
    />
    <path
      d="M261.15 41.5903C269.318 41.5903 275.94 34.9685 275.94 26.8003C275.94 18.632 269.318 12.0103 261.15 12.0103C252.982 12.0103 246.36 18.632 246.36 26.8003C246.36 34.9685 252.982 41.5903 261.15 41.5903Z"
      fill="currentColor"
    />
    <path
      d="M368.59 11.0903C361.22 11.0903 355.87 16.3003 355.87 23.4803V47.4803C349.239 43.1992 341.503 40.9438 333.61 40.9903C308.46 40.9903 291.61 59.9903 291.61 88.1703C291.61 116.59 308.51 135.69 333.61 135.69C342.469 135.823 351.135 133.094 358.32 127.91C359.345 129.867 360.904 131.492 362.816 132.598C364.727 133.705 366.913 134.246 369.12 134.16C376.3 134.16 381.31 129.07 381.31 121.77V23.4803C381.31 16.2903 375.96 11.0903 368.59 11.0903ZM336.79 113.75C323.12 113.75 317.01 100.97 317.01 88.3003C317.01 75.6303 323.12 62.8403 336.79 62.8403C350.46 62.8403 356.57 75.6303 356.57 88.3003C356.57 100.97 350.45 113.75 336.79 113.75Z"
      fill="currentColor"
    />
    <path
      d="M472.41 44.0003C467.53 44.0003 463.72 46.1703 461.74 49.7703C455.19 44.8603 446.94 42.3003 437.43 42.3003C412.65 42.3003 393.97 62.4403 393.97 89.1503C393.97 115.66 412.65 135.65 437.43 135.65C446.076 135.708 454.531 133.107 461.65 128.2C463.65 131.89 467.46 134.12 472.41 134.12C479.71 134.12 484.61 129.28 484.61 122.07V56.0703C484.61 48.8403 479.71 44.0003 472.41 44.0003ZM439.73 114.09C424.48 114.09 419.06 100.56 419.06 88.9803C419.06 77.4003 424.48 63.8603 439.73 63.8603C454.98 63.8603 460.4 77.3903 460.4 88.9803C460.4 101.12 454.97 114.09 439.73 114.09Z"
      fill="currentColor"
    />
  </Svg>
)

export default Wordmark

const Svg = styled.svg`
  color: ${({ theme }) => theme.color.blue200};
`
