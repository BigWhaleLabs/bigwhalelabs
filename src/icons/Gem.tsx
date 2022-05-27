import classnames, { margin, scale } from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const svgClasses = (tablet?: boolean) =>
  classnames(scale(tablet ? 'scale-50' : 'scale-100'), margin('md:mx-auto'))

export default function () {
  const { tablet } = useBreakpoints()

  return (
    <svg
      width="300"
      height="299"
      viewBox="0 0 300 299"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClasses(tablet)}
    >
      <mask
        id="mask0_452_3197"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="33"
        y="54"
        width="227"
        height="192"
      >
        <path
          d="M259.968 114.99L236.36 216.882L129.051 245.907L51.1756 195.829L33.1886 112.64L148.98 54.6928L204.474 84.8415L259.968 114.99Z"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#mask0_452_3197)">
        <mask
          id="mask1_452_3197"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="33"
          y="54"
          width="227"
          height="192"
        >
          <path
            d="M259.968 114.99L236.36 216.882L129.051 245.907L51.1755 195.829L33.1885 112.64L148.98 54.6928L204.474 84.8415L259.968 114.99Z"
            fill="#C4C4C4"
          />
        </mask>
        <g mask="url(#mask1_452_3197)">
          <g filter="url(#filter0_i_452_3197)">
            <path
              d="M73.7612 129.913L148.98 54.6946L204.474 84.8433L107.896 159.551L73.7612 129.913Z"
              fill="url(#paint0_linear_452_3197)"
            />
          </g>
          <g filter="url(#filter1_i_452_3197)">
            <path
              d="M33.1908 112.638L148.982 54.6909L73.7638 129.909L33.1908 112.638Z"
              fill="url(#paint1_linear_452_3197)"
            />
          </g>
          <g filter="url(#filter2_i_452_3197)">
            <path
              d="M51.1761 195.827L33.1891 112.637L73.762 129.909L107.896 159.546L51.1761 195.827Z"
              fill="url(#paint2_linear_452_3197)"
            />
          </g>
          <g filter="url(#filter3_i_452_3197)">
            <path
              d="M221.643 159.652L107.896 159.55L204.474 84.8428L259.968 114.992L221.643 159.652Z"
              fill="url(#paint3_linear_452_3197)"
            />
          </g>
          <g filter="url(#filter4_i_452_3197)">
            <path
              d="M259.968 114.99L236.36 216.882L208.236 204.331L221.643 159.651L259.968 114.99Z"
              fill="url(#paint4_linear_452_3197)"
            />
          </g>
          <g filter="url(#filter5_i_452_3197)">
            <path
              d="M221.642 159.652L107.895 159.55L208.236 204.332L221.642 159.652Z"
              fill="url(#paint5_linear_452_3197)"
            />
          </g>
          <g filter="url(#filter6_i_452_3197)">
            <path
              d="M129.052 245.907L51.1767 195.829L107.897 159.549L208.237 204.331L236.361 216.882L129.052 245.907Z"
              fill="url(#paint6_linear_452_3197)"
            />
          </g>
          <g style="mix-blend-mode:overlay">
            <path
              d="M140.803 247.647L216.022 172.429L271.516 202.578L174.938 277.285L140.803 247.647Z"
              fill="url(#paint7_linear_452_3197)"
            />
            <path
              d="M100.233 230.372L216.024 172.425L140.806 247.644L100.233 230.372Z"
              fill="url(#paint8_linear_452_3197)"
            />
            <path
              d="M118.218 313.561L100.231 230.371L140.804 247.643L174.939 277.281L118.218 313.561Z"
              fill="url(#paint9_linear_452_3197)"
            />
            <path
              d="M288.685 277.387L174.938 277.285L271.516 202.577L327.01 232.726L288.685 277.387Z"
              fill="url(#paint10_linear_452_3197)"
            />
            <path
              d="M327.01 232.725L303.402 334.617L275.278 322.065L288.685 277.385L327.01 232.725Z"
              fill="url(#paint11_linear_452_3197)"
            />
            <path
              d="M288.685 277.387L174.937 277.284L275.278 322.066L288.685 277.387Z"
              fill="url(#paint12_linear_452_3197)"
            />
            <path
              d="M196.094 363.641L118.219 313.564L174.939 277.283L275.28 322.065L303.403 334.617L196.094 363.641Z"
              fill="url(#paint13_linear_452_3197)"
            />
          </g>
          <g style="mix-blend-mode:overlay">
            <path
              d="M2.62671 139.319L77.8451 64.1008L133.339 94.2495L36.7611 168.957L2.62671 139.319Z"
              fill="url(#paint14_linear_452_3197)"
            />
            <path
              d="M-37.9436 122.044L77.8478 64.0972L2.62938 139.316L-37.9436 122.044Z"
              fill="url(#paint15_linear_452_3197)"
            />
            <path
              d="M-19.9583 205.233L-37.9453 122.043L2.62765 139.315L36.7621 168.953L-19.9583 205.233Z"
              fill="url(#paint16_linear_452_3197)"
            />
            <path
              d="M150.509 169.059L36.7613 168.956L133.339 94.2491L188.833 124.398L150.509 169.059Z"
              fill="url(#paint17_linear_452_3197)"
            />
            <path
              d="M188.833 124.396L165.225 226.289L137.102 213.737L150.509 169.057L188.833 124.396Z"
              fill="url(#paint18_linear_452_3197)"
            />
            <path
              d="M150.508 169.058L36.7607 168.956L137.101 213.738L150.508 169.058Z"
              fill="url(#paint19_linear_452_3197)"
            />
            <path
              d="M57.9178 255.313L-19.9577 205.236L36.7627 168.955L137.103 213.737L165.227 226.289L57.9178 255.313Z"
              fill="url(#paint20_linear_452_3197)"
            />
          </g>
          <g style="mix-blend-mode:overlay">
            <path
              d="M134.878 97.8192L210.096 22.6008L265.59 52.7495L169.012 127.457L134.878 97.8192Z"
              fill="url(#paint21_linear_452_3197)"
            />
            <path
              d="M94.3073 80.544L210.099 22.5972L134.88 97.8156L94.3073 80.544Z"
              fill="url(#paint22_linear_452_3197)"
            />
            <path
              d="M112.293 163.733L94.3057 80.5433L134.879 97.815L169.013 127.453L112.293 163.733Z"
              fill="url(#paint23_linear_452_3197)"
            />
            <path
              d="M282.76 127.559L169.012 127.456L265.59 52.7491L321.084 82.8978L282.76 127.559Z"
              fill="url(#paint24_linear_452_3197)"
            />
            <path
              d="M321.084 82.8964L297.476 184.789L269.353 172.237L282.76 127.557L321.084 82.8964Z"
              fill="url(#paint25_linear_452_3197)"
            />
            <path
              d="M282.759 127.558L169.012 127.456L269.352 172.238L282.759 127.558Z"
              fill="url(#paint26_linear_452_3197)"
            />
            <path
              d="M190.169 213.813L112.293 163.736L169.014 127.455L269.354 172.237L297.478 184.789L190.169 213.813Z"
              fill="url(#paint27_linear_452_3197)"
            />
          </g>
          <g style="mix-blend-mode:overlay">
            <path
              d="M-21.2845 67.163L53.9339 -8.05541L109.428 22.0933L12.8499 96.8007L-21.2845 67.163Z"
              fill="url(#paint28_linear_452_3197)"
            />
            <path
              d="M-61.8548 49.8877L53.9365 -8.05908L-21.2819 67.1593L-61.8548 49.8877Z"
              fill="url(#paint29_linear_452_3197)"
            />
            <path
              d="M126.597 96.9024L12.8501 96.8002L109.428 22.0928L164.922 52.2415L126.597 96.9024Z"
              fill="url(#paint30_linear_452_3197)"
            />
            <path
              d="M164.922 52.2401L141.314 154.132L113.19 141.581L126.597 96.9011L164.922 52.2401Z"
              fill="url(#paint31_linear_452_3197)"
            />
            <path
              d="M126.597 96.9021L12.8495 96.8L113.19 141.582L126.597 96.9021Z"
              fill="url(#paint32_linear_452_3197)"
            />
            <path
              d="M34.0066 183.157L-43.869 133.079L12.8514 96.7987L113.192 141.581L141.315 154.132L34.0066 183.157Z"
              fill="url(#paint33_linear_452_3197)"
            />
          </g>
        </g>
        <g style="mix-blend-mode:soft-light">
          <rect
            x="419.094"
            y="190.308"
            width="312.187"
            height="390.234"
            transform="rotate(135 419.094 190.308)"
            fill="#00B2FF"
            fill-opacity="0.5"
          />
        </g>
        <g style="mix-blend-mode:overlay">
          <rect
            x="419.094"
            y="190.308"
            width="312.187"
            height="390.234"
            transform="rotate(135 419.094 190.308)"
            fill="url(#pattern0)"
            fill-opacity="0.2"
          />
        </g>
        <g style="mix-blend-mode:overlay">
          <rect
            x="419.094"
            y="190.308"
            width="312.187"
            height="390.234"
            transform="rotate(135 419.094 190.308)"
            fill="#15A1FC"
          />
        </g>
        <rect
          x="419.09"
          y="190.312"
          width="156.094"
          height="195.117"
          transform="rotate(135 419.09 190.312)"
          fill="url(#pattern1)"
          fill-opacity="0.1"
        />
        <rect
          x="281.122"
          y="52.3433"
          width="156.094"
          height="195.117"
          transform="rotate(135 281.122 52.3433)"
          fill="url(#pattern2)"
          fill-opacity="0.1"
        />
        <rect
          x="308.715"
          y="300.687"
          width="156.094"
          height="195.117"
          transform="rotate(135 308.715 300.687)"
          fill="url(#pattern3)"
          fill-opacity="0.1"
        />
        <rect
          x="170.747"
          y="162.718"
          width="156.094"
          height="195.117"
          transform="rotate(135 170.747 162.718)"
          fill="url(#pattern4)"
          fill-opacity="0.1"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_452_3197"
          x="73.7612"
          y="54.6946"
          width="130.712"
          height="104.856"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_452_3197"
          />
        </filter>
        <filter
          id="filter1_i_452_3197"
          x="29.1908"
          y="54.6909"
          width="119.791"
          height="79.2184"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-4" dy="4" />
          <feGaussianBlur stdDeviation="17" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_452_3197"
          />
        </filter>
        <filter
          id="filter2_i_452_3197"
          x="33.1891"
          y="112.637"
          width="74.7074"
          height="87.1899"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_452_3197"
          />
        </filter>
        <filter
          id="filter3_i_452_3197"
          x="107.896"
          y="84.8428"
          width="152.072"
          height="74.8097"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_452_3197"
          />
        </filter>
        <filter
          id="filter4_i_452_3197"
          x="203.236"
          y="112.99"
          width="56.7314"
          height="103.892"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-5" dy="-2" />
          <feGaussianBlur stdDeviation="17" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_452_3197"
          />
        </filter>
        <filter
          id="filter5_i_452_3197"
          x="107.895"
          y="159.55"
          width="113.747"
          height="44.782"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_452_3197"
          />
        </filter>
        <filter
          id="filter6_i_452_3197"
          x="51.1766"
          y="159.549"
          width="187.184"
          height="86.3582"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" />
          <feGaussianBlur stdDeviation="18.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_452_3197"
          />
        </filter>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="3.45946"
          height="3.45946"
        >
          <use
            xlinkHref="#image0_452_3197"
            transform="scale(0.00320321 0.00256257)"
          />
        </pattern>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="6.91893"
          height="6.91893"
        >
          <use
            xlinkHref="#image0_452_3197"
            transform="scale(0.00640641 0.00512513)"
          />
        </pattern>
        <pattern
          id="pattern2"
          patternContentUnits="objectBoundingBox"
          width="6.91893"
          height="6.91893"
        >
          <use
            xlinkHref="#image0_452_3197"
            transform="scale(0.00640641 0.00512513)"
          />
        </pattern>
        <pattern
          id="pattern3"
          patternContentUnits="objectBoundingBox"
          width="6.91893"
          height="6.91893"
        >
          <use
            xlinkHref="#image0_452_3197"
            transform="scale(0.00640641 0.00512513)"
          />
        </pattern>
        <pattern
          id="pattern4"
          patternContentUnits="objectBoundingBox"
          width="6.91893"
          height="6.91893"
        >
          <use
            xlinkHref="#image0_452_3197"
            transform="scale(0.00640641 0.00512513)"
          />
        </pattern>
        <linearGradient
          id="paint0_linear_452_3197"
          x1="162.572"
          y1="126.745"
          x2="53.1393"
          y2="49.4797"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.328125" stop-color="#E8CE5C" />
          <stop offset="0.546875" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_452_3197"
          x1="127.418"
          y1="97.7166"
          x2="-2.834"
          y2="25.9488"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.328125" stop-color="#E8CE5C" />
          <stop offset="0.666667" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_452_3197"
          x1="40.854"
          y1="148.305"
          x2="90.1847"
          y2="127.509"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.338542" stop-color="#E8CE5C" />
          <stop offset="0.651042" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_452_3197"
          x1="226.549"
          y1="160.47"
          x2="146.016"
          y2="127.358"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.317708" stop-color="#E8CE5C" />
          <stop offset="0.65625" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_452_3197"
          x1="251.383"
          y1="189.391"
          x2="181.756"
          y2="153.154"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.333333" stop-color="#E8CE5C" />
          <stop offset="0.588542" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_452_3197"
          x1="187.61"
          y1="211.058"
          x2="156.113"
          y2="145.538"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.302083" stop-color="#E8CE5C" />
          <stop offset="0.651042" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_452_3197"
          x1="140.499"
          y1="173.55"
          x2="146.324"
          y2="236.607"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.322917" stop-color="#E8CE5C" />
          <stop offset="0.677083" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_452_3197"
          x1="229.614"
          y1="244.479"
          x2="120.181"
          y2="167.214"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.328125" stop-color="#E8CE5C" />
          <stop offset="0.546875" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_452_3197"
          x1="194.46"
          y1="215.451"
          x2="64.2081"
          y2="143.683"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.328125" stop-color="#E8CE5C" />
          <stop offset="0.666667" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_452_3197"
          x1="107.896"
          y1="266.039"
          x2="157.227"
          y2="245.243"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.338542" stop-color="#E8CE5C" />
          <stop offset="0.651042" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_452_3197"
          x1="293.591"
          y1="278.204"
          x2="213.058"
          y2="245.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.317708" stop-color="#E8CE5C" />
          <stop offset="0.65625" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_452_3197"
          x1="318.425"
          y1="307.125"
          x2="248.798"
          y2="270.888"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.333333" stop-color="#E8CE5C" />
          <stop offset="0.588542" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_452_3197"
          x1="254.652"
          y1="328.793"
          x2="223.156"
          y2="263.273"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.302083" stop-color="#E8CE5C" />
          <stop offset="0.651042" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_452_3197"
          x1="207.541"
          y1="291.284"
          x2="213.366"
          y2="354.341"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.322917" stop-color="#E8CE5C" />
          <stop offset="0.677083" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_452_3197"
          x1="91.4376"
          y1="136.151"
          x2="-17.9952"
          y2="58.886"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.328125" stop-color="#E8CE5C" />
          <stop offset="0.546875" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_452_3197"
          x1="56.2838"
          y1="107.123"
          x2="-73.9684"
          y2="35.3551"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.328125" stop-color="#E8CE5C" />
          <stop offset="0.666667" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_452_3197"
          x1="-30.2804"
          y1="157.711"
          x2="19.0503"
          y2="136.915"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.338542" stop-color="#E8CE5C" />
          <stop offset="0.651042" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_452_3197"
          x1="155.414"
          y1="169.876"
          x2="74.8815"
          y2="136.764"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.317708" stop-color="#E8CE5C" />
          <stop offset="0.65625" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint18_linear_452_3197"
          x1="180.249"
          y1="198.797"
          x2="110.621"
          y2="162.56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.333333" stop-color="#E8CE5C" />
          <stop offset="0.588542" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint19_linear_452_3197"
          x1="116.476"
          y1="220.464"
          x2="84.9791"
          y2="154.945"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.302083" stop-color="#E8CE5C" />
          <stop offset="0.651042" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint20_linear_452_3197"
          x1="69.3641"
          y1="182.956"
          x2="75.1894"
          y2="246.013"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.322917" stop-color="#E8CE5C" />
          <stop offset="0.677083" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint21_linear_452_3197"
          x1="223.688"
          y1="94.6511"
          x2="114.256"
          y2="17.386"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.328125" stop-color="#E8CE5C" />
          <stop offset="0.546875" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint22_linear_452_3197"
          x1="188.535"
          y1="65.6229"
          x2="58.2825"
          y2="-6.14493"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.328125" stop-color="#E8CE5C" />
          <stop offset="0.666667" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint23_linear_452_3197"
          x1="101.971"
          y1="116.211"
          x2="151.301"
          y2="95.4151"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.338542" stop-color="#E8CE5C" />
          <stop offset="0.651042" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint24_linear_452_3197"
          x1="287.665"
          y1="128.376"
          x2="207.133"
          y2="95.2638"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.317708" stop-color="#E8CE5C" />
          <stop offset="0.65625" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint25_linear_452_3197"
          x1="312.5"
          y1="157.297"
          x2="242.872"
          y2="121.06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.333333" stop-color="#E8CE5C" />
          <stop offset="0.588542" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint26_linear_452_3197"
          x1="248.727"
          y1="178.964"
          x2="217.23"
          y2="113.445"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.302083" stop-color="#E8CE5C" />
          <stop offset="0.651042" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint27_linear_452_3197"
          x1="201.615"
          y1="141.456"
          x2="207.44"
          y2="204.513"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.322917" stop-color="#E8CE5C" />
          <stop offset="0.677083" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint28_linear_452_3197"
          x1="67.5263"
          y1="63.9948"
          x2="-41.9065"
          y2="-13.2703"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.328125" stop-color="#E8CE5C" />
          <stop offset="0.546875" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint29_linear_452_3197"
          x1="32.3726"
          y1="34.9666"
          x2="-97.8797"
          y2="-36.8012"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.328125" stop-color="#E8CE5C" />
          <stop offset="0.666667" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint30_linear_452_3197"
          x1="131.503"
          y1="97.72"
          x2="50.9703"
          y2="64.6076"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.317708" stop-color="#E8CE5C" />
          <stop offset="0.65625" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint31_linear_452_3197"
          x1="156.337"
          y1="126.641"
          x2="86.71"
          y2="90.4038"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.333333" stop-color="#E8CE5C" />
          <stop offset="0.588542" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint32_linear_452_3197"
          x1="92.5646"
          y1="148.308"
          x2="61.0678"
          y2="82.7884"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.302083" stop-color="#E8CE5C" />
          <stop offset="0.651042" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <linearGradient
          id="paint33_linear_452_3197"
          x1="45.4529"
          y1="110.8"
          x2="51.2782"
          y2="173.857"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7BED" />
          <stop offset="0.322917" stop-color="#E8CE5C" />
          <stop offset="0.677083" stop-color="#263DB4" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
        <image
          id="image0_452_3197"
          width="1080"
          height="1350"
        />
      </defs>
    </svg>
  )
}